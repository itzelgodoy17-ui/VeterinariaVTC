import { Request, Response } from "express"
import { UserLoginDTO, UserRegisterDTO } from "../DTO/User.DTO"
import { getUserByIdService, getUserService, loginUserService, registerUserService } from "../service/User.service"
import { User } from "../entities/User.entity"
import { PostgressError } from "../Interface/Error.interface"


export const getUsersController = async (req: Request, res: Response) => {
    try {
        const users: User[] = await getUserService()
        res.status(200).json({
        data: users,
        msg: "Obtener el listado de todos los usuarios."
     })
    } catch (error) {
       res.status(400).json({
       msg: error instanceof Error ? error.message: `Ocurrio un error al obtener todos los usuarios.`
     }) 
    }
}

export const getUserByIdController = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const user: User = await getUserByIdService(+req.params.id)
        res.status(200).json({
        user
     })
    } catch (error) {
       res.status(400).json({
       msg: error instanceof Error ? error.message: `Ocurrio un error al obtener el usuario.`
     }) 
    }
}

export const userRegisterController = async (req: Request< unknown, unknown, UserRegisterDTO>, res: Response): Promise<void> => {
    try {
        const userRegister = await registerUserService(req.body)
        res.status(201).json({
        data: userRegister,
        msg: "Registro de un nuevo usuario."
    })
    } catch (error) {

        const err = error as PostgressError

       res.status(400).json({
       msg: err.detail ? err.detail : err instanceof Error ? err.message : `Error desconocido`
     }) 
    }
}

export const userLoginController = async (req: Request< unknown, unknown, UserLoginDTO >, res: Response) => {
    try {
      res.status(200).json({
        login: true,
        user: await loginUserService(req.body),
     })  
    } catch (error) {
       res.status(400).json({
       msg: error instanceof Error ? error.message: `Ocurrio un error al obtener todos los usuarios`
     }) 
    }
}
