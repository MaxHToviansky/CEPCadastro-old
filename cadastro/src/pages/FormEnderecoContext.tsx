import React, { useState } from "react";

interface Endereco{
    uf: string,
    setUf: React.Dispatch<React.SetStateAction<string>>,
    cidade: string,
    setCidade: React.Dispatch<React.SetStateAction<string>>,
    Cep: string,
    setCep: React.Dispatch<React.SetStateAction<string>>,
}
export const FormEnderecoContext = React.createContext({} as Endereco)

export default function FormAdressContextProvider(props: React.PropsWithChildren) {
    const [uf, setUf] = useState("")
    const [cidade, setCidade] = useState("")
    const [CEP, setCEP] = useState("")

    return <>
        <FormEnderecoContext.Provider value= 
        {{uf, setUf, cidade, setCidade, CEP, setCEP, rua, setRua}}>
        {props.children}
        </FormEnderecoContext.Provider>
    </>
}