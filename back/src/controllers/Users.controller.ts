import { Request, Response } from "express"
import { UserLoginDTO, UserRegisterDTO } from "../DTO/User.DTO"

export const getUsersController = (req: Request, res: Response) => {
    res.status(200).json({
        data: [],
        msg: "Obtener el listado de todos los usuarios."
    })
}

export const getUserByIdController = (req: Request<{ id: string }>, res: Response) => {
    res.status(200).json({
        data: req.params.id,
        msg: "Obtener el detalle de un usuario específico."
    })
}

export const userRegisterController = (req: Request< unknown, unknown, UserRegisterDTO>, res: Response) => {
    res.status(200).json({
        data: req.body,
        msg: "Registro de un nuevo usuario."
    })
}

export const userLoginController = (req: Request< unknown, unknown, UserLoginDTO >, res: Response) => {
    res.status(200).json({
        data: req.body,
        msg: "Login del usuario a la aplicación."
    })
}
