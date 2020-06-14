import React, { useState } from 'react';
import { Switch } from 'react-native';
import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddButton,
  AddLabel,
  UseTicketContainer,
  UseTicketButton,
  UseTicketLabel,
} from './styles';
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import creditCard from '../../images/credit-card.png';

const Wallet: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [useBalance, setUseBalance] = useState<boolean>(true);

  const handleToogleVisibility = (): void => setIsVisible((prevState: boolean) => !prevState);

  const handleToggleUseBalance = (): void => setUseBalance((prevState: boolean) => !prevState);

  return (
    <Wrapper>
      <Header 
      colors={useBalance ? ['#52e78c', '#1ab563'] : ['#d3d3d3', '#868686']}>
        <HeaderContainer>
          <Title>Saldo PicPay</Title>
          <BalanceContainer>
            <Value>R$ <Bold>{isVisible ? '10.000.000,00' : '----'}</Bold></Value>
            <EyeButton onPress={handleToogleVisibility}>
              <Feather name={isVisible ? 'eye' : 'eye-off'} size={24} color="#fff" />
            </EyeButton>
          </BalanceContainer>
          <Info>
            Seu saldo está rendendo 100% do CDI.
          </Info>
          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={25} color="#fff" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>
            <Action>
              <FontAwesome name="bank" size={18} color="#fff" />
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>
      <UseBalance>
        <UseBalanceTitle>
          Usar Saldo ao Pagar
        </UseBalanceTitle>
        <Switch
          value={useBalance}
          onValueChange={handleToggleUseBalance}
        />
      </UseBalance>
      <PaymentMethods>
        <PaymentMethodsTitle>Forma de Pagamento</PaymentMethodsTitle>
        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>
                Cadastre seu cartão de crédito
              </CardTitle>
              <CardInfo>
                Cadastre seu cartão de crédito para poder fazer pagamentos mesmo quando
                não tiver saldo no seu PicPay.
              </CardInfo>
            </CardDetails>
            <Img source={creditCard} resizeMode="contain"/>
          </CardBody>
          <AddButton>
            <AntDesign name="pluscircleo" size={26} color="#0db060" />
            <AddLabel>
              Adicionar Cartão de Crédito
            </AddLabel>
          </AddButton>
        </Card>
        <UseTicketContainer>
          <UseTicketButton>
            <MaterialCommunityIcons name="ticket-outline" size={16} color="#0db060" />
            <UseTicketLabel> 
              Usar código promocional
            </UseTicketLabel>
          </UseTicketButton>
        </UseTicketContainer>
      </PaymentMethods>
    </Wrapper>
  )
};

export default Wallet;
