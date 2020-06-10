import React from 'react';
import { 
  Wrapper,
  Container,
  Header,
  BalanceContainer, 
  BalanceTitle, 
  Balance 
} from './styles';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import Suggestions from '../../components/Suggestions';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons name="qrcode-scan" size={36} color="#10c86e" />
          <BalanceContainer>
            <BalanceTitle>Meu Saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>
          <AntDesign name="gift" size={36} color="#10c86e" />
        </Header>
        <Suggestions />
      </Container>
    </Wrapper>
  )
};

export default Home;
