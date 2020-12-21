import { useContext } from 'react';

const useStore = (context) => {
    const { state, dispatch } = useContext(context);

    return { state, dispatch };
};

export default useStore;
