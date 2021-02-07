import styled from 'styled-components';
import { IAddress } from '../../dtos/getCepDTO';

interface AddressInfoProps {
  address: IAddress;
}

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

// eslint-disable-next-line no-undef
export const AddressInfo: React.FC<AddressInfoProps> = ({ address }: AddressInfoProps) => (
  <>
    <FlexBox>
      <section>
        <b>Localidade: </b>
        {address.localidade}
      </section>
      <section>
        <b>UF: </b>
        {address.uf}
      </section>
    </FlexBox>
    <p />
    <p>
      <b>Logradouro: </b>
      {address.logradouro}
    </p>
    <p>
      <b>Complemento: </b>
      {address.complemento}
    </p>
    <p>
      <b>Bairro: </b>
      {address.bairro}
    </p>
    <p>
      <b>DDD: </b>
      {address.ddd}
    </p>
    <FlexBox>
      <section>
        <b>IBGE: </b>
        {address.ibge}
      </section>
      <section>
        <b>GIA: </b>
        {address.gia}
      </section>
      <section>
        <b>SIAFI: </b>
        {address.siafi}
      </section>
    </FlexBox>
  </>
);
