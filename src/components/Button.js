import styled from "styled-components";
import {defaultTheme,typeScale} from '../utills';

const Button = styled.button`
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    cursor: pointer;
    min-width: 100px;
    font-family: 'Roboto Mono', monospace;
    border-radius: 8px;
    border: none;
`;

export const PrimaryButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    color: white;
`;

export const SecondaryButton = styled(Button)`
    background-color: white;
    color: ${defaultTheme.primaryColor};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const TertiaryButton = styled(Button)`
    background-color: white;
    color: ${defaultTheme.primaryColor};
`;