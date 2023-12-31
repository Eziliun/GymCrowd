export interface CartaoResponse {
    message: string,
    result: iCartaoUsuario[],
    status: boolean
}

export interface iCartaoUsuario {
    id?: number;
    card_number: string;
    flag: string;
    nameHolder:string;
    dueDate: string;
}
