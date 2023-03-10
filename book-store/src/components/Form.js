import React from "react";

const Form = () => (
    <>
    <form action='GET'>
       Book Title:
       <input type="text" placeholder="title"/>
       <br />
       Author:
       <input type="text" placeholder="Author"/>
       <br />
       <button type="submit">Add</button>
    </form>
    </>

);

export default Form;