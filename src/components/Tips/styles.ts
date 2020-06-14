import styled from 'styled-components/native';

/**
 * Interfaces
 */

 interface OptionProps {
   bgColor: string;
 }

 /**
  * Components
  */

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 16
  }
}))`
  margin-top: 20px;
`;

export const Option = styled.TouchableOpacity<OptionProps>`
  background: ${({ bgColor }) => bgColor};
  width: 120px;
  height: 160px;
  border-radius: 8px;
  padding: 15px;
  justify-content: space-between;
  margin-right: 16px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;

export const Img = styled.Image`
  align-self: center;
`;
