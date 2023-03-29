import styled from "styled-components/native";

type PropText = {
  fontSize?: number;
  bold?: number;
}

export const Container = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 30px;
`;

export const Content = styled.View`
    width: 310px;
    height: 160px;
    background: #FFD900;
    border-radius: 20px;
`;

export const Strip = styled.View`
  width: 100%;
  height: 30px;
  margin-top: 25px;
  background-color: #bdbdbd;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

export const TextCVV = styled.Text`
  margin-right: 40px;

`;

export const View = styled.View`
  width: 80%;
  margin-top: 70px;
  padding: 5px 14px;

`;

export const TextData = styled.Text<PropText>`
  font-size: ${({fontSize}) => fontSize ? fontSize : 14}px;
  font-weight: ${({bold}) => bold ? bold : 'normal'};
  color: #bdbdbd;
`;