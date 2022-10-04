import Cards from '../../components/Cards';
import Header from '../../components/Header';

import './index.css';

const ClientCategory: React.FC = () => {

    return (
        <>
            <Header />
            <section>
                <Cards title={'Lista de todos os clientes'} buttonName={'Listar'}
                    onClick={()=>{}}
                    isOpen={true}
                    children={null} />

                <Cards title={'Novo registro de clientes'} buttonName={'Inserir'}
                    onClick={()=>{}}
                    isOpen={true}
                    children={null} />

            </section>
        </>

    )
}

export default ClientCategory; 