import styled from 'styled-components'

type ContainerProps = {
    bg: string;
}

export const Container = styled.div<ContainerProps>`
    max-width: 600px;
    margin: auto;
    background-color: ${props => props.bg};
    color: white;
    font-weight: 600;
    padding: 20px;
    display: flex;

    span {
        font-weight: bold;
        color: red;
        width
    }
    
    .link {
        color: #d5d5d5;

        &:hover {
            color: #2b2b2b;
        }
    }

    @media (max-width: 500px) {
        background-color: green;
        flex-direction: column;

        span {
            color: blue;
        }
    }
`;

type ButtonProps = {
    bg: string;
    small?: boolean;
}

export const Button = styled.button<ButtonProps>`
    font-size: ${ props => props.small ? '15px' : '30px'};
    border-radius: 10px;
    margin-left: 10px;
    background-color: ${ props => props.bg}
`;