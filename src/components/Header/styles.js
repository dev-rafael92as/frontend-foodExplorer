import styled from "styled-components";

export const Container = styled.header`
    background-color: ${({ theme }) => theme.FONTS.DARK_600};
    height: 6.5rem;
    display: flex;
    align-items: center;

    .menuMobile-container {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 95%;
        background-color: ${({ theme }) => theme.FONTS.DARK_400};
        z-index: 1;

        .menuMobile-header {
            height: 114px;
            background-color: ${({ theme }) => theme.FONTS.DARK_700};
            padding: 28px 28px 24px;
            display: flex;
            align-items: center;
            gap: 16px;

            > button {
                background: none;
                border: none;
                color: ${({ theme }) => theme.FONTS.LIGHT_100};
                width: 18px;
                height: 18px;
            }
        }
        .menuMobile-contentMenu {
            padding: 36px 28px 0;

            .menuMobile-container-input {
                display: flex;
                align-items: center;
                gap: 16px;
                padding: 12px 14px;
                background-color: ${({ theme }) => theme.FONTS.DARK_900};
                max-width: 372px;
                height: 48px;
                color: ${({ theme }) => theme.FONTS.LIGHT_400};
                border-radius: 5px;
    
                > svg {
                    width: 20px;
                    height: 20px;
                }
    
                > input {
                    background: none;
                    border: none;
                    width: 100%;
                    color: ${({ theme }) => theme.FONTS.LIGHT_400};
                }
            }


            ul li {
                list-style: none;
                border-bottom: 1px solid ${({ theme }) => theme.FONTS.DARK_1000};
                height: 54px;
                line-height: 60px;

                > a {
                    color: ${({ theme }) => theme.FONTS.LIGHT_300};
                }

                > button {
                    border: none;
                    background: none;
                    color: ${({ theme }) => theme.FONTS.LIGHT_300};
                }
            }
        }

        > footer {
            position: fixed;
            bottom: 50px;
            max-width: 95%;
        }
    }

    @media (max-width: 40rem) {
        height: 114px;
    }

    .wrapper-content-header {
        display: flex;
        width: 100%;
        max-width: 70.125rem;
        justify-content: space-between;
        margin: 0 auto;
        height: fit-content;

    .logo-header {
        display: flex;
        align-items: center;
        gap: 0.625rem;

        width: 100%;
        max-width: 12.3125rem;
        
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 1.75rem;
        font-family: 'Roboto', sans-serif;
        color: ${({ theme }) => theme.FONTS.LIGHT_100};

        position: relative;
    }

    .logo-header.style-admin {
        margin-right: 100px;
    }

    .logo-header.style-admin::after {
        content: 'admin';
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 160%;
        color: ${({ theme }) => theme.FONTS.CAKE_200};

        position: absolute;
        right: 14px;
        bottom: -5px;

        @media (max-width:40rem) {
            right: -30px;
            bottom: 0px;
        }
    }

    .search-input-header {
        width: 100%;
        max-width: 36.3125rem;

        background-color: ${({ theme }) => theme.FONTS.DARK_900};
        border-radius: 0.3125rem;
        display: flex;
        padding: 0.75rem 6.25rem;
        align-items: center;
        gap: 0.875rem;

        svg {
            width: 1.5rem;
            height: 1.5rem;
            color: ${({ theme }) => theme.FONTS.LIGHT_400};
        }

        input {
            font-family: 'Roboto', sans-serif;
            background-color: transparent;
            border: none;
            width: 100%;
            color: ${({ theme }) => theme.FONTS.LIGHT_200};
        }

        input::placeholder {
            color: ${({ theme }) => theme.FONTS.LIGHT_500};
        }
    }

    .container-button {
        width: 100%;
        max-width: 13.5rem;
        /* height: 3.5rem; */

        button {
            color: ${({ theme }) => theme.FONTS.LIGHT_100};
            font-size: 0.875rem;
            line-height: 1.5rem;
            font-weight: 500;
        }
    }

    .menu-hamburguer-mobile {
        border: none;
        color: ${({ theme }) => theme.FONTS.LIGHT_100};
        background: none;
        margin-left: 24px;

        > svg {
            width: 24px;
            height: 24px;
        }
    }

    .button-orders {
        border: none;
        background: none;
        color: ${({ theme }) => theme.FONTS.LIGHT_100};
        position: relative;
        margin-right: 36px;

        > svg {
            width: 26px;
            height: 30px;
        }

        .count-orders {
            position: absolute;
            top: -3px;
            left: 17px;
            background: ${({ theme }) => theme.FONTS.TOMATO_100};
            border-radius: 50%;
            width: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 20px;
        }
    }

    
}
`