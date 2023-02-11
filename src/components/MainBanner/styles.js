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

    img {
        position: absolute;
        bottom: -13px;
        left: -70px;
        opacity: 0.8;
    }

    div {
        max-width: 422px;
        color: ${({ theme }) => theme.FONTS.LIGHT_300};
        
        h2 {
            font-style: normal;
            font-weight: 500;
            font-size: 40px;
            line-height: 140%;
            margin-bottom: 8px;
        }

        p {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 100%;
        }
    }
`