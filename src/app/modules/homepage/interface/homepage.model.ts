export interface academiaResponse {
    message: string,
    result: iDadosAcademias[],
    status: boolean
}

export interface iDadosAcademias {
    nome_academia: string;
    endereco_sedes: EnderecoSede[];
    lotacao_media: number;
}

export interface EnderecoSede {
    rua: string;
    numero: string;
}