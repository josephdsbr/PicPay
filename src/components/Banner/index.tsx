import React from 'react';
import { View } from 'react-native';
import Img13 from '../../images/13.png';
import { Container, Details, Image, Title, Description } from './styles';

const Banner: React.FC = () => {
  return (
    <Container>
      <Details>
        <Title>Cobre um Amigo</Title>
        <Description>
          Mantenha suas parcerias em dia, use o Picpay para fazer as suas cobranças.
        </Description>
      </Details>
      <Image source={Img13} />
    </Container>
  );
}

export default Banner;