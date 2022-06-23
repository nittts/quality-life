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
        font-family: 'Inter', sans-serif;
    }

    button, a {

        :hover {
            cursor: pointer;
        }
    }

    input, button, select, textarea {
        font-family: 'Mukta', sans-serif;
    }

    button{
        border-radius: 4px;
    }

    :root {
        /* branding colors */
        --color-primary-1: #deffef;
        --color-primary-2: #bef6db;
        --color-primary-3: #80d9ae;

        --color-secondary-1: #cbf4ff;
        --color-secondary-2: #9be9fe;
        --color-secondary-3: #68d3f1;

        --color-tertiary-1: #ffd9f6;
        --color-tertiary-2: #eec6e5;
        --color-tertiary-3: #eb92d6;

        /* other colors */
        --color-gray-2: #f5f5f5;
        --color-gray-3: #f0f0f0;
        --color-gray-4: #dfdfdf;
        --color-gray-5: #606060;

        /* ... */
        --color-yellow: #d8d128;
        --success: #3fe864;
        --negative: #e83f5b;
    }
`;

export default Global;
