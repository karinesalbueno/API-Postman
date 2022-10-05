import { useCallback, useState } from 'react';
import Card from '../../components/Card';
import Header from '../../components/Header';
import backend from '../../services/backend';

import InsertClientCategory from '../../components/InsertClientCategory';
import Spinner from '../../components/Spinner';

interface IDataState {
    Nome: string,
    Descricao?: string,
    id: string
}

const ClientCategory: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState<boolean>(true)
    const [data, setData] = useState<IDataState[]>([])

    const onFetchDataHandler = useCallback(async () => {
        try {
            setLoading(true)
            const res = await backend.get(`/category`)
            setData(res.data);
            setLoading(false)

        } catch (error: any) {
            setLoading(false)
        }
    }, [])

    const isOpenList = () => {
        setIsOpen(false)
        onFetchDataHandler()
    }
    return (
        <>
            {
                loading ?
                    <Spinner />
                    :
                    <>
                        <Header />
                        <section>
                            <InsertClientCategory onSubmit={isOpenList} />
                            <Card
                                title={'Lista de todos os clientes'} buttonName={'Listar'}
                                onClick={isOpenList}
                                isOpen={isOpen}
                                children={data}
                                onSubmit={isOpenList}
                            />
                        </section>
                    </>
            }
        </>

    )
}

export default ClientCategory; 