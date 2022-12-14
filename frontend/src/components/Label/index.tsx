
import React, { useCallback } from 'react';
import { useNavigate } from "react-router-dom";

import './index.css';

const Label: React.FC = () => {
    const navigate = useNavigate();
    const onClickClientCategoryButtonHandler = useCallback(() => navigate(`/category`), [navigate])

    return (
        <div className='TextHome'>
            <label className='labelHome'>Consulta de clientes</label>
            <div className='background1' />
            <small className='SmallHome'>Veja a lista de clientes, com a opção de criação<br />e delete caso o cadastro do cliente não seja mais eficaz.</small>
            <button className='buttonHome' onClick={() => onClickClientCategoryButtonHandler()}>Vamos começar</button>
        </div>
    )
}

export default Label; 