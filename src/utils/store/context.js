import { createContext, useContext } from 'react';

const StoreContext = createContext();
const StoreProvider = StoreContext.Provider;

const useStoreContext = () => useContext(StoreContext);

export { StoreContext, StoreProvider, useStoreContext };
