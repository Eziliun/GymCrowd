export interface CartaoResponse {
    message: string,
    result: iSincronizarAcademia[],
    status: boolean
}

export interface iSincronizarAcademia {
    nome_registrado: string;
    numero_registrado: string;
    academia_sincronizar:string;
}

export interface RespondeSincro{
    result: iSincronizarAcademiaResponse;
    message: string;
    status: boolean;
}


export interface iSincronizarAcademiaResponse {
    nome_registrado: string;
    numero_registrado: string;
    academia_sincronizar:string;
    forma_pagamento: string;
    assinatura: string;
    frequencia_usuario: string

}