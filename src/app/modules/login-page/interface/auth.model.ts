export interface iLogin {
    username: string;
    password: string;
    remember_me: boolean;
}

export interface iRegister {
    username: string;
    email: string;
    CPF: string;
    password: string;
    confirm_password: string;
    terms_conditions: boolean;
}