import styled from "styled-components";
import {defaultTheme,typeScale} from '../utills';

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
`;

export const TertiaryButton = styled(Button)`
    background-color: white;
    color: ${defaultTheme.primaryColor};

    &:disabled{
        background: none;
        color: ${defaultTheme.disabled};
        cursor: not-allowed;
    }
`;