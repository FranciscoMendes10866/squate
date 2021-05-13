export interface ExistingCodesDTO {
    code: string
}

export interface CreateNewUserDTO {
    code: string
    password: string
}

export interface CreateAdminDTO {
    id: string
    code: string
    password: string
    role: string
}
