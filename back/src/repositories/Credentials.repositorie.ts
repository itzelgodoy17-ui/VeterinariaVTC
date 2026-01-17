import { appDataSource } from "../config/data.source";
import { Credential } from "../entities/Credentials.entity";

export const CredentialModel = appDataSource.getRepository(Credential)