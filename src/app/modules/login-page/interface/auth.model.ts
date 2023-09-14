export interface iLogin {
    username: string;
    password: string;
    remember_me: boolean;
    access_token: any
}

export interface iRegister {
    username: string;
    email: string;
    cpf: string;
    password: string;
    confirmPassword: string;
    termsConditions: boolean;
}