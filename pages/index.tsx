import {
  FormEvent, useCallback, useState,
} from 'react';

import api from '../src/services/api';
import { IAddress } from '../src/dtos/getCepDTO';

import { Background } from '../src/components/Background';
import {
  Form, CepInput, ErrorMessage, SearchButton,
} from '../src/components/CepForm';
import { Widget } from '../src/components/Widget';
import { backgroundImage } from '../src/utils/theme';
import { AddressInfo } from '../src/components/AddressInfo';

const IndexPage = () => {
  const [isValidCep, setIsValidCep] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [hasAllDigits, setHasAllDigits] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [cep, setCep] = useState('');
  const [address, setAddress] = useState<IAddress>({} as IAddress);
  const [errorMessage, setErrorMessage] = useState('');

  const getAddress = useCallback(
    async (cepString: string) => {
      setHasError(false);
      setErrorMessage('');

      const cleanCep = cepString.replace(/[^0-9]/g, '');
      api
        .get(`/${cleanCep}`)
        .then(
          (response) => {
            setIsValidCep(true);
            setAddress(response.data);
          },
        ).catch((error) => {
          setHasError(true);
          setIsValidCep(false);
          setErrorMessage(
            error.response?.data?.validation?.params?.message
            || error.response?.data?.message
            || error.message,
          );
        }).finally(() => {
          setIsLoading(false);
        });
    }, [],
  );

  const handleInputChange = useCallback((e) => {
    setHasAllDigits(false);

    let cepString = e.currentTarget.value.replace(/[^0-9]/g, '');

    if (cepString.length > 5) {
      cepString = `${cepString.substring(0, 5)}-${cepString.substring(5)}`;
      if (cepString.length === 9) {
        setHasAllDigits(true);
      }
    }
    setCep(cepString);
  }, []);

  const handleFormSubmit = (e: FormEvent<any>) => {
    setIsLoading(true);
    e.preventDefault();
    getAddress(cep);
  };

  const handleInputFocusBlur = () => {
    setIsFocused(!isFocused);
  };

  return (
    <Background backgroundImage={backgroundImage}>
      <Widget>
        <h1>Digite o CEP desejado</h1>
        <Form onSubmit={(e) => { handleFormSubmit(e); }}>
          <CepInput
            placeholder="00000-000"
            hasError={hasError}
            isFocused={isFocused}
            onBlur={handleInputFocusBlur}
            onFocus={handleInputFocusBlur}
            value={cep}
            maxLength={9}
            onChange={
              (e: FormEvent<HTMLInputElement>) => handleInputChange(e)
            }
          />
          <ErrorMessage>{errorMessage}</ErrorMessage>
          <SearchButton
            type="submit"
            isloading={isLoading}
            disabled={!hasAllDigits || isLoading}
          >
            Buscar CEP
          </SearchButton>
        </Form>
      </Widget>
      <Widget isValidCep={isValidCep}>
        <AddressInfo address={address} />
      </Widget>
    </Background>
  );
};

export default IndexPage;
