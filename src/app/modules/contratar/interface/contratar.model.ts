export interface icontratarResponse {
    message: string,
    result: iContratar[],
    status: boolean
}


export interface iContratar {
    nome_academia: string;
    CNPJ_academia: string;
    email: string;
    numero_telefone: number;
    tipo_frequencia: string;
    quantidade_academias: number;
}