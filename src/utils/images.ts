import {Nullable} from '@interfaces/globalInterfaces';

export const getImageUri = (base64: Nullable<string>): string =>
  base64 ? `data:image/png;base64,${base64}` : '';
