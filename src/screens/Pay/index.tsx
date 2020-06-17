import React from 'react';
import { Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Img1 from '../../images/01.png';
import Img2 from '../../images/02.png';
import Img3 from '../../images/03.png';
import Img4 from '../../images/04.png';
import Img5 from '../../images/05.png';
import Img6 from '../../images/06.png';
import Img7 from '../../images/07.png';
import {
  Suggestions,
  Header,
  SuggestionsTitle,
  SuggestionsIcons,
  SuggestionsIconsItem,
  Img,
  SuggestionsIconsItemTitle
 } from './styles';
const items = [
  {
    key: String(Math.random()),
    image: Img5,
    name: 'Central de Doações'
  },
  {
    key: String(Math.random()),
    image: Img6,
    name: 'Pagar Conta'
  },
  {
    key: String(Math.random()),
    image: Img7,
    name: 'Cobrar'
  },
  {
    key: String(Math.random()),
    image: Img1,
    name: 'Recarga de Celular'
  },
  {
    key: String(Math.random()),
    image: Img2,
    name: 'Uber pré-pago'
  },
]
const Pay: React.FC = () => {
  return (
    <Suggestions>
      <Header>
        <SuggestionsTitle>
          Sugestões para Você
        </SuggestionsTitle>
        <SuggestionsIcons horizontal>
          {
            items.map(item => (
              <SuggestionsIconsItem key={item.key}>
                <Img source={item.image} />
                <SuggestionsIconsItemTitle>{item.name}</SuggestionsIconsItemTitle>
              </SuggestionsIconsItem>    
            ))
          }
        </SuggestionsIcons>
      </Header>
    </Suggestions>
  )
};

export default Pay;
