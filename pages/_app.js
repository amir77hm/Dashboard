import styled, { createGlobalStyle } from "styled-components";

import TheFooter from "../components/TheFooter";
import TheHeader from "../components/TheHeader";

const Container = styled.section`
  width: 100vw;
  position: fixed;
  top: 4rem;
  height: calc(100vh - 8rem);
  min-height: 200px;
  text-align: center;
  padding: 1rem 0;
  overflow-y: auto;
`;

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    overflow-x:hidden;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  ul{
    list-style: none;
  }

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    overflow-y: scroll;
    height: 100%;
  }
  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
  
  ::-webkit-scrollbar {
    width: 10px ;
  }
   
  ::-webkit-scrollbar-thumb {
    background-color: #29cc88;
    border-radius:1rem;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <TheHeader />
      <Container>
        <Component {...pageProps} />
      </Container>
      <TheFooter />
    </>
  );
}

export default MyApp;
