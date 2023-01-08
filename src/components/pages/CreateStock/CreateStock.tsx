import { Box, Button, Modal, Table, TableBody, TableHead, TextField } from '@mui/material';
import { DefaultContainer } from '../../../layout/DefaultContainer';
import EditIcon from '@mui/icons-material/Edit';
import styles from './CreateStock.module.scss';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useEffect, useState, createContext } from 'react';
import { IIdTest, IProductData } from '../../../interfaces';
import { Modaal } from '../Home/Modaal';

export const IdStock = createContext({} as IIdTest)

export function CreateStock(){

    const {register, handleSubmit, reset} = useForm();
    const [productList, setProductList] = useState<IProductData[]>([]);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState('')
    
    async function RegisterStock(data:any){
        const url = "http://localhost:3000/test";
        const connection = await axios.post(url,{
            productName: data.productName,
            typeProduct: data.typeProduct, 
            amountStock: data.amountStock
        }).then(response =>setProductList(prev => [...prev, response.data]))
        .then(err =>console.log(err))
        reset();

        return connection
    }

    async function Stock(){
        const res = await axios.get("http://localhost:3000/testing")
        setProductList(res.data);
    }
    
    useEffect(()=>{
        Stock();
    }, [])

    return(
        <IdStock.Provider value={{id}}>
        <DefaultContainer>
            <Box sx={{height:'100%', border:2, borderColor:'#1f9',display:'flex',alignItems:'center', flexDirection:'column'}}>
                <form onSubmit={handleSubmit(RegisterStock)} className={styles.Form}>
                    <div className={styles.title}>
                        <span>Crie um estoque</span>
                    </div>
                    <div className={styles.inputs}>
                        <TextField {...register('productName', {required:true})} label='Produto'></TextField>
                        <TextField {...register('typeProduct',{required:true})} label='Tipo'></TextField>
                        <TextField {...register('amountStock',{valueAsNumber:true, required:true})} label='Quantidade'></TextField>
                        <Button type='submit'/* onSubmit={} */ variant='contained'>Confirm</Button>
                    </div>
                </form>
                <Box sx={{display:'flex',overflow:'auto',height:'480px', width:'700px',border:2, borderColor:'blue' }}>
                    <Table sx={{textAlign:'center'}}>
                        <TableHead sx={{color:'#fff',border:1, textAlign:'center', background:'#424242'}}>
                            <th>Produto</th>
                            <th>Tipo</th>
                            <th>Quantidade</th>
                            <th>Registro</th>
                            <th></th>
                        </TableHead>
                        {productList.map(product => 
                            <TableBody key={product.id} sx={{borderBottom:2,textAlign:'center', background:'#616161'}}>
                                <td>{product.productName}</td>
                                <td>{product.typeProduct}</td>
                                <td>{product.amountStock}</td>
                                <td>{product.created_at}</td>
                                <Button  onClick={()=>setId(product.id)} ><EditIcon onClick={()=>{setOpen(true)}} sx={{color:'#000', marginTop:'1rem'}}/></Button>
                                    <Modal
                                        
                                        open={open}
                                        onClose={()=>{setOpen(false)}}
                                        
                                        sx={{backgroundColor:'transparent'}}
                                    >
                                        <Box
                                        
                                        sx={{position:'absolute', border:2, marginTop:'20%', marginBottom:'20%', marginRight:'40%', marginLeft:'40%', bgcolor:'#fff' }}>
                                            <Modaal  /* onClick={catchID} *//>
                                        </Box>
                                    </Modal>
                            </TableBody>
                        )}
                    </Table>
                </Box>
            </Box>
        </DefaultContainer>
        </IdStock.Provider>
    );
}