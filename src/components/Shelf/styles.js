import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 530px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
        font-weight: 500;
        font-size: 32px;
        line-height: 140%;
        color: ${({ theme }) => theme.FONTS.LIGHT_300};
    }

    .container-shelf {
        display: flex;
        width: 100%;
        /* justify-content: space-between; */
    }
`