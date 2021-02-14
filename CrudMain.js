//Main file

import React from 'react'
import CrudContextProvider from './CrudContext';
import CrudHook from './CrudHook';

function CrudMain() {
    return (
        <CrudContextProvider>
            <CrudHook/>
        </CrudContextProvider>
    )
}

export default CrudMain
