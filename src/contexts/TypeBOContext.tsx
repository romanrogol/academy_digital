import { createContext, useContext, useState, ReactNode, FC } from 'react';
import axios from 'axios';

export interface InfoBo {
    soCode?: number;
    soType: number;
}

interface TypeBoContextType {
    typeBo: InfoBo;
    loading: boolean;
    error: string | null;
    fetchTypeBo: (token: string | null, soNum: string) => Promise<void>;
}

const TypeBoContext = createContext<TypeBoContextType | undefined>(undefined);

export const TypeBoProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [typeBo, setTypeBo] = useState<InfoBo>({});
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchTypeBo = async (token: string | null, soNum: string) => {
        setLoading(true);
        setError(null); // Сброс ошибки перед загрузкой

        try {
            const response = await axios.post('http://92.55.15.91:8225/so.findOmpObject', {
                authToken: token,
                soNum: soNum,
            });

            const data: InfoBo = response.data || {};
            console.log(response.data);
            setTypeBo(data);
        } catch {
            setError('Ошибка загрузки данных ВЗН УП');
        } finally {
            setLoading(false);
        }
    };

    return (
        <TypeBoContext.Provider value={{ typeBo, loading, error, fetchTypeBo }}>
            {children}
        </TypeBoContext.Provider>
    );
};

export const useTypeBoContext = () => {
    const context = useContext(TypeBoContext);
    if (context === undefined) {
        throw new Error('useTypeBoContext Должен быть использован в TypeBoProvider');
    }
    return context;
};
