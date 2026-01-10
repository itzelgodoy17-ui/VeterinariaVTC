import { Request, Response } from "express"
import { ScheduleAppDTO } from "../DTO/Appointments.DTO"

export const getAppointmentsController = (req: Request, res: Response) => {
    res.status(200).json({
        data: [],
        msg: "Obtener el listado de todos los turnos de todos los usuarios."
    })
} 
export const getAppointmentByIdController = (req: Request<{ id: string }>, res: Response) => {
    res.status(200).json({
        data: [],
        msg: "Obtener el detalle de un turno específico."
    })
} 
export const scheduleAppointmentController = (req: Request< unknown, unknown, ScheduleAppDTO>, res: Response) => {
    res.status(200).json({
        data: [],
        msg: "Agendar un nuevo turno."
    })
} 
export const cancelAppointmentController = (req: Request<{ id: string }>, res: Response) => {
    res.status(200).json({
        data: [],
        msg: "Cambiar el estatus de un turno a “cancelled”."
    })
} 