export interface UserRegisterDTO { 
      name: string,
      email: string,
      dni: number,
      username: string,
      password: string,
      birthdate: Date,
}

export interface UserLoginDTO {
    username: string,
    password: string
}