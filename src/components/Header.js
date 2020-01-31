import React, {  } from "react";
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage} from 'formik';

export default function Header(props) {
  const setSearch = props.setSearch;
  const history = useHistory();
  const go = () => { 
    history.push("/characters/card");
  }
  // const search = props.search;

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
  const initialState = {
    search: '',
  }

  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Formik
          
          onSubmit={handleSubmit}
          initialValues={initialState}
          >
              <Form className="form">
                  <Field 
                    type="text"
                    id="search"
                    name="search"
                    placeholder="search"
                    className="input"/>
                    {/* <ErrorMessage name="name" component="div" className="error"/> */}
                    <button  type="submit" >submit</button>
                    
              </Form>
              
          </Formik>
      <Link to="/characters">
        Characters
      </Link>
    </header>
  );
}
