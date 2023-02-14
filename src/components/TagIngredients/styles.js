import styled from "styled-components";

export const Container = styled.div`
    padding: 4px 8px;
    background: ${({ theme }) => theme.FONTS.DARK_1000};
    border-radius: 5px;

    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.FONTS.LIGHT_100};
`