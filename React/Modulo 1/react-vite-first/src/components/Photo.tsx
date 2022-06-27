import { ReactNode } from "react";

type Props = {
    legend: string;
    children: ReactNode
}

const Photo = ({ legend, children }: Props) => {
    return (
        <>
            {children}
            <p>{legend}</p>
        </>
    )
}

export default Photo