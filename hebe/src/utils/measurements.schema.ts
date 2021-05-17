export const StoreSchema = {
  body: {
    type: 'object',
    required: ['peitoral', 'quadril', 'cintura', 'coxa', 'braco', 'bracoContraido'],
    properties: {
      peitoral: { type: 'number' },
      quadril: { type: 'number' },
      cintura: { type: 'number' },
      coxa: { type: 'number' },
      braco: { type: 'number' },
      bracoContraido: { type: 'number' }
    }
  },
  params: {
    clientId: { type: 'string' }
  }
}

export const patchSchema = {
  body: {
    type: 'object',
    required: ['peitoral', 'quadril', 'cintura', 'coxa', 'braco', 'bracoContraido'],
    properties: {
      peitoral: { type: 'number' },
      quadril: { type: 'number' },
      cintura: { type: 'number' },
      coxa: { type: 'number' },
      braco: { type: 'number' },
      bracoContraido: { type: 'number' }
    }
  },
  params: {
    id: { type: 'string' }
  }
}

export const DestroySchema = {
  params: {
    id: { type: 'string' }
  }
}

export const FindAllSchema = {
  params: {
    clientId: { type: 'string' }
  }
}

export const FindOneSchema = {
  params: {
    id: { type: 'string' }
  }
}
