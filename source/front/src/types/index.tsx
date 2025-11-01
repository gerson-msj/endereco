export interface Endereco {
    id: number,
    nome: string,
    cep: string,
    numero: string,
    complemento: string,
    cepData?: Cep
}

export interface Cep {
    cep: string,
    logradouro: string,
    bairro: string,
    localidade: string,
    uf: string,
    estado: string
}

export const CepDefault: Cep = {
    cep: "",
    logradouro: "",
    bairro: "",
    localidade: "",
    uf: "",
    estado: ""
}

export const EnderecoDefault: Endereco = {
    id: 0,
    nome: "",
    cep: "",
    numero: "",
    complemento: ""
}

