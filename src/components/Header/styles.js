import styled from "styled-components";

export const Container = styled.header`
    background-color: ${({ theme }) => theme.FONTS.DARK_600};
    height: 6.5rem;
    display: flex;
    align-items: center;

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
    }   
`