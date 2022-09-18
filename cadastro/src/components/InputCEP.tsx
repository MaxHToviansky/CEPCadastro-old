import React, { useEffect, useState } from "react"
import { FormEnderecoContext } from "../pages/FormEnderecoContext"

export default function () {
    const {setCep, cep, setCidade, setUf} = React.useContext(FormEnderecoContext)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(true)

    const atualizaCep = async (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.currentTarget.value.length < 9) return
        setCep(ev.currentTarget.value)
        buscarCep(ev.currentTarget.value)   
    }

    const buscarCep = async (cep: string) => {
        setLoading(true)
        if (!cep) return
        const requestCep = await fetch(`viacep.com.br/ws/${cep}/json/`)
        const responseCep = await requestCep.json()
        if(responseCep.error){
            setError(responseCep.error)
            return
        }
        setError(false)
        setLoading(false)
        setUf(responseCep.uf)
        setCidade(responseCep.localidade)
        
        
    }

    const cepMask = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        ev.currentTarget.value = ev.currentTarget.value.replace(/\D/g, "")
        ev.currentTarget.value = ev.currentTarget.value.replace(/^(\d{5})(\d{3})/, "$1-$2")
    }

    useEffect(() => {
        buscarCep(cep)
    }, [cep])

    return <>
           <div className="inputBox">
                <input className="inputBlock" maxLength={8} type="text" placeholder="insira o CEP" onKeyUp=
                {
                    (ev) => {
                    cepMask(ev)                                    
                    atualizaCep(ev)                    
                    }
                }/>
            </div>
    
    </>
    // Boa parte desse codigo veio do Tiago, mas consigo explicar como tudo funciona.
}