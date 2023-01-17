import styled from "styled-components";

const Button = styled.button`
    border: none;
    border: 1px solid white;
    padding: 1.5vh;
    padding-left: 3vh;
    padding-right: 3vh;
    border-radius: 30px;
    background-color: rgb(102, 0, 0);
    color: white;
    font-size: 3vh;
    font-family: 'avenir'

    &:hover {
        background-color: black
    }
`;

export default Button;