import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    label {
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        color: ${({ theme }) => theme.FONTS.LIGHT_400};
    }

    > div {
        width: 100%;
        position: relative;
        
        button {
            border: none;
            background-color: ${({ theme }) => theme.FONTS.DARK_800};
            width: 100%;
            padding: 13px 16px;
            border-radius: 8px;
            height: 48px;

            display: flex;
            align-items: center;
            justify-content: space-between;

            color: ${({ theme }) => theme.FONTS.LIGHT_400};

            svg {
                position: absolute;
                right: 16px;
                z-index: 2;
            }
        }

        ul {
            position: absolute;
            border-radius: 8px;
            transform: translateY(-44px);
            width: 100%;

            li {
                list-style: none;
                background-color: ${({ theme }) => theme.FONTS.DARK_800};
                padding: 13px 16px;
                width: 100%;
                height: 48px;

                :first-child {
                    border-top-left-radius: 8px;
                    border-top-right-radius: 8px;

                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                :last-child {
                    border-bottom-left-radius: 8px;
                    border-bottom-right-radius: 8px;
                }
            }
        }
    }
`
