import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background: ${({ theme }) => theme.FONTS.TOMATO_100};
    color: ${({ theme }) => theme.FONTS.LIGHT_100};
    height: 48px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    gap: 0 8px;
`