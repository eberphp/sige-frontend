import { Image } from './image.model';

export interface Publication {
  id: number;
  idUsuario: number;
  codigo: null;
  nombre: string;
  orden: number;
  url: null;
  texto: null;
  idConfiguracion: number;
  numOrdenador: null;
  numTablet: null;
  numCelular: null;
  modeloBloque: string;
  selecciona: string;
  imagen: string;
  images: Image[];
  linkVideo: null;
  created_at: Date;
  updated_at: Date;
}
