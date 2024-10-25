// src/context/DivisionsContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

interface Division {
  code: number;
  name: string;
}

interface DivisionsContextType {
  divisions: Division[];
  loading: boolean;
  error: string | null;
  fetchDivisions: () => Promise<void>;
}

const DivisionsContext = createContext<DivisionsContextType | undefined>(undefined);

export const DivisionsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [divisions, setDivisions] = useState<Division[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDivisions = async () => {
    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
      setError("Токен аутентификации отсутствует.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://92.55.15.91:8225/divisions/storeDivisions.avDivisions",
        {
          authToken: authToken,
          params: {
            CurrentDivType: 105,
            IsFilter: true,
          },
        }
      );

      if (response.data && Array.isArray(response.data.divisions)) {
        setDivisions(response.data.divisions);
      } else {
        setError("Полученные данные не являются массивом.");
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(`Ошибка: ${err.response.data.String || "Неизвестная ошибка"}`);
      } else {
        setError("Ошибка при загрузке подразделений");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDivisions();
  }, []);

  return (
    <DivisionsContext.Provider value={{ divisions, loading, error, fetchDivisions }}>
      {children}
    </DivisionsContext.Provider>
  );
};

// Хук для доступа к данным контекста
export const useDivisions = () => {
  const context = useContext(DivisionsContext);
  if (!context) {
    throw new Error("useDivisions должен использоваться внутри DivisionsProvider");
  }
  return context;
};
