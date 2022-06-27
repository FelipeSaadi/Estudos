type Props = {
    data: {
        name: string;
        age: number;
    }
}

const Person = ({ data }: Props) => {
    return (
        <li>Nome: {data.name}, Idade: {data.age}</li>
    )
}

export default Person