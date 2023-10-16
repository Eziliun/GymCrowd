export interface CartaoResponse {
    message: string,
    result: iCartaoUsuario[],
    status: boolean
}

export interface iCartaoUsuario {
    NumeroCartao: string;
    BandeiraCartao: string;
    NomeUsuarioCartao:string;
    DataVencimentoCartao: string;
}
