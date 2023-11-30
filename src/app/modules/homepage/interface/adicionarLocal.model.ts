export interface iAdicionarLocalização {
    message: string,
    result: iSincronizarAcademia[],
    status: boolean
}

export interface iSincronizarAcademia {
    nomeLocal: string
    enderecoLocal:string
}