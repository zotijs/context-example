import { createContext } from 'react';

const createStore = (initialState) => createContext(initialState);

export default createStore;
