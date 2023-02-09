// import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    background: none;
    border: none;
    display: flex;
    align-items: center;
    gap: 0 6px;

    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    color: ${({ theme }) => theme.FONTS.LIGHT_100};
`