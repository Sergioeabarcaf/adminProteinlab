export interface Proyecto {
    portada: Portada;
    contenido: Contenido;
    imagenes: Imagenes;
    partner?: any;
    tipo: string;
    id: string;
  }
  
  export interface Imagenes {
    grupal: string;
    img1: string;
    img2: string;
    img3: string;
  }
  
  export interface Contenido {
    nombre: string;
    periodo: string;
    descripcion: string[];
    link: string;
  }
  
  export interface Portada {
    nombre: string;
    bajada: string;
    categoria: string;
  }
  