import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 260px;
    background: ${({ theme }) => theme.FONTS.GRADIENTS_200};
    border-radius: 8px;
    margin-top: 164px;

    display: flex;
    justify-content: end;
    padding-right: 100px;
    align-items: center;

    @media (max-width: 40rem) {
        max-width: 376px;
        height: 120px;
        margin-left: 36px;
        margin-top: 44px;
        padding-right: 0;

    }

    img {
        position: absolute;
        bottom: -13px;
        left: -70px;
        opacity: 0.8;

        @media (max-width: 40rem) {
            max-width: 200px;
            height: 161px;
            bottom: -5px;
            left: -37px;
        }
    }

    div {
        max-width: 422px;
        color: ${({ theme }) => theme.FONTS.LIGHT_300};

        @media (max-width: 40rem) {
            max-width: 202px;
        }
        
        h2 {
            font-style: normal;
            font-weight: 500;
            font-size: 40px;
            line-height: 140%;
            margin-bottom: 8px;

            @media (max-width: 40rem) {
                font-size: 18px;
                line-height: 140%;
            }
        }

        p {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 100%;

            @media (max-width: 40rem) {
                font-size: 12px;
                line-height: 140%;
            }
        }
    }
`