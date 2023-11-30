export interface CartaoResponse {
    message: string,
    result: iSincronizarAcademia[],
    status: boolean
}

export interface iSincronizarAcademia {
    nomeRegistrado: string;
    numeroCadastrado: string;
    academiaSincronizar:string;
    formaPagamento: string;
    assinatura: string;
    frequenciaUsuário: string

}