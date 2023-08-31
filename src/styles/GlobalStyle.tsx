import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: #0059cd;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: "Montserrat", "NotoSansKR";
  }

  #root {
    background-color: #fafafa;
    width: 20vw;
    height: 65vh;
    position: relative;
    border: 10px solid black;
    border-radius: 1.7rem;
    box-shadow: 2px 4px 7px 3px rgba(0,50,120,0.7);
    overflow: auto;
  }
`
export default GlobalStyle;