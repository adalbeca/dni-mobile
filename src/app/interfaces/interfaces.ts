export interface Respuesta {
  expediente: Expedientes[];
}

export interface Expedientes {
    exp: string;
    dia?: number;
    mes?: number;
    anio?: number;
    nacimiento: string;
    fechaNac: string;
  }