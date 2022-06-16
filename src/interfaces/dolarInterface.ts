import { Nullable } from './globalInterfaces';

export interface Dolar {
  id: number;
  type: string;
  purchase: Nullable<number>;
  sale: number;
};
