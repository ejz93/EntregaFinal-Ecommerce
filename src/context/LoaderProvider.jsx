import React, {createContext, useState} from 'react'

export const LoaderContext = createContext('')

const LoaderProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true);
    const startLoader = () => setIsLoading(true);
    const stopLoader = () => setIsLoading(false);

    return (
        <LoaderContext.Provider value={{isLoading, startLoader, stopLoader}}>
            {children}
        </LoaderContext.Provider>
    )

}
export default LoaderProvider;