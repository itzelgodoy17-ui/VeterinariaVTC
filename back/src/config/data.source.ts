import { DataSource } from "typeorm";
import { User } from "../entities/User.entity";
import { Appointment } from "../entities/Appointment.entity";
import { Credential } from "../entities/Credentials.entity";
import { DB_DROP, DB_HOST, DB_LOGGING, DB_NAME, DB_PASSWORD, DB_PORT, DB_SYNC, DB_TYPE, DB_USER } from "./envs";

export const appDataSource = new DataSource({
    type: DB_TYPE,
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    logging: DB_LOGGING,
    synchronize: true,
    dropSchema: DB_DROP,
    entities: [User, Appointment, Credential],
    // entities: ["src/entities/**/*.ts"]
})
