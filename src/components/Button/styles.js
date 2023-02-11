import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background: ${({ theme }) => theme.FONTS.TOMATO_100};
    color: ${({ theme }) => theme.FONTS.LIGHT_100};
    border-radius: 5px;
    height: 100%;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    gap: 0 8px;
`