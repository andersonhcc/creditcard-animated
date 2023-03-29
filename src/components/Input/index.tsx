import React from 'react';

import { Container, TextInput, MaskTextInput } from './styles'
import { PropsInput } from './types';

const Input = ({ width, icon, mask = false, onChangeText, options, type, value, ...rest }: PropsInput) => {

    return (
        <Container width={width}>
            {icon && icon}
            {mask && type ? 
            <MaskTextInput
            value={value}
            type={type}
            options={options}
            onChangeText={(text) => onChangeText(text)} {...rest} 
            /> 
            :
            <TextInput
            value={value}
            onChangeText={(text) => onChangeText(text)} {...rest} 
            />}
        </Container>
    );

};

export { Input };