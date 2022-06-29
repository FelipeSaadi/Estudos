import { Level } from "../../helpers/imc"

type Props = {
    data: Level
}

export const GridItem = ({ data }: Props) => {
    return (
        <div>{data.title}</div>
    )
}