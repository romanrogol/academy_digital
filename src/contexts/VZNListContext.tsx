import { createContext, useContext, useState, ReactNode, FC } from 'react';
import axios from 'axios';

const VznListContext = createContext<VznListContextType | undefined>(undefined);

// Интерфейсы
interface VznItemProps {
    Code: number;
    ArticleCode: string; 
    ArticleName: string;  
    LeaveQty: number;
    ArrivalQty: number;
}

interface FilterProps {
    Codes: string[];
    Num: string;
    Sender: number;
    Receiver: number;
    Period: string;
}

interface VznListContextType {
    vznList: VznItemProps[];
    loading: boolean;
    error: string | null;
    filters: FilterProps;
    updateFilters: (newFilters: Partial<FilterProps>) => void;
    fetchVznList: (token: string | null) => Promise<void>;
}

export const VznListProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [vznList, setVznList] = useState<VznItemProps[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [filters, setFilters] = useState<FilterProps>({
        Codes: [],
        Num: "23407",
        Sender: 0,
        Receiver: 0,
        Period: ""
    });

    const updateFilters = (newFilters: Partial<FilterProps>) => {
        setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
    };

    const fetchVznList = async (token: string | null) => {
        setLoading(true);
        setError(null); // Сброс ошибки перед загрузкой

        try {
            const response = await axios.post('http://92.55.15.91:8225/stock/wsInplants.loadByFilter', {
                authToken: token,
                flt: filters
            });

            const data: VznItemProps[] = response.data.wsInplants || [];
            setVznList(data);
        } catch {
            setError('Ошибка загрузки данных ВЗН УП');
        } finally {
            setLoading(false);
        }
    };

    return (
        <VznListContext.Provider value={{ vznList, loading, error, filters, updateFilters, fetchVznList }}>
            {children}
        </VznListContext.Provider>
    );
};

export const useVznListContext = () => {
    const context = useContext(VznListContext);
    if (context === undefined) {
        throw new Error('useVznListContext Должен быть использован в VznListProvider');
    }
    return context;
};
