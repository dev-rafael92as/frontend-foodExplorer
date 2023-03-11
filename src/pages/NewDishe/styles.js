import styled from "styled-components";

export const Container = styled.div`
    
    main {
        max-width: 1120px;
        margin: 40px auto 0;

        > a {
            font-weight: 700;
            font-size: 24px;
            line-height: 140%;
            color: ${({ theme }) => theme.FONTS.LIGHT_300};
            margin-bottom: 24px;

            svg {
                width: 20px;
                height: 20px;
            }
        }

        h2 {
            font-weight: 500;
            font-size: 32px;
            line-height: 140%;
            color: ${({ theme }) => theme.FONTS.LIGHT_300};
            margin-bottom: 32px;
        }

        .edit-dishe-firstRow {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .edit-dishe-firstRow-imgFile {
                max-width: 229px;
                width: 100%;

                label {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 100%;
                    color: ${({ theme }) => theme.FONTS.LIGHT_400};
                    
                    display: flex;
                    flex-direction: column;
                    gap: 16px;

                    span {
                        color: ${({ theme }) => theme.FONTS.LIGHT_100};
                        background: ${({ theme }) => theme.FONTS.DARK_800};
                        height: 48px;
                        border-radius: 8px;
                        padding: 12px 32px;

                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                }

                input {
                    display: none;
                }
            }

            .edit-dishe-firstRow-name {
                max-width: 463px;
                width: 100%;
            }

            .edit-dishe-firstRow-category {
                width: 100%;
                max-width: 364px;
            }
        }

        .edit-dishe-secondRow {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 32px;

            .edit-dishe-secondRow-ingredients {
                display: flex;
                flex-direction: column;
                gap: 16px;
                width: 100%;

                label {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 100%;
                    color: ${({ theme }) => theme.FONTS.LIGHT_400};
                }

                .container-ingredients-tag {
                    width: 100%;
                    max-width: 837px;
                    background: ${({ theme }) => theme.FONTS.DARK_800};
                    border-radius: 8px;
                    padding: 8px;
                    height: 48px;

                    display: flex;
                    gap: 16px;
                    align-items: center;
                }

            }
            .edit-dishe-secondRow-price {
                max-width: 251px;
                width: 100%;
            }
        }

        .edit-dish-lastRow {
            width: 100%;
            margin-top: 32px;

            display: flex;
            flex-direction: column;
            gap: 16px;

            label {
                font-weight: 400;
                font-size: 16px;
                line-height: 100%;
                color: ${({ theme }) => theme.FONTS.LIGHT_400};
            }

            textarea {
                background: ${({ theme }) => theme.FONTS.DARK_800};
                border: none;
                border-radius: 8px;
                color: ${({ theme }) => theme.FONTS.LIGHT_100};
                padding: 14px;
            
                ::placeholder {
                    color: ${({ theme }) => theme.FONTS.LIGHT_500};
                }
            }
        }

        .edit-dishe-saveButton {
            height: 48px;
            margin-top: 32px;
            margin-bottom: 116px;
            max-width: 172px;
            width: 100%;
            text-align: end;

            display: inline-block;
            align-items: flex-end;
        }
    }
`