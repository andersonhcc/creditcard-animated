import styled from "styled-components/native";

type Props = {
    width?: string
}

export const Container = styled.View<Props>`
    width: ${({width}) => width ? width : 100}%;
    height: 60px;
    margin-top: 14px;
    background-color: #bdbdbd50;
    border-radius: 8px;
    padding: 8px;
    flex-direction: row;
    align-items: center;
`;

export const TextInput = styled.TextInput`
    width: 100%;
    margin-left: 4px;
    font-weight: bold;
`;