import styled from "styled-components";

export const Container = styled.footer`
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
        }
    }
`