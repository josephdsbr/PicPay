import React from 'react';

import { Container, Option, Img, Label } from './styles';
import Img1 from '../../images/01.png';

const Suggestions: React.FC = () => {
  return (
    <Container horizontal>
      <Option>
        <Img source={Img1} />
        <Label>Doações</Label>
      </Option>
    </Container>
  );
}

export default Suggestions;