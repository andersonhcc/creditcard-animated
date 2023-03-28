import React from 'react';

import { Container, TextInput } from './styles'
import { PropsInput } from './types';

const Input = ({ width, icon, ...rest }: PropsInput) => {

    return (
        <Container width={width}>
            {icon && icon}
            <TextInput {...rest} />
        </Container>
    );

};

export { Input };