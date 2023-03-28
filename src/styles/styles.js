import styled from 'styled-components';

export const Emoji = styled.p`
        font-size: ${(props) => props.size || "25px"};
    `

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0 , 0 , 0 , 0.1);
    margin: 0px;
    
`

export const Spacer = styled.div `
    width: 100%;
    margin: ${(props) => props.margin || "20px"};

`

export const Flex = styled.div`

    display: flex;
    flex-direction: ${(props) => props.direction || "column"};
    align-items: ${(props) => props.align || "center"};
    justify-content: ${(props) => props.justify || "center"};
    gap: ${(props) => props.gap || "12px"};
`

export const Title = styled.h1`

    color: #27233A;
    font-family: 'Fasthand', cursive;

`;

export const Input = styled.input`
    height: 30px;
    width: 200px;
    padding: 12px;
    border-radius: 5px;
    outline: none;
    border: solid 1px gray;
    background-color: #F1FAEE;
    font-weight: 500;
    color: #533B4D;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &::placeholder {
    font-size: 14px;
    text-align: center;
    
    }
`

export const Button = styled.button`
    height: 30px;
    width: 80px;
    border-radius: 5px;
    border: none;
    background-color: #29BF12;
    font-size: 12px;
    text-align: center;
    font-weight: 600;
    font-family: 'Prompt', sans-serif;
    color: aliceblue;
    transition: ease-in 0.1s;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        &:hover {
            cursor: pointer;
            transform: scale(1.08);
        }

        &:active {
            background-color: #427A17;
            transform: scale(1.05);
        }

`

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px 12px;
    flex-wrap: wrap;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    width: 300px;
    min-height: 50px;
    background-color: ${(props) => props.checked ? "#29BF12;" : '#27233A'};
    color: aliceblue;

    list-style: none;
    border-radius: 10px;

    p{
        font-size: 16px;
        text-decoration-line: ${(props) => props.checked ? "line-through;" : ''} ;
        width: 70%;
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
    }

    svg{
        font-size: 20px;
        color: aliceblue;
        width: 30px;
    }

    button{
        background-color: transparent;
        border: none;
        transition: ease-in 0.1s;

        &:hover {
            cursor: pointer;
            opacity: 0.7;
            transform: scale(1.3);
        }

        &:active {
            transform: scale(1.15);
        }
    }    
`