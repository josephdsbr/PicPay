import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Button = styled(LinearGradient)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

interface LabelProps {
  active: boolean;
}

export const Label = styled.Text<LabelProps>`
  font-size: 12px;
  color: ${({ active }) => active ? '#000' : '#fff'};
`;