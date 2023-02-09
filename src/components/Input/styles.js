import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background: ${({ theme }) => theme.FONTS.DARK_900};
    color: ${({ theme }) => theme.FONTS.LIGHT_100};
    border-radius: 8px;
    font-family: 'Roboto', sans-serif;

    > input {
        border: none;
        width: 100%;
        background: transparent;
        font-family: 'Roboto', sans-serif;
        color: ${({ theme }) => theme.FONTS.LIGHT_100};
        
        height: 48px;
        padding: 16px 14px;
        
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
    }
    

    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: ${({ theme }) => theme.FONTS.LIGHT_500};
    }

    > svg {
        margin-left: 16px;
    }
`