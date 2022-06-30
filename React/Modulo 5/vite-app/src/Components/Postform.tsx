import { ChangeEvent, useState } from 'react';

type Props = {
    onAdd: (title: string, body: string) => void
}

export const Postform = ({ onAdd }: Props) => {
    const [addTitleText, setAddTitleText] = useState('');
    const [addBodyText, setAddBodyText] = useState('');

    const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddTitleText(e.target.value);
    }

    const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setAddBodyText(e.target.value);
    }

    const handleAddClick = () => {
        if (addTitleText && addBodyText) {
            onAdd(addTitleText, addBodyText);
        } else {
            alert("Preencha os campos.");
        }
    }

    return (
        <fieldset className='border-2 md-3 p-3'>
            <legend>Adicionar Novo Post</legend>

            <input
                value={addTitleText}
                onChange={handleAddTitleChange}
                className="block border"
                type="text"
                placeholder="Digite um Título"
            />

            <textarea
                className="block border"
                value={addBodyText}
                onChange={handleAddBodyChange}
            >
            </textarea>
            <button className="block border" onClick={handleAddClick}>Adicionar</button>
        </fieldset>
    )
}