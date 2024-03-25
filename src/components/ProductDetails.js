import React, { Fragment, useState, useEffect} from "react";
import classes from './ProductDetails.module.css';

const ProductDetails = () =>{
    const [totalPrice,setTotalPrice] = useState(0);
    const[storageItems,setStorageItems]=useState([]);

    useEffect(() => {
        let items=[];
        for (let i=0; i< localStorage.length; i++)
        {
            const key = localStorage.key(i)
            const value = localStorage.getItem(key);
            const parsedValue = JSON.parse(value);
            console.log(`${key} : ${value}`)
            items.push({key,parsedValue})
        }
        setStorageItems(items)
    },[localStorage.length]);

    useEffect(() => {
        let sum = 0;
        storageItems.forEach(item => {
            sum += Number(item.parsedValue.price);
        });
        setTotalPrice(sum);
    }, [storageItems]);

    const onClickHandler = (id) => {        
        console.log("delete id>>>", id);
        localStorage.removeItem(id);
        setStorageItems(storageItems.filter(item => item.parsedValue.id !== id));
    };
    
    return (
        <Fragment>
            <div className={classes.card}>
                <ul>
                    <h2>Products</h2>
                    {storageItems.map((item) => (
                        <li key={item.parsedValue.id} className={classes.productItem}>
                            <span>{item.parsedValue.name} {item.parsedValue.price}</span>
                            <input type="button" className={classes.delete} value="Delete Product" onClick={() => onClickHandler(item.parsedValue.id)} />
                        </li>
                    ))}
                    <h3>Total Value Worth of Products : {totalPrice}</h3>
                </ul>
            </div>
        </Fragment>
    );
};
export default ProductDetails;
