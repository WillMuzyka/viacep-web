import { useState } from 'react';
import { Background } from '../src/components/Background';
import { CepInput } from '../src/components/CepInput';
import { SearchButton } from '../src/components/SearchButton';
import { Widget } from '../src/components/Widget';
import { backgroundImage } from '../src/utils/theme';

const IndexPage = () => {
  const [isValidCep, setIsValidCep] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [hasAllDigits, setHasAllDigits] = useState(false);

  const handleButtonPress = () => {
    setIsValidCep(!isValidCep);
  };

  const handleInputFocusBlur = () => {
    setIsFocused(!isFocused);
  };

  return (
    <Background backgroundImage={backgroundImage}>
      <Widget>
        <h1>Digite o CEP desejado</h1>
        <CepInput
          placeholder="00000-000"
          isValidCep={isValidCep}
          isFocused={isFocused}
          onBlur={handleInputFocusBlur}
          onFocus={handleInputFocusBlur}
        />
        <SearchButton
          type="submit"
          hasAllDigits={hasAllDigits}
          onClick={handleButtonPress}
        >
          Buscar CEP

        </SearchButton>
      </Widget>
      <Widget isValidCep={isValidCep} />
    </Background>
  );
};

export default IndexPage;
