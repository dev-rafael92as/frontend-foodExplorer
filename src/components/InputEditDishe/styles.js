import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;

    label {
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        color: ${({ theme }) => theme.FONTS.LIGHT_400};
        cursor: pointer;
    }

    input {
        background-color: ${({ theme }) => theme.FONTS.DARK_800};
        border: none;
        padding: 12px 14px;
        border-radius: 8px;
        width: 100%;
        height: 48px;

        color: ${({ theme }) => theme.FONTS.LIGHT_100};
    
        ::placeholder {
            color: ${({ theme }) => theme.FONTS.LIGHT_500};
        }
    }
`