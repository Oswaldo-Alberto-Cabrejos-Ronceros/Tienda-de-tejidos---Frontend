//interface de response
export interface RefreshResponse{
    access:string,
    refresh:string
}

export interface LoginResponse{
    user:{
        id:number,
        email:string,
        first_name?:string,
        last_name?:string,
        phone:string,
        role:string
    }
}

//interfaces de formulario
export interface LoginForm{
    email:string,
    password:string
}

export interface RegisterForm{
    email:string,
    first_name:string,
    last_name:string,
    phone:string,
    password:string,
    confirm_password:string,
}