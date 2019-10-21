export interface Respuesta {
  expediente: Expedientes[];
}

export interface Expedientes {
    exp: string;
    dia?: number;
    mes?: number;
    anio?: number;
    fechaNac: string;
  }