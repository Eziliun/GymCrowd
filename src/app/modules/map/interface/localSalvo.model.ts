export interface iAdicionarLocalização {
    message: string,
    result: iSincronizarAcademia[],
    status: boolean
}

export interface iSincronizarAcademia {
    nome_local: string
    endereco_completo:string
}