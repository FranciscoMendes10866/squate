export interface ExistingCodesDTO {
    code: string
}

export interface CreateNewUserDTO {
    code: string
    password: string
    hashed: string
}

export interface CreateAdminDTO {
    code: string
    password: string
}
