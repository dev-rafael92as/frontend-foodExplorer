import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 100px;
    width: 100%;
    max-width: 1106px;

    @media (max-width:40rem) {
        flex-direction: column;
    }

    .container-content {
        padding: 64px;
        border-radius: 16px;
        background-color: ${({ theme }) => theme.FONTS.DARK_700};
        width: 100%;
        max-width: 476px;
        display: flex;
        flex-direction: column;
        height: 540px;
        justify-content: space-between;

        @media (max-width: 40rem) {
            background-color: ${({ theme }) => theme.FONTS.DARK_400};
            margin: 73px 0;
            padding: 0 47px 0 65px;
            max-height: 321px;
        }

        h2 {
            font-weight: 500;
            font-size: 32px;
            color: ${({ theme }) => theme.FONTS.LIGTH_100};
            text-align: center;
            margin-bottom: 32px;

            @media (max-width: 40rem) {
                display: none;
            }
        }

        .container-input {
            display: flex;
            flex-direction: column;
            gap: 8px;

            label {
                font-family: 'Roboto', sans-serif;
                font-weight: 400;
                font-size: 16px;
                line-height: 100%;
                color: ${({ theme }) => theme.FONTS.LIGTH_400};
            }
        }

        .wrapper-button-access {
            height: 48px;
        }

        .wrapper-button-createAccount {
            display: flex;
            justify-content: center;
        }
    }
` 