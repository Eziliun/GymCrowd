export interface iLogin {
    login: string;
    password: string;
    remember_me: boolean;
    token: any
}

export interface iRegister {
    username: string;
    email: string;
    cpf: string;
    password: string;
    confirmPassword: string;
    termsConditions: boolean;
}