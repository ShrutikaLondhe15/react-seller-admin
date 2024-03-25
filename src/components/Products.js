import React, { Fragment, useRef } from "react";
import classes from "./Products.module.css";

const Products = (props) => {
  // const [prodid, setprodid] = useState(0);
  // const [prodname, setprodname] = useState(0);
  // const [prodprice, setprodprice] = useState(0);
  // const [prodcat, setprodcat] = useState(0);

  const idInputref = useRef();
  const nameInputref = useRef();
  const priceInputref = useRef();
  const catInputref = useRef();


  // const idChangeHandler = (event) => {
  //   setprodid(event.target.value);
  // };
  // const nameChangeHandler = (event) => {
  //   setprodname(event.target.value);
  // };
  // const sellChangeHandler = (event) => {
  //   setprodprice(event.target.value);
  // };
  // const catChangeHandler = (event) => {
  //   setprodcat(event.target.value);
  // };

  const addProductHandler = (event) => {
    event.preventDefault()
    console.log(idInputref.current.value)

    const id = idInputref.current.value;
    const name = nameInputref.current.value;
    const price = priceInputref.current.value;
    const cat = catInputref.current.value;

    console.log("input field", id,name,price,cat)

    const obj = {
      id: id,
      name: name,
      price: price,
      categry: cat,
    };
    localStorage.setItem(id, JSON.stringify(obj));

    props.onAddProduct(name,price);
    
    idInputref.current.value=''
    nameInputref.current.value='';
    priceInputref.current.value='';
    catInputref.current.value='';

  };

  return (
    <Fragment>
      <div className={classes.body}>
        <div className={classes.container}>
          <h2>Add Product</h2>
          <form id="productForm" onSubmit={addProductHandler}>
            <div className={classes.formgroup}>
              <label for="productId">Product ID:</label>
              <input
                type="text"
                id="productId"
                name="productId"
                // onChange={idChangeHandler}
                ref={idInputref}
                required
              />
            </div>
            <div className={classes.formgroup}>
              <label for="productName">Product Name:</label>
              <input
                type="text"
                id="productName"
                name="productName"
                // onChange={nameChangeHandler}
                ref={nameInputref}
                required
              />
            </div>
            <div className={classes.formgroup}>
              <label for="sellingPrice">Selling Price:</label>
              <input
                type="number"
                id="sellingPrice"
                name="sellingPrice"
                // onChange={sellChangeHandler}
                ref={priceInputref}
                required
              />
            </div>
            <div className={classes.formgroup}>
              <label for="category">Choose a Category:</label>
              <select
                id="category"
                name="category"
                // onChange={catChangeHandler}
                ref={catInputref}
                required
              >
                <option value="" disabled selected>
                  Select category
                </option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="books">Books</option>
                <option value="home">Home</option>
              </select>
            </div>
            <button type="submit">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
