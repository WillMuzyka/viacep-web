export interface IAddress {
  'cep'?: number | string;
  'logradouro': string;
  'complemento': string;
  'bairro': string;
  'localidade': string;
  'uf': string;
  'ibge': string;
  'gia': string;
  'ddd': string;
  'siafi': string;
}

export interface IError {
  'cep': number;
  'erro': boolean;
}
