import React, { useCallback, useEffect, useRef, useState } from 'react'
import backend from '../../services/backend';
import './styles.css'

interface Ichildren {
    isOpen: boolean;
    children: any;
    hidden: boolean;
    onSubmit: () => void;
}

interface Iparams {
    id: string;
}

const Table: React.FC<Ichildren> = ({ isOpen, children, onSubmit }) => {

    const [getValueId, setGetValueId] = useState<Iparams>({ id: '' })
    const mounted = useRef(false)

    const onDeleteDataHandler = useCallback(async () => {
        try {
            await backend.delete(`/category/${getValueId.id}`)
            onSubmit()
        } catch (error: any) {
            console.log(error)
        }
    }, [getValueId.id, onSubmit])


    const isOpenList = (id: string) => {
        setGetValueId({ id: id })
    }

    useEffect(() => {
        mounted.current = true
        if (getValueId.id.length > 0) {
            onDeleteDataHandler()
        }
        return () => { mounted.current = false };
    }, [getValueId.id.length, onDeleteDataHandler])

    return (
        <table className='ListContent' >
            {children.map((dataPoint: any) =>

                <tbody hidden={isOpen} key={dataPoint.Id}>

                    <tr className={'name'}>
                        <td >{dataPoint.Nome}</td>
                    </tr>
                    <tr className={'description'}>
                        <td >{dataPoint.Descricao}</td>
                    </tr>
                    <tr className={'trashColumn'}>
                        <td ><img src={'./assets/trash.png'} alt='png' className='trash' onClick={() => isOpenList(dataPoint.Id)} /></td>
                    </tr>

                </tbody>
            )}

        </table>

    )
}


export default Table