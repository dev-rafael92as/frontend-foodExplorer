import styled from "styled-components";

export const Container = styled.div`
    max-width: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.FONTS.LIGTH_100};

    .button-counter {
        background: none;
        color: ${({ theme }) => theme.FONTS.LIGHT_300};
        width: 100%;
        max-width: 24px;
        border: none;
        height: 24px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 160%;

        svg {
            width: 18px;
            height: 18px;
        }
    }

    .button-counter:disabled {
        border: none;
        color: ${({ theme }) => theme.FONTS.LIGHT_500};
    }
`