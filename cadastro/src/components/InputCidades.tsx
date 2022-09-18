import React from "react"
import { useEffect, useState } from "react"
import { FormEnderecoContext } from "../pages/FormEnderecoContext"

export default function () {
    const {uf, setUf, cidade, setCidade} = React.useContext(FormEnderecoContext)
    const [loading, setLoading] = useState(true)
    const [cidades, setCidades] = useState([])
    

    async function buscarCidades() {
        setLoading(true)
        if (!uf) return
        const requestCidades = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        const cidades = await requestCidades.json()
        setLoading(false)
        setCidades(cidades)
        
    }

    useEffect(() => {
        buscarCidades()
    }, [uf])

    return <>
        {loading
            ? "loading cidades"
            : <select>{cidades.map(({ nome }, idx) => <option key={idx}>{nome}</option>)}</select>
        }
    </>
}