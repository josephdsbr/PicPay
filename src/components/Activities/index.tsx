import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import avatar from '../../images/avatar.png';
import {
   Container,
   Header, 
   Title, 
   Card, 
   CardHeader,
   Avatar,
   Description,
   Bold,
   CardBody,
   UserName,
   CardFooter,
   Details,
   Value,
   Divider,
   Date,
   Actions,
   Option,
   OptionLabel
  } from './styles';

const Activities: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>
      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a @josephdsbr
          </Description>
        </CardHeader>
        <CardBody>
          <UserName>José Vinícius</UserName>
        </CardBody>
        <CardFooter>
          <Details>
            <Value>R$ 18,00</Value>
            <Divider />
            <Feather name="lock" size={14 } color="#fff"/>
            <Date>Há 2 anos</Date>
          </Details>
          <Actions>
            <Option>
              <MaterialCommunityIcons name="comment-outline" size={14} color="#fff"/>
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <AntDesign name="hearto" size={14} color="#fff"/>
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}

export default Activities;