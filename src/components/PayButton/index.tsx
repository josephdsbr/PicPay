import React, { ReactPropTypes } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Button, Label } from './styles';
import { TouchableWithoutFeedback } from 'react-native';

interface PayButtonProps {
  onPress: () => void;
  active: boolean;
}

const PayButton: React.FC<PayButtonProps> = ({ onPress, active }) => {
  return (
  <TouchableWithoutFeedback 
    onPress={onPress}
  >
    <Button 
      colors={
        active ? ['#fff', '#ccc'] : ['#00fc6c', '#00ac4a']
      }
      start={[1, 0.2]}
    >
      <MaterialIcons name="attach-money" size={30} color={active ? '#000' : '#fff' } />
      <Label active={active}>Pagar</Label>
    </Button>
  </TouchableWithoutFeedback>
  )
}

export default PayButton;
