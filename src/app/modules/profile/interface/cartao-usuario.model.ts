export interface CartaoResponse {
    message: string,
    result: iCartaoUsuario[],
    status: boolean
}

export interface iCartaoUsuario {
    cardNumber: string;
    flag: string;
    nameHolder:string;
    dueDate: string;
}
