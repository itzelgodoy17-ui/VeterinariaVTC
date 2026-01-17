import { ScheduleAppDTO } from "../DTO/Appointments.DTO";
import { Appointment } from "../entities/Appointment.entity";
import { User } from "../entities/User.entity";
import { Status } from "../Interface/Appointment.Interface";
import { AppointmentModel } from "../repositories/Appointment.repositorie";
import { getUserByIdService } from "./User.service";


export const getAppointmentService = async() => {
    const appointmentsFound = await AppointmentModel.find()
    if(appointmentsFound.length === 0) throw Error (`No hay citas disponibles`)
    return appointmentsFound
}

export const getAppointmentByIdService = async (id: number): Promise<Appointment> => {
    const appFound: Appointment | null = await AppointmentModel.findOne({
        where: {
            id: id
        }
    })
    if(!appFound) throw new Error(`La cita con id ${id} no fue encontrada.`)
    return appFound
}

export const registerAppointmentService = async (app: ScheduleAppDTO): Promise<Appointment> => {

    AppointmentModel.validateAllowAppointment(app.date, app.time)
    await AppointmentModel.validateExistApp(app.userId, app.date, app.time)

    const userFound: User = await getUserByIdService(app.userId)
    const newAppointment: Appointment = AppointmentModel.create({
        date: new Date(app.date),
        time: app.time,
        user: userFound,
    })
    return await AppointmentModel.save(newAppointment)
}

export const cancelAppointmentService = async (id: number): Promise<Appointment> => {
    const appFound: Appointment = await getAppointmentByIdService(id)
    appFound.status = Status.cancelled
    return await AppointmentModel.save(appFound)
}

// const appointmentList: Appointment[] = []

// let id: number = 1

// export const getAppointmentService = () => {
//     return appointmentList
// }

// export const getAppointmentByIdService = (id: number): Appointment => {
//     const appFound: Appointment | undefined = appointmentList.find(app => app.id === id)
//     if(!appFound) throw new Error(`La cita con Id ${id} no fue encontrada`)
//     return appFound    
// }

// export const registerAppointmentService = (app: ScheduleAppDTO): Appointment => {

//     getUserByIdService(app.userId)
//     const newAppointment: Appointment = {
//         id: id++,
//         date: new Date(app.date),
//         time: app.time,
//         userId: app.userId,
//         status: Status.active
//     }
//     appointmentList.push(newAppointment)
//     return newAppointment
// }

// export const cancelAppointmentService = (id: number): Appointment => {
//     const appFound: Appointment = getAppointmentByIdService(id)
//     appFound.status = Status.cancelled
//     return appFound
// }