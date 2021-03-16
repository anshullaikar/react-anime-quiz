import styled, {createGlobalStyle} from "styled-components"
//@ts-ignore
import BGImage from "./images/anime.jpg"

export const GlobalStyle = createGlobalStyle`
@media only screen and (max-width: 800px) {
  :root {
    font-size: 12px;
  }
}
@media only screen and (max-width: 600px) {
  :root {
    font-size: 10px;
  }
}

*{
    box-sizing: border-box;
    font-family: 'Shippori Mincho B1', sans-serif;
}
html{
    height: 100%;
}
body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 0.5em;
    display: flex;
    justify-content: center;
}
.blur{
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    margin: 1em;
    padding: 1em;
}

`
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > p {
        color: #fff;
    }
    .header-bg{
        margin: 1em;
        background-image: linear-gradient(90deg, rgba(255, 105, 98, 0.3), rgba(119, 221, 118, 0.3))
    }
    .score{
        color: black;
        border: 2px solid black;
        padding: 0.5em 1em;
        font-size: 1.5rem;
        font-weight: 600;
        margin: 1em;
        background: white;
    }
    h1{
        font-size: 6rem;
        background-image: linear-gradient(180deg, #fff, #fff);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(3px 3px #000);
        text-align: center;
        margin: 0.175em;
    }
    .start, .next{
        cursor: pointer;
        outline-color: white;
        background: linear-gradient(180deg, #fff, #fff);
        border: 2.5px solid #000;
        margin: 0.5em;
        font-size: 1.5rem;
        font-weight: 700;
        padding: 0.5em 0.75em;
        text-transform: uppercase;
    }
    .start{
        max-width: 200px;
    }
    
`