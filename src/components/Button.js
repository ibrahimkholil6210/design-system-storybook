import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import {defaultTheme,typeScale} from '../utills';

const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,
    large: () => `
        font-size: ${typeScale.header5};
        padding: 16px 24px;
    `,
    warning: () => `
        background: none;
        color: ${defaultTheme.status.warningColor};

        &:hover, &:focus{
            background-color: ${defaultTheme.status.warningColorHover};
            outline: 3px solid ${defaultTheme.status.warningColorHover};
            outline-offset: 4px;
        }

        &:active{
            background-color: ${defaultTheme.status.warningColorActive};
        }
    `,
    primaryButtonWarning: () => `
        background-color: ${defaultTheme.status.warningColor};
        color: ${defaultTheme.textColorInverted};
    `,
    secondaryButtonWarning: () => `
        border: 2px solid ${defaultTheme.status.warningColor};
    `,
    success: () => `
        background: none;
        color: ${defaultTheme.status.successColor};

        &:hover, &:focus{
            background-color: ${defaultTheme.status.successColorHover};
            outline: 3px solid ${defaultTheme.status.successColorHover};
            outline-offset: 4px;
        }

        &:active{
            background-color: ${defaultTheme.status.successColorActive};
        }
    `, 
    primaryButtonSuccess: () => `
        background-color: ${defaultTheme.status.successColor};
        color: ${defaultTheme.textColorInverted};
    `,
    secondaryButtonSuccess: () => `
        border: 2px solid ${defaultTheme.status.successColor};
    `,
    tertiaryButtonSuccess: () => `
        background: none;
        color: ${defaultTheme.status.successColor};
    `,
    error: () => `
        background: none;
        color: ${defaultTheme.status.errorColor};

        &:hover, &:focus {
            background-color: ${defaultTheme.status.errorColorHover};
            outline: 3px solid ${defaultTheme.status.errorColorHover};
            outline-offset: 2px;
        }

        &:active {
            background-color: ${defaultTheme.status.errorColorActive};
        }
    `,
    primaryButtonError: () => `
        background-color: ${defaultTheme.status.errorColor};
        color: ${defaultTheme.textColorInverted};
    `,
    secondaryButtonError: () => `
        background: none;
        border: 2px solid ${defaultTheme.status.errorColor};
        color: ${defaultTheme.status.errorColor};
    `,

    tertiaryButtonError: () => `
        background: none;
        color: ${defaultTheme.status.errorColor};
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
        background-color: ${defaultTheme.primaryHoverColor};
        color: ${defaultTheme.textColorOnPrimary};
    }

    &:focus{
        outline: 3px solid ${defaultTheme.primaryActiveColor};
        outline-offset: 2px;
    }

    &:active{
        background-color: ${defaultTheme.primaryActiveColor};
        border-color: ${defaultTheme.primaryActiveColor};
        color: ${defaultTheme.textColorOnPrimary}
    }
`;

export const PrimaryButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    color: white;

    &:disabled{
        background: ${defaultTheme.disabled};
        color: ${defaultTheme.textOnDisabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
    background-color: white;
    color: ${defaultTheme.primaryColor};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    &:disabled{
        background: none;
        color: ${defaultTheme.disabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
    background-color: white;
    color: ${defaultTheme.primaryColor};

    &:disabled{
        background: none;
        color: ${defaultTheme.disabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;