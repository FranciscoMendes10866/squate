/* eslint-disable camelcase */
export interface TanitaStoreDTO {
  gordura_corpural: number;
  massa_muscular: number;
  massa_ossea: number;
  imc: number;
  metabolismo_basal: number;
  idade_metabolica: number;
  agua: number;
  gordura_visceral: number;
}

export interface TanitaStoreResDTO {
  id: string;
  gordura_corpural: number;
  massa_muscular: number;
  massa_ossea: number;
  imc: number;
  metabolismo_basal: number;
  idade_metabolica: number;
  agua: number;
  gordura_visceral: number;
  user_id: string;
}
