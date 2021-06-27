import React from 'react';
import styled from "styled-components";
import {animated,useSpring,config} from "react-spring";
import {typeScale} from '../utills';
import {Illustrations,CloseIcon} from '../assets';
import {PrimaryButton} from './Button';

const ModalWrapper = styled.div`
    width: 800px;
    height: 580px;
    box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.2);
    background-color: ${props => props.theme.formElementBackground};
    color: ${props => props.theme.textOnFormElementBackground};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 8px;
    background: ${props => props.theme.formElementBackground};
`;

const SignUpHeader = styled.h3`
    font-size: ${typeScale.header3};
    margin: 53px 0 16px 0;
`;

const SignUpText = styled.p`
    font-size: ${typeScale.paragraph};
    text-align: center;
    max-width: 70%;
    margin: 0 0 16px 0;
`;

const CloseButtonWrapper = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    position: absolute;
    top: 40px;
    right: 40px;
    width: 24px;
    height: 24px;
    padding: 0;
`;

export const SignUpModal = ({showModal,setShowModal}) => {
    const animation = useSpring({
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0)` : `translateY(-200%)`,
        config: config.slow
    })
    return (
        <animated.div style={animation}>
            <ModalWrapper>
                <img src={Illustrations.SignUp} alt="Sign up for an account!" aria-hidden="true"/>
                <SignUpHeader>Sign Up!</SignUpHeader>
                <SignUpText>Sign up today to get access to all of our content and features!</SignUpText>
                <PrimaryButton>Sign Up</PrimaryButton>
                <CloseButtonWrapper aria-label="Close Modal" onClick={() => setShowModal(false)}>
                    <CloseIcon/>
                </CloseButtonWrapper>
            </ModalWrapper>
        </animated.div>
    )
}



