// src/context/VZNContext.tsx
import { createContext, useContext, useState, FC, ReactNode } from "react";

interface VZNContextType {
  numberVZNValue: number;
  setNumberVZNValue: (value: number) => void;
  initInputSpecSenderValue: string;
  setInitInputSpecSenderValue: (value: string) => void;
  initInputSpecClaimerValue: string;
  setInitInputSpecClaimerValue: (value: string) => void;
  initInputSpecRecipientValue: string; // Добавлено
  setInitInputSpecRecipientValue: (value: string) => void; // Добавлено
  initInputNumberValue: number; // Добавлено
  setInitInputNumberValue: (value: number) => void; // Добавлено
  initInputDateValue: string; // Добавлено
  setInitInputDateValue: (value: string) => void; // Добавлено
  resetValues: () => void; // Метод для сброса значений
}

const VZNContext = createContext<VZNContextType | undefined>(undefined);

export const VZNProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [numberVZNValue, setNumberVZNValue] = useState(0);
  const [initInputSpecSenderValue, setInitInputSpecSenderValue] = useState("");
  const [initInputSpecClaimerValue, setInitInputSpecClaimerValue] = useState("");
  const [initInputSpecRecipientValue, setInitInputSpecRecipientValue] = useState(""); // Добавлено
  const [initInputNumberValue, setInitInputNumberValue] = useState<number>(0);
  const [initInputDateValue, setInitInputDateValue] = useState(""); // Добавлено

  const resetValues = () => {
    setNumberVZNValue(0);
    setInitInputSpecSenderValue("");
    setInitInputSpecClaimerValue("");
    setInitInputSpecRecipientValue(""); // Добавлено
    setInitInputNumberValue(0); // Добавлено
    setInitInputDateValue(""); // Добавлено
  };

  return (
    <VZNContext.Provider
      value={{
        numberVZNValue,
        setNumberVZNValue,
        initInputSpecSenderValue,
        setInitInputSpecSenderValue,
        initInputSpecClaimerValue,
        setInitInputSpecClaimerValue,
        initInputSpecRecipientValue,
        setInitInputSpecRecipientValue,
        initInputNumberValue,
        setInitInputNumberValue,
        initInputDateValue,
        setInitInputDateValue,
        resetValues,
      }}
    >
      {children}
    </VZNContext.Provider>
  );
};

export const useVZN = () => {
  const context = useContext(VZNContext);
  if (!context) {
    throw new Error("useVZN должен использоваться внутри VZNProvider");
  }
  return context;
};
