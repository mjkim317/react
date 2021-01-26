import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
//import { shadow } from 'lib/styleUtils';

const Wrapper = styled.div`
    
    margin-top: 2rem;
    padding-top: 0.6rem;
    padding-bottom: 0.5rem;

    background: ${oc.teal[6]};
    color: white;

    text-align: center;
    font-size: 1.25rem;
    font-weight: 500;

    cursor: pointer;
    user-select: none;
    transition: .1s all;
    width: 20%;

    &:hover {
        background: ${oc.teal[5]};
    }

    &:active {
        background: ${oc.teal[7]};
    }

`;

const AuthButton = ({children, onClick}) => (
    <Wrapper onClick={onClick}>
        {children}
    </Wrapper>
);

export default AuthButton;