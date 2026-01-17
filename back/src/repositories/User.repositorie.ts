import { appDataSource } from "../config/data.source";
import { User } from "../entities/User.entity";

export const UserModel = appDataSource.getRepository(User)