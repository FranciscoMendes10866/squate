export const createClientSchema = {
  schema: {
    body: {
      type: 'object',
      required: ['firstName', 'lastName', 'birthday', 'gender', 'weight', 'height', 'address', 'zipCode', 'nationality', 'city', 'phoneNumber', 'emergency', 'email', 'objective'],
      properties: {
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        birthday: { type: 'string' },
        gender: { type: 'string' },
        weight: { type: 'number' },
        height: { type: 'number' },
        address: { type: 'string' },
        zipCode: { type: 'string' },
        nationality: { type: 'string' },
        city: { type: 'string' },
        phoneNumber: { type: 'number' },
        emergency: { type: 'number' },
        email: { type: 'string' },
        objective: { type: 'string' }
      }
    }
  }
}
