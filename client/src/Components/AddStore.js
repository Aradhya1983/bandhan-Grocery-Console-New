import {React, useEffect, useState}  from 'react'
import { Formik, Form, Field } from "formik";
const AddStore = () => {
  const[data,setData]=useState({})
  useEffect(() => {
   console.log("data>>>>>>>>>1947",data)
   console.log("hello")
     if (data) {
       fetch('http://localhost:5000/stores/addStore', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
         body: JSON.stringify({
           item: data
         }),
       }).then((res) => {
        return res.json();
       }).then((data)=>{
        alert(data);
       }).catch((err) => {
         console.log(err.message);
       });
     }
   
 },[data] );
  function AddStore(item){
   setData(item)
  console.log("item>>>>>>>",item)
  
  }

  return (
    <div>
          <div>
      <Formik
        initialValues={{
          Store: {
            average_reviews: "",
            business_address: "",
            collect_times: "",
            coordinates: {
                Latitude:'',
                Longitude:''
            },
            delivery_time: "",
            discount: "",
            no_of_reviews: "",
            store_id:"",
            store_img:"",
            store_name:""
          },
        }}
        onSubmit={(values) => {
          // same shape as initial values
          AddStore(values)
          console.log(values);
        }}
      >
        <Form class="form-body">
          <div class="row">
            <div class="form-holder">
              <div class="form-items">
                <h3>Stores</h3>
                <p>Add stores data here</p>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Store.average_reviews"
                    placeholder="average reviews"
                    type={"number"}
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Store.business_address"
                    placeholder="business address"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Store.collect_times"
                    placeholder="collect times"
                    type={"number"}
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Store.coordinates.Latitude"
                    placeholder="Coordinates Latitude"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Store.coordinates.Longitude"
                    placeholder="Coordinates-longitude"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Store.delivery_time"
                    placeholder="delivery time"
                    type={"number"}
                  />
                </div>

                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Store.discount"
                    placeholder="discount"
                    type={"number"}
                  />
                </div>

                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Store.no_of_reviews"
                    placeholder="no of reviews"
                    type={"number"}
                  />
                </div>

                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Store.store_id"
                    placeholder="store id"
                  />
                </div>

                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Store.store_img"
                    placeholder="store img"
                  />
                </div>
                <div class="col-md-12">
                  <Field
                    class="form-control"
                    name="Store.store_name"
                    placeholder="store name"
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
    </div>
  )
}

export default AddStore