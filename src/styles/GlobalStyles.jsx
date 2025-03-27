import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ::-webkit-scrollbar {
        width: 6px;
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.scrollbarColor};
        height: 50px;
        -webkit-border-radius: 6px;
        border-radius: 6px;
    }

    ::-moz-selection {
        color: black;
        background: ${({ theme }) => theme.accentColor};
    }

    ::selection {
        color: black;
        background: ${({ theme }) => theme.accentColor};
    }
`;

export default GlobalStyles;
