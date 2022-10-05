import React from 'react'
import Table from '../Table';
import './styles.css'

interface Ichildren {
    title: string;
    buttonName: string;
    onClick: () => void;
    isOpen: boolean;
    children: any;
    onSubmit: () => void;

}

const Card: React.FC<Ichildren> = ({ title, buttonName, onClick, isOpen, children, onSubmit}) => {
    return (
        <div className='container'>

            <div className="card">
                <div>{title}</div>
                <button onClick={onClick} className="buttonCategory">{buttonName}</button>
            </div>

            <div hidden={isOpen} className="smallText">
                <small>Nome</small>
                <small>Descrição</small>
             
            </div>
            <Table isOpen={isOpen} children={children} hidden={isOpen} onSubmit={onSubmit} />
        </div >
    )
}


export default Card