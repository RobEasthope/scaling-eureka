import { createGlobalStyle } from 'styled-components';
import { colors } from './theme';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${colors.ink};
  }

  p {
    margin-top: 0;
  }

  a {
    color: ${colors.ink};
    text-decoration: none;

    &:hover {
      color: ${colors.ink};
    }
  }

  select {
    height: 36px;
    border: 1px solid ${colors.ink};
  }

  input[type=text] {
    display: block;
    margin-top: 0.5em;
    height: 24px;
  }

  .active {
    font-weight: bold;
  }
`;

export default GlobalStyles;
