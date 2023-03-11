import styled from "styled-components";

export const Container = styled.div`
    background: ${({ theme, isNew }) => isNew ? "none" : `${theme.FONTS.LIGHT_600}`};
    padding: 8px 16px;
    border-radius: 10px;
    border: ${({ isNew, theme }) => isNew ? `1px dashed ${theme.FONTS.LIGHT_500}` : "none"};

    display: flex;
    align-items: center;
    gap: 0 8px;
    max-width: 115px;
    
    input {
        font-family: 'Roboto', sans-serif;
        border: none;
        display: block;
        width: min-content;
        background-color: transparent;
        color: ${({ isNew, theme }) => isNew ? `${theme.FONTS.LIGHT_500}` : `${theme.FONTS.LIGHT_100}`};
        width: min-content;
        width: 65px;
        
    }

    button {
        display: flex;
        align-items: center;
        border: none;
        background: transparent;
    }

    svg {
        color: ${({ theme }) => theme.FONTS.LIGHT_100};
    }
`