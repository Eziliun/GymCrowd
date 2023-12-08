export interface iLogin {
    login: string;
    password: string;
    remember_me: boolean;
    token: any
}

export interface iLoginResponse {
    login: string;
    password: string;
    remember_me: boolean;
    token: any;
    username: string;
    email: string;
    cpf: string;
}

export interface iRegisterResponse{
    result: iRegister;
    message: string;
    status: boolean;
}


export interface iRegister {
    username: string;
    email: string;
    cpf: string;
    password: string;
    confirmPassword: string;
    termsConditions: boolean;
}