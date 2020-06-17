 import styled from 'styled-components/native';

 export const Suggestions = styled.ScrollView`
  background: #000;
  height: 100%;
 `;

 export const Header = styled.View`
  height: 100%;
  padding: 0 5px 30px 5px;
 `;

 export const SuggestionsTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  padding: 2%;
 `;

 export const SuggestionsIcons = styled.ScrollView`
  width: 100%;
  padding: 4% 0 4% 2%;
  background: #1e222b;
  flex-direction: row;
 `;

 export const SuggestionsIconsItem = styled.TouchableOpacity`
  width: 80px;
  align-items: center;
  justify-content: flex-start;
  margin-right: 10px;
 `;

 export const Img = styled.Image`
  margin-bottom: 3px;
 `;

 export const SuggestionsIconsItemTitle = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
 `;
