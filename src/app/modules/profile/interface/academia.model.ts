export interface userAcademiaRespone {
    message: string,
    result: iAcademiaUser[],
    status: boolean
}

export interface iAcademiaUser {
    academiaRegistada: string;
    formaPagamento: string;
    assinatura: string;
    frequenciaUsuário: string

}