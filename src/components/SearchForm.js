import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export default function SearchForm(props) {
  const setSearch = props.setSearch;
  const history = useHistory();
  const go = () => { 
    history.push("/characters/card");
  }

  const initialState = {
    search: '',
  }

  const validationSchema = Yup.object().shape({
    search: Yup.string().required('please enter a valid name'),
  });

  function handleSubmit(values, actions) {
    // console.log(values);
    // console.log(actions);
    
    
      axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        
        res.data.results.map(el => {
          if(values.search === el.name || values.search === el.name.toLowerCase() || values.search === el.name.toUpperCase()){
            setSearch(el)
            go();
           } 
          
        })
      })
      .catch(err => {
        console.log(err)
      })
      
}

  return (
    <section className="search-form">
     <Formik
          
          onSubmit={handleSubmit}
          initialValues={initialState}
          validationSchema={validationSchema}
          >
              <Form className="form">
                  <Field 
                    type="text"
                    id="search"
                    name="search"
                    placeholder="search"
                    className="input"/>
                    <button  type="submit" >submit</button>
                    <ErrorMessage name="search" component="div" className="error"/>
                    
              </Form>
              
          </Formik>
    </section>
  );
}
