import styled from "styled-components";

export const Container = styled.div`
    margin-left: 33px;
    
    button {
        width: 100%;
        max-width: 162px;
        height: 48px;
        background: ${({ theme }) => theme.FONTS.TOMATO_100};
        border-radius: 5px;
        border: none;
        padding: 12px 24px;
        
        color: ${({ theme }) => theme.FONTS.LIGHT_100};
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
    }
`