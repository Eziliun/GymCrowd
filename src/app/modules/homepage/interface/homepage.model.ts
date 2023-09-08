export interface iHomePage {
    nome_academia: string;
    endereco_sedes: EnderecoSede[];
    lotacao_media: number;
}

export interface EnderecoSede {
    rua: string;
    numero: string;
    cidade: string;
    cep: string;
}