import React, { useCallback, useState } from 'react';
import backend from '../../services/backend';
import './index.css';

interface IStates {
    onSubmit: () => void;
}

interface Ichildren {
    Inputnome: string;
    Inputdescricao?: string
}

const InsertClientCategory: React.FC<IStates> = ({ onSubmit }) => {

    const [userInput, setUserInput] = useState<Ichildren>({
        Inputnome: '',
        Inputdescricao: ''
    });

    const nameChangeHandler = (event: { target: { value: any; }; }) => {
        setUserInput((prevState) => {
            return { ...prevState, Inputnome: event.target.value }
        })
    }
    const descriptionChangeHandler = (event: { target: { value: any; }; }) => {
        setUserInput((prevState) => {
            return { ...prevState, Inputdescricao: event.target.value }
        })
    }

    const onFetchDataHandler = useCallback(async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const Data = {
            Nome: userInput.Inputnome,
            Descricao: userInput.Inputdescricao,
        }
        try {
            await backend.post(`/category/${Data.Nome}/${Data.Descricao}`, { Data })
            setUserInput({
                Inputnome: '',
                Inputdescricao: ''
            })
            onSubmit()
        } catch (error: any) {
            console.log('error')
        }
    }, [onSubmit, userInput.Inputdescricao, userInput.Inputnome])


    return (
        <form onSubmit={onFetchDataHandler}>
            <div className='new-client' >
                <input
                    type="text"
                    placeholder='Nome'
                    value={userInput.Inputnome}
                    onChange={nameChangeHandler}

                />
                <input
                    placeholder='Descrição'
                    type="text"
                    value={userInput.Inputdescricao}
                    onChange={descriptionChangeHandler}
                />
            </div>
            <button className='insertButton'>Inserir novo cliente</button>
        </form>
    )
}


export default InsertClientCategory