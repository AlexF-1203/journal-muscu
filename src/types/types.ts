export interface User {
  id: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

export interface Exercise {
  id: string;
  name: string;
  muscle: string;
}

export interface Seance {
  id: string;
  name: string;
  repition: number;
  serie: number;
  tempo: string;
  user_id: string;
  exercice_id: string;
}

export interface Suivis {
  id: string;
  serie_1: number;
  serie_2: number;
  serie_3: number;
  serie_4: number;
  user_id: string;
  seance_id: string;
  created_at: Date;
} 