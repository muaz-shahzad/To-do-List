import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


let data = [];
const Test = () => {
    data = JSON.parse(localStorage.getItem('items'));
    console.log("Test Data =>",data);
    return (
        <>
        <div>
                {data.map((val,key)=>{
                    return <li>{val}</li>
                    
                })}
        </div>
        </>
   
    ) 
}

export default Test;