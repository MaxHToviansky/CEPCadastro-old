import React, { useState } from "react";

interface Endereco{
    uf: string,
    setUf: React.Dispatch<React.SetStateAction<string>>,
    cidade: string,
    setCidade: React.Dispatch<React.SetStateAction<string>>,
    cep: string,
    setCep: React.Dispatch<React.SetStateAction<string>>,
    
}
export const FormEnderecoContext = React.createContext({} as Endereco)

export default function FormAdressContextProvider(props: React.PropsWithChildren) {
    const [uf, setUf] = useState("")
    const [cidade, setCidade] = useState("")
    const [cep, setCep] = useState("")

    return <>
        <FormEnderecoContext.Provider value= 
        {{uf, setUf, cidade, setCidade, cep, setCep}}>
        {props.children}
        </FormEnderecoContext.Provider>
    </>
}