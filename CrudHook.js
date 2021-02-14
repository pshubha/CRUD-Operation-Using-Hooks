import React, { useState, useEffect,useContext } from 'react'     
import { CrudContext } from './CrudContext';

const CrudHook=()=> {
    const {data, addData, findData, editData, editItem, removeData, clearData} = useContext(CrudContext)
    const [item, setItem] = useState('')
    
    // const [deleteData, onDelete] = useDelete()
    console.log("dattaaaa"+data)
    useEffect(()=>{
        if(editItem){
            setItem(editItem.item)
        }else{
            setItem('')
        }
    },[editItem])

    const handlerChange = (e) => {
        setItem(e.target.value)
    }

    const handler = (e) => {
        e.preventDefault();
        if(!editItem){
            addData(item);
            setItem('')
        }else{
            editData(item, editItem.id)
            setItem('')
        }
        
    }

    return (
        <div>
            <form onSubmit={handler}>
                <input type='text' value={item} onChange={handlerChange} />
                <button type = 'submit'>{editItem ? 'Update' : 'Add'}</button>
            </form>
            <br></br>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Sr. no</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   
                    {
                        data.map((n, i) => {
                            return (
                                <tr key={n.id}>
                                    <td>{i + 1}</td>
                                    <td>{n.Item}</td>
                                    <td><button className='btn btn-dark' onClick={()=>findData(n.id)}>Update</button>
                                        <button className='btn btn-info' onClick={()=>removeData(n.id)}>&times;</button></td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>

        </div>
    )
}

export default CrudHook
