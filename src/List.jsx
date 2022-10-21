import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const List = (prop) => {
   
    return (
        <>
        <div className="todo_style">
        <i className="fa fa-times" aria-hidden="true"
         onClick={() =>{
            prop.Selected_todo(prop.id)
         }}> </i>
         <EditIcon className="listbtn"
          onClick={() => {
            prop.onedit(prop.id)
                    }}/>
        <li>{prop.data}</li>
        
        </div>
        </>
   
    ) 
}

export default List;