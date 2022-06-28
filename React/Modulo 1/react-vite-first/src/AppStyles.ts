import styled from 'styled-components'

type ContainerProps = {
    bg: string;
}

export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.bg};
    color: white;
    font-weight: 600;
    padding: 20px;

    span {
        font-weight: bold;
        color: red;
    }
    
    .link {
        color: #d5d5d5;

        &:hover {
            color: #2b2b2b;
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