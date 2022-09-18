import React from "react"
import { useState } from "react";
import InputCEP from "../components/InputCEP";
import InputCidades from "../components/InputCidades";
import InputEstados from "../components/InputEstados";
import { FormEnderecoContext } from "./FormEnderecoContext";

export default function() {
    const [uf, setUf] = useState("")

    return <>
        <h1>Cadastro: Dados de Endereço</h1>
        <InputEstados setUf={setUf} />
        <InputCidades/>
        <InputCEP></InputCEP>
    </>
}