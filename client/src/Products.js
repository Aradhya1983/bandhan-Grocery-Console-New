import {React, useEffect, useState} from "react";
import { Formik, Form, Field } from "formik";
import "./app.css";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
const Products= () => {
 const[data,setData]=useState({})
 useEffect(() => {
  console.log("data>>>>>>>>>1947",data)
  console.log("hello")
    if (data) {
      fetch('http://localhost:5000/products/addProduct', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({
          item: data.Products
        }),
      }).then((res) => {
        return res.json()
      }).then((data)=>{
        alert(data)
        console.log(data)
      }).catch((err) => {
        console.log(err.message);
      });
    }
  
},[data] );
 function AddProduct(item){
  setData(item)
 console.log("item>>>>>>>",item)
 
 }
  
  return (
    <div>
      <Formik
        initialValues={{
          Products: {
            category: "",
            prod_code: "",
            prod_discount: "",
            prod_id: "",
            prod_img: "",
            prod_name: "",
            store_id: "",

          },
        }}
        onSubmit={(values) => {
          // same shape as initial values
         
          AddProduct(values);
        
        }}
      >
        <Form class="form-body">
          <div class="row">
            <div class="form-holder">
              <div class="form-items">
                <h3>Products</h3>
                <p>Fill in the data of products</p>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Products.category"
                    placeholder="category"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Products.prod_code"
                    placeholder="prod_code"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Products.prod_discount"
                    placeholder="prod_discount"
                    type={"number"}
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Products.prod_id"
                    placeholder="prod_id"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Products.prod_img"
                    placeholder="prod_img"
                  />
                </div>

                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Products.prod_name"
                    placeholder="prod_name"
                  />
                </div>

                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Products.store_id"
                    placeholder="store_id"
                  />
                </div>

                <button type="submit" class="form-button mt-3">Submit</button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
      <></>
      
    </div>
  );
};

export default Products;
