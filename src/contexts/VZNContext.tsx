import React, { createContext, useContext, useState, FC, ReactNode } from "react";

interface VZNContextType {
  numberVZNValue: number;
  setNumberVZNValue: (value: number) => void;
  initInputSpecSenderValue: string;
  setInitInputSpecSenderValue: (value: string) => void;
  initInputSpecClaimerValue: string;
  setInitInputSpecClaimerValue: (value: string) => void;
}

// Создаем контекст с начальным значением undefined
const VZNContext = createContext<VZNContextType | undefined>(undefined);

export const VZNProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [numberVZNValue, setNumberVZNValue] = useState(0);
  const [initInputSpecSenderValue, setInitInputSpecSenderValue] = useState("");
  const [initInputSpecClaimerValue, setInitInputSpecClaimerValue] = useState("");

  return (
    <VZNContext.Provider
      value={{
        numberVZNValue,
        setNumberVZNValue,
        initInputSpecSenderValue,
        setInitInputSpecSenderValue,
        initInputSpecClaimerValue,
        setInitInputSpecClaimerValue,
      }}
    >
      {children}
    </VZNContext.Provider>
  );
};

// Хук для доступа к данным контекста
export const useVZN = () => {
  const context = useContext(VZNContext);
  if (!context) {
    throw new Error("useVZN должен использоваться внутри VZNProvider");
  }
  return context;
};
