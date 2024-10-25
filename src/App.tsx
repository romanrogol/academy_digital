import { FC } from "react";
import AppRouts from "./components/AppRouts/AppRouts";
import { AuthProvider } from './contexts/AuthContext';
import { DivisionsProvider } from './contexts/DivisionsContext';
import { VznListProvider } from "./contexts/VZNListContext"; 
import { VznDetailsProvider } from "./contexts/VZNDetailContext"; 
import { TypeBoProvider } from "./contexts/TypeBOContext";  
import { VZNProvider } from "./contexts/VZNContext"; 

const App: FC = () => {
  return (
    <AuthProvider>
      <DivisionsProvider>
        <VznListProvider> 
          <VznDetailsProvider> 
            <TypeBoProvider> 
              <VZNProvider> 
                <AppRouts />
              </VZNProvider>
            </TypeBoProvider>
          </VznDetailsProvider>
        </VznListProvider>
      </DivisionsProvider>
    </AuthProvider>
  );
};

export default App;
