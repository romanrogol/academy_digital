import { createContext, useContext, useState, ReactNode, FC } from 'react';
import axios from 'axios';

interface WsInplantContent {
    Code: number;
    ArticleCode: string;   // Обозначение
    ArticleName: string;   // Наименование
    LeaveQty: number;
    ArrivalQty: number;
}

interface VznDetails {
    Sender: string;
    Receiver: string;
    State: string;
    LeaveMoveDate: string;
    wsInplantContents: WsInplantContent[];
}

interface VznDetailsContextType {
    vznDetails: VznDetails | null;
    loading: boolean;
    error: string | null;
    fetchVznDetails: (authToken: string, wsInplantCode: number) => Promise<void>;
}

const VznDetailsContext = createContext<VznDetailsContextType | undefined>(undefined);

export const VznDetailsProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [vznDetails, setVznDetails] = useState<VznDetails | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchVznDetails = async (authToken: string, wsInplantCode: number) => {
        setLoading(true);
        setError(null); // Сброс ошибки перед загрузкой

        try {
            const response = await axios.post('http://92.55.15.91:8225/stock/wsInplants/contents.loadByFilter', {
                authToken: authToken,
                flt: { WsInplantCode: wsInplantCode },
            });

            const data = response.data.wsInplantContents.map((item: WsInplantContent) => ({
                Code: item.Code,
                ArticleCode: item.ArticleCode,    // Обозначение
                ArticleName: item.ArticleName,    // Наименование
                LeaveQty: item.LeaveQty,
                ArrivalQty: item.ArrivalQty,
            }));

            setVznDetails({
                Sender: response.data.Sender,
                Receiver: response.data.Receiver,
                State: response.data.State,
                LeaveMoveDate: response.data.LeaveMoveDate,
                wsInplantContents: data,
            });
        } catch {
            setError('Ошибка загрузки данных ВЗН');
        } finally {
            setLoading(false);
        }
    };

    return (
        <VznDetailsContext.Provider value={{ vznDetails, loading, error, fetchVznDetails }}>
            {children}
        </VznDetailsContext.Provider>
    );
};

export const useVznDetailsContext = () => {
    const context = useContext(VznDetailsContext);
    if (context === undefined) {
        throw new Error('useVznDetailsContext Должен быть использован в VznDetailsProvider');
    }
    return context;
};
