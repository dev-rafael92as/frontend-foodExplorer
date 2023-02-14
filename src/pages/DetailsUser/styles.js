import styled from "styled-components";

export const Container = styled.div`

    .container-details {
        width: 100%;
        max-width: 1122px;
        margin: 0 auto;
        height: calc(100vh - 205px);

        > a {
            margin-top: 24px;
            font-weight: 700;
            font-size: 24px;
            line-height: 140%;
            color: ${({ theme }) => theme.FONTS.LIGHT_300};

            svg {
                width: 30px;
                height: 40px;
            }
        }

        .container-details-infos {
            display: flex;
            align-items: center;
            gap: 47px;
            margin-top: 42px;

            img {
                width: 100%;
                max-width: 390px;
            }

            .container-details-moreInfos {
                width: 100%;
                max-width: 687px;
                max-height: 300px;

                h2 {
                    font-weight: 500;
                    font-size: 40px;
                    line-height: 140%;
                    color: ${({ theme }) => theme.FONTS.LIGHT_300};
                    margin-bottom: 24px;
                }

                p {
                    font-weight: 400;
                    font-size: 24px;
                    line-height: 140%;
                    color: ${({ theme }) => theme.FONTS.LIGHT_300};
                    margin-bottom: 24px;
                }

                .container-details-ingredients {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .container-details-counter {
                    display: flex;
                    align-items: center;
                    max-width: 294px;
                    width: 100%;
                    margin-top: 48px;
                }
            }
        }
    }
`