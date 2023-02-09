import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&family=Roboto:wght@400;500;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }



    body {
        background-color: ${({ theme }) => theme.FONTS.DARK_400};
        color: ${({ theme }) => theme.FONTS.LIGHT_300};

        -webkit-font-smoothing: antialiased;
    }

    body, button, textarea, input {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`