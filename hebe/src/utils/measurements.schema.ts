export const StoreSchema = {
  schema: {
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
}

export const patchSchema = {
  schema: {
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
}

export const DestroySchema = {
  schema: {
    params: {
      id: { type: 'string' }
    }
  }
}

export const FindSchema = {
  schema: {
    params: {
      clientId: { type: 'string' }
    }
  }
}
