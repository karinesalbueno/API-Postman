import './index.css';
import { useNavigate } from "react-router-dom";
import { useCallback } from 'react';

const Header: React.FC = () => {
    const navigate = useNavigate();

    const onClickHomeButtonHandler = useCallback(() => navigate(`/home`), [navigate])
    const onClickClientCategoryButtonHandler = useCallback(() => navigate(`/category`), [navigate])

    return (
        <header>
            <ul>
                <li onClick={onClickHomeButtonHandler}><div className='inicio'>INÍCIO</div></li>
                <li onClick={onClickClientCategoryButtonHandler}>CATEGORIA CLIENTE</li>
            </ul>

        </header>

    )
}

export default Header; 