export interface Fair {
  Id_Feria: number;
  Titulo: string;
  Descripcion_Corta: string;
  Descripcion: string;
  Area: string;
  Imagen?: string;
  Fecha_Publicacion: Date;
  Fecha_Inicio: Date;
  Fecha_Fin?: Date;
  Hora_Inicio: string;
  Hora_Fin?: string;

  Lugar: string;
  Ubicacion: string;
  Costo: number;

  Internet: 'Incluido' | 'No Incluido';
  Cable: 'Incluido' | 'No Incluido';
  Luz: 'Incluido' | 'No Incluido';
  Agua: 'Incluido' | 'No Incluido';

  content: Content[];
}

export interface Condiciones {
  internet: boolean;
  cable: boolean;
  light: boolean;
  water: boolean;
}
export interface Content {
  Id_Tema: number;
  Titulo: string;
  Descripcion?: string;
  Hora_Inicio: string;
  Hora_Fin?: string;
}

export type PageSize = 6 | 12 | 24;
