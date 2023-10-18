export interface academiaResponse {
    message: string,
    result: iDadosAcademias[],
    status: boolean
}

export interface iDadosAcademias {
    nomeAcademia: string;
    enderecoSedes: EnderecoSede[];
    lotacaoMedia: number;
}

export interface EnderecoSede {
    rua: string;
    numero: string;
}