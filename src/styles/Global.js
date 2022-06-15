import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        list-style-type: none;
        box-sizing: border-box;
        text-decoration: none;
    }

    body {
        width: 100vw;
        min-height: 100vh;
    }

    button, a {

        :hover {
            cursor: pointer;
        }
    }

    :root {
        /* branding colors */
        --color-primary-1: #DEFFEF;
        --color-primary-2: #BEF6DB;
        --color-primary-3: #80D9AE;
        --color-secondary-1: #CBF4FF;
        --color-secondary-2: #9BE9FE;
        --color-secondary-3: #68D3F1;
        --color-tertiary-1: #FFD9F6;
        --color-tertiary-2: #EEC6E5;
        --color-tertiary-3: #EB92D6;
        /* other colors */
        --color-gray-1: #F8F7FA; /* background color */
        --color-gray-2: #E7E7E9;
        --color-gray-3: #B5B5BD;
        --color-gray-3: #9191A3;
        --color-gray-5: #6A6878; /* text color */
        /* ... */
    }
`;

export default Global;
