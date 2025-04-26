export interface AuthResponse {
    accessToken: string;
    emprendedor: {
      Id_Emprendedor: number;
      Cedula: string;
      Nombre: string;
      Apellidos: string;
      Correo: string;
    };  
  }