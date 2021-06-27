import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import {typeScale} from '../utills';

const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,
    large: () => `
        font-size: ${typeScale.header5};
        padding: 16px 24px;
    `,
    warning: ({theme}) => `
        background: none;
        color: ${theme.status.warningColor};

        &:hover, &:focus{
            background-color: ${theme.status.warningColorHover};
            outline: 3px solid ${theme.status.warningColorHover};
            outline-offset: 4px;
        }

        &:active{
            background-color: ${theme.status.warningColorActive};
            border: 2px solid transparent;
        }
    `,
    primaryButtonWarning: ({theme}) => `
        background-color: ${theme.status.warningColor};
        color: ${theme.textColorInverted};
    `,
    secondaryButtonWarning: ({theme}) => `
        border: 2px solid ${theme.status.warningColor};
    `,
    success: ({theme}) => `
        background: none;
        color: ${theme.status.successColor};

        &:hover, &:focus{
            background-color: ${theme.status.successColorHover};
            outline: 3px solid ${theme.status.successColorHover};
            outline-offset: 4px;
        }

        &:active{
            background-color: ${theme.status.successColorActive};
        }
    `, 
    primaryButtonSuccess: ({theme}) => `
        background-color: ${theme.status.successColor};
        color: ${theme.textColorInverted};
    `,
    secondaryButtonSuccess: ({theme}) => `
        border: 2px solid ${theme.status.successColor};
    `,
    tertiaryButtonSuccess: ({theme}) => `
        background: none;
        color: ${theme.status.successColor};
    `,
    error: ({theme}) => `
        background: none;
        color: ${theme.status.errorColor};

        &:hover, &:focus {
            background-color: ${theme.status.errorColorHover};
            outline: 3px solid ${theme.status.errorColorHover};
            outline-offset: 2px;
        }

        &:active {
            background-color: ${theme.status.errorColorActive};
        }
    `,
    primaryButtonError: ({theme}) => `
        background-color: ${theme.status.errorColor};
        color: ${theme.textColorInverted};
    `,
    secondaryButtonError: ({theme}) => `
        background: none;
        border: 2px solid ${theme.status.errorColor};
        color: ${theme.status.errorColor};
    `,

    tertiaryButtonError: ({theme}) => `
        background: none;
        color: ${theme.status.errorColor};
    `,
}

const Button = styled.button`
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    cursor: pointer;
    min-width: 100px;
    border-radius: 8px;
    border: none;
    transition: background-color .3s linear, color .3s linear;

    &:hover{
        background-color: ${props => props.theme.primaryHoverColor};
        color: ${props => props.theme.textColorOnPrimary};
    }

    &:focus{
        outline: 3px solid ${props => props.theme.primaryActiveColor};
        outline-offset: 2px;
    }

    &:active{
        background-color: ${props => props.theme.primaryActiveColor};
        border-color: ${props => props.theme.primaryActiveColor};
        color: ${props => props.theme.textColorOnPrimary}
    }
`;

export const PrimaryButton = styled(Button)`
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.textColorOnPrimary};

    &:disabled{
        background: ${props => props.theme.disabled};
        color: ${props => props.theme.textOnDisabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
    background: none;
    color: ${props => props.theme.primaryColor};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: 2px solid ${props => props.theme.primaryColor};

    &:disabled{
        background: none;
        color: ${props => props.theme.disabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
    background: none;
    color: ${props => props.theme.primaryColor};

    &:disabled{
        background: none;
        color: ${props => props.theme.disabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;