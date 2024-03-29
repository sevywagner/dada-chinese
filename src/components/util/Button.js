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
    font-size: 2.5vh;
    font-family: 'avenir';

    &:hover {
        animation: hover .3s ease-in;
        background-color: white;
        color: black;
        border-color: black;
    }

    @keyframes hover {
        from {
            border-color: white;
            background-color: rgb(102, 0, 0);
            color: white;
        }

        to {
            border-color: black;
            background-color: white;
            color: black;
        }
    }

    @media only screen and (max-width: 800px) {
        width: 100%;
        white-space: nowrap;
    }
`;

export default Button;