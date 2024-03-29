import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 1.25rem;
    align-items: center;
    font-weight: 700;
    font-size: 2.625rem;
    line-height: 3.0625rem;

    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.FONTS.LIGHT_100};

    @media (max-width: 40rem) {
        font-weight: 700;
        font-size: 2.375rem;
        line-height: 2.75rem;
        max-width: 292px;

        svg {
            width: 43px !important;
            height: 43px !important;
        }
    }
`