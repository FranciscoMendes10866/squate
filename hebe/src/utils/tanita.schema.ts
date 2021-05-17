export const createTanitaSchema = {
  body: {
    type: 'object',
    required: ['gordura_corpural', 'massa_muscular', 'massa_ossea', 'imc', 'metabolismo_basal', 'idade_metabolica', 'agua', 'gordura_visceral'],
    properties: {
      gordura_corpural: { type: 'number' },
      massa_muscular: { type: 'number' },
      massa_ossea: { type: 'number' },
      imc: { type: 'number' },
      metabolismo_basal: { type: 'number' },
      idade_metabolica: { type: 'number' },
      agua: { type: 'number' },
      gordura_visceral: { type: 'number' }
    }
  },
  params: {
    clientId: { type: 'string' }
  }
}

export const FindAllSchema = {
  params: {
    clientId: { type: 'string' }
  }
}

export const IdParamsSchema = {
  params: {
    id: { type: 'string' }
  }
}

export const patchTanitaSchema = {
  body: {
    type: 'object',
    required: ['gordura_corpural', 'massa_muscular', 'massa_ossea', 'imc', 'metabolismo_basal', 'idade_metabolica', 'agua', 'gordura_visceral'],
    properties: {
      gordura_corpural: { type: 'number' },
      massa_muscular: { type: 'number' },
      massa_ossea: { type: 'number' },
      imc: { type: 'number' },
      metabolismo_basal: { type: 'number' },
      idade_metabolica: { type: 'number' },
      agua: { type: 'number' },
      gordura_visceral: { type: 'number' }
    }
  },
  params: {
    id: { type: 'string' }
  }
}
