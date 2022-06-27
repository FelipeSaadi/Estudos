type Props = {
    text: string;
    clickFn: (txt: string) => void;
}

const Button = ({ text, clickFn }: Props) => {
    const handleClick = () => {
        clickFn("Você clicou no botão.")
    }

    return (
        <div>
            <button onClick={handleClick}>{text}</button>
        </div>
    )
}

export default Button