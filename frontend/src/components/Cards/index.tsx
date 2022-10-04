import React from 'react'
import './styles.css'

interface Ichildren {
    title: string;
    buttonName: string;
    onClick: () => void;
    isOpen: boolean;
    children: any;
}

const Cards: React.FC<Ichildren> = ({ title, buttonName, onClick, isOpen, children }) => {
    return (

        <div className='container'>

            <div className="card" >
                <div>{title}</div>
                <button onClick={onClick} className="buttonCategory">{buttonName}</button>
            </div>

            <div className='visible' hidden={isOpen}>
                <small>Nomes</small>
                
            </div>

        </div>
    )
}


export default Cards