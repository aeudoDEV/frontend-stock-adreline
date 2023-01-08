import { Button, TextField } from '@mui/material';
import { style } from '@mui/system';
import { createContext, useContext } from 'react';
import styles from './Modaal.module.scss';
import { useForm } from 'react-hook-form';
import { IContextModal, IModal } from '../../../interfaces';
import axios from 'axios';
import { IdStock } from '../CreateStock/CreateStock';


export const ContextModaal = createContext<IContextModal>({} as IContextModal)
export function Modaal(props:IModal){

    const {handleSubmit, register, reset} = useForm();
    const { id } = useContext(IdStock);

    async function SaveAlteration(value: any){
       
        const url = `http://localhost:3000/test/${id}`
        const connection = axios.put(url,{
            productName: value.Rename,
            typeProduct: value.Retype,
            amountStock: value.Reamount
        }).then(response =>{console.log(response), reset()})
        .then(err =>console.log(err))
        reset();
        return connection
    }

    return(
        
        <ContextModaal.Provider value={{}}>
            <form {...props} onSubmit={handleSubmit(SaveAlteration)}className={styles.Form}>
                <h1>Editar Informações</h1>
                <TextField {...register('Rename')} sx={{mb:'1rem'}}label='Renomear'/>
                <TextField {...register('Retype')}sx={{mb:'1rem'}}label='Renomear Tipo'/>
                <TextField {...register('Reamount',{valueAsNumber:true, required:true})}sx={{mb:'1rem'}}label='Nova Quantidade'/>
                <Button type='submit' sx={{mb:'0.5rem'}} variant='contained'>Salvar</Button>
            </form>
        </ContextModaal.Provider>
    );
}