import React, { useState, useEffect } from 'react'
import { v1 as uuid } from 'uuid'

export const CrudContext = React.createContext();

const CrudContextProvider = (props) => {
    const initialState = JSON.parse(localStorage.getItem('ItemList')) || []
    const [data, setData] = useState(initialState);

    useEffect(() => {
        localStorage.setItem('ItemList', JSON.stringify(data))
    }, [data])

    const [editItem, setEditItem] = useState(null);

    const findData = (id) => {
        const newItem = data.find(d => d.id === id)
        setEditItem(newItem)
    }

    const editData = (item, id) => {
        const newData = data.map(d => (d.id === id ? { item, id } : d))
        setData(newData)
        setEditItem('')
    }

    const addData = (item) => {
        setData([...data, { id: uuid(), item }])
    }

    const removeData = (id) => {
        setData(data.filter(d => d.id !== id))
    }

    const clearData = () => {
        setData([])
    }


    return (
        <div>
            <CrudContext.Provider value={{ data, addData, findData, editData, editItem, removeData, clearData }}>
                {props.children}
            </CrudContext.Provider>
        </div>
    )
}

export default CrudContextProvider
