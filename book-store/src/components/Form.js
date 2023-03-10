import React from "react";

const Form = () => (
    <>
    <form action='GET'>
       Book Title:
       <input type="text"/>
       {' '}
       <br />
       {' '}
       <br />
       Author:
       <input type="text"/>
       {' '}
       <br />
       <button type="submit">Add</button>
       {' '}
       <br />
    </form>
    </>

);

export default Form;