export interface ExistingCodesDTO {
  code: string;
}

export interface CreateNewUserDTO {
  code: string;
  password: string;
  hashed: string;
}

export interface CreateResDTO {
  code: string;
  password: string;
}

export interface SignInDTO {
  id: string;
  role: string;
}

export interface FindUserDTO {
  id: string;
  password: string;
  role: string;
}

export interface CreateClientInputDTO {
  firstName: string;
  lastName: string;
  birthday: string;
  gender: string;
  weight: number;
  height: number;
  address: string;
  zipCode: string;
  nationality: string;
  city: string;
  phoneNumber: number;
  emergency: number;
  email: string;
  objective: string;
}

export interface SignInResDTO {
  user: {
    token: string;
    role: string;
  };
}
