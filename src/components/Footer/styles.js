import styled from "styled-components";

export const Container = styled.footer`
    /* position: fixed;
    bottom: 0; */
    width: 100%;
    height: 77px;
    background: ${({ theme }) => theme.FONTS.DARK_600};
    display: flex;

    .container-footer {
        margin: 0 auto;
        width: 100%;
        max-width: 1122px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${({ theme }) => theme.FONTS.LIGHT_200};

        @media (max-width:40rem) {
            margin: 0 24px;

            p {
                font-size: 12px;
                line-height: 16px;        
            }
        }

        .logo-footer {
            display: flex;
            align-items: center;
            gap: 10px;

            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 28px;
            color: ${({ theme }) => theme.FONTS.LIGHT_700};

            @media (max-width:40rem) {
                font-size: 15.2616px;
                line-height: 18px;
                gap: 6px;

                > svg {
                    width: 22px;
                    height: 18px;
                }
            }
        }
    }
`