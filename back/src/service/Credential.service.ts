import { Credential } from "../Interface/Credential.Interface";




const credentialList: Credential[] = []
let id: number = 1

const checkUsernameExist = ( username: string ) => {

    const credentialFound: Credential | undefined = credentialList.find( (credential) => credential.username === username)
    if(credentialFound) throw new Error(`El username ${username} ya esta en uso, intente con uno nuevo`)
}

export const createCredentialService = ( username: string, password: string ): number => {

    checkUsernameExist(username)
    const credential = {
        id,
        username,
        password
    }
    credentialList.push(credential)
    id++
    return credential.id
}

const crearCredenciales = () => {

    createCredentialService("Itzel", "12345")
    createCredentialService("Itzel", "12345")
    createCredentialService("Itzel", "12345")
    createCredentialService("Itzel", "12345")
    createCredentialService("Itzel", "12345")
    createCredentialService("Itzel", "12345")

    console.log(credentialList)
}

crearCredenciales()