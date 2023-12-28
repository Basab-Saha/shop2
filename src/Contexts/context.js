import fakers from 'faker';
import {createContext} from 'react';

const cart=createContext();


const Context=({children})=>{

const products=[...Array(20)].map(()=>{
    return{
        id:fakers.random.uuid(),
        name:fakers.commerce.productName(),
        price:fakers.commerce.price(),
        image:fakers.random.image(),
        inStock:fakers.random.arrayElement([0,3,5,6,7,8,9,10]),
        fastDelivery:fakers.random.boolean(),
        ratings:fakers.random.arrayElement([1,2,3,4,5]),
    }
})

const[state,dispatch]=useReducer(cartReducer,{ products:products , cart:[] } );


    return(
        <Context.Provider value={{state,dispatch}}>
            {children}
        </Context.Provider>
    )
};

export default Context;
