import styled from "styled-components";

export const Container = styled.div`
    .container-details {
        width: 100%;
        max-width: 1122px;
        margin: 0 auto 155px;
        /* height: calc(100vh - 205px); */

        @media (max-width: 40rem) {
            padding: 16px 56px;
            
        }

        > a {
            margin-top: 24px;
            font-weight: 700;
            font-size: 24px;
            line-height: 140%;
            color: ${({ theme }) => theme.FONTS.LIGHT_300};

            @media (max-width: 40rem) {
                margin-top: 0;
            }

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

            @media (max-width:40rem) {
                flex-direction: column;
            }

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

                    @media (max-width:40rem) {
                        text-align: center;
                        font-size: 27.0412px;
                        line-height: 140%;
                    }
                }

                p {
                    font-weight: 400;
                    font-size: 24px;
                    line-height: 140%;
                    color: ${({ theme }) => theme.FONTS.LIGHT_300};
                    margin-bottom: 24px;

                    @media (max-width:40rem) {
                        text-align: center;
                        font-size: 16.2247px;
                        line-height: 140%;
                    }
                }

                .container-details-ingredients {
                    display: flex;
                    align-items: center;
                    gap: 12px;

                    @media (max-width:40rem) {
                        justify-content: center;
                        flex-wrap: wrap;
                    }
                }

                .wrapper-edit-button {
                    max-width: 131px;
                    width: 100%;
                    height: 48px;
                    margin-top: 48px;

                    @media (max-width:40rem) {
                        max-width: 100%;
                    }
                }
            }
        }
    }
`