import { Request, Response } from "express"
import { ScheduleAppDTO } from "../DTO/Appointments.DTO"
import { cancelAppointmentService, getAppointmentByIdService, getAppointmentService, registerAppointmentService } from "../service/Appointments.service"

export const getAppointmentsController = async (req: Request, res: Response) => {
    try {
       res.status(200).json({
        data: await getAppointmentService(),
        msg: "Obtener el listado de todos los turnos de todos los usuarios."
     }) 
    } catch (error) {
       res.status(404).json({
            error: error instanceof Error ? error.message: `Error desconocido.`
        })
    }
} 

export const getAppointmentByIdController = async (req: Request<{ id: string }>, res: Response) => {
    try {
       res.status(200).json({
        data: await getAppointmentByIdService(+req.params.id),
        msg: "Obtener el detalle de un turno específico."
     })  
    } catch (error) {
       res.status(404).json({
        error: error instanceof Error ? error.message: `Error desconocido.`
       }) 
    }
} 

export const scheduleAppointmentController = async (req: Request< unknown, unknown, ScheduleAppDTO>, res: Response) => {
    try {
       res.status(200).json({
        data: await registerAppointmentService(req.body),
        msg: "Agendar un nuevo turno."
    }) 
    } catch (error) {
        res.status(400).json({
            error: error instanceof Error ? error.message: `Error desconocido.`
        })
    }   
} 

export const cancelAppointmentController = async (req: Request<{ id: string }>, res: Response) => {
    try {
       res.status(200).json({
        data: await cancelAppointmentService(+req.params.id),
        msg: "Cambiar el estatus de un turno a “cancelled”."
    }) 
    } catch (error) {
        res.status(404).json({
            error: error instanceof Error ? error.message: `Error desconocido.`
        })
    }
} 