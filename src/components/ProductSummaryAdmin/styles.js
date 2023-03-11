import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 304px;
    height: 462px;
    padding: 24px;
    margin-right: 27px;

    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.FONTS.DARK_200};
    background: ${({ theme }) => theme.FONTS.DARK_300};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    align-items: center;

    > a {
        position: absolute;
        right: 20px;
        top: 20px;
        background-color: transparent;
        color: ${({ theme }) => theme.FONTS.LIGHT_300};;
        
        svg {
            width: 24px;
            height: 24px;
        }
    }

    img {
        width: 100%;
        max-width: 176px;
    }

    .container-infoProduct {
        height: 201px;
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h4 {
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 140%;
            color: ${({ theme }) => theme.FONTS.LIGHT_300};
        }

        p {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 160%;
            color: ${({ theme }) => theme.FONTS.LIGHT_400};
        }

        .sellingPrice {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 32px;
            line-height: 160%;
            color: ${({ theme }) => theme.FONTS.CAKE_200};
        }

        .container-counter {
            display: flex;
            justify-content: space-between;
            max-width: 208px;
            margin: 0 auto;
            width: 100%;

            .wrapper-buy-button {
                max-width: 92px;
                width: 100%;
                height: 48px;
            }
        }
    }
`