import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 16
  }
}))`
  background: #1e222b;
  height: 120px;
`;

export const Option = styled.View``;

export const Img = styled.Image``;

export const Label = styled.Text``;
