import styled from "styled-components"

export const Wrapper = styled.div`
    max-width: 75ch;
    margin: 0.3em;
    background: #fff;
    padding: 1em;
    border: 2px solid #000;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
    text-align: center;
    p{
        font-size: 1rem;
        font-weight: 700;
    }
`

type buttonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<buttonWrapperProps>`
    transition: all 0.1s ease;

    :hover{
        
        opacity: 0.8;
    }
    
    button:focus {
        outline-color: lightgray; //accessibility
    }

    button{
        cursor: pointer;
        user-select: none;
        font-size: 1rem;
        font-weight: 600;
        width: 100%;
        margin: 0.2em;
        background: ${({correct, userClicked}) => correct ? "#77dd76": //green if correct
        !correct && userClicked ? 
        "#ff6962" : "white"}; //red or white
        border: 3px solid white;
        box-shadow: 1px 2px 0px rgba(0,0,0,0.1);
    }

`