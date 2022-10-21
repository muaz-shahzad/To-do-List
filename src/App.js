import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import List from './List';
import EditIcon from '@mui/icons-material/Edit';
import Todo from './Todo';
import AddIcon from '@mui/icons-material/Add';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import Test from './Test';




let a = ""
let data = [];
function App() {
  const [curr, upd] = useState("");
  const [items, setitems] = useState([])
  const [edititem, updedit] = useState(null)
  const [toogle, updtoggle] = useState(true)



  const inputevent = (e) => {
    upd(e.target.value)
  }
  const Add = () => {
    if (!curr) {
      alert("Please Add a item...!!")
    } else if (curr && !toogle) {
      setitems(
        items.map((val, index) => {
          if (index === edititem) { // index item array ka r jo edit k function say id a rhi dono ko compare kar rhy
            return curr
          }
          return val; // jo b update kia hy uski value idhr a rhi hay
        })
      )
      // Local Storage Edit
      localStorage.setItem('items', JSON.stringify(items));
      data = JSON.parse(localStorage.getItem('items'));
      data = data ? JSON.parse(localStorage.getItem('items')) : [];
      localStorage.setItem('items', JSON.stringify(data));
      upd("")
      updtoggle(true)
    }
    else {
      setitems([...items, curr]);
      upd("");
      //  Local Storage Add Data
      data = JSON.parse(localStorage.getItem('items'));
      data = data ? JSON.parse(localStorage.getItem('items')) : [];
      data.push(curr);
      localStorage.setItem('items', JSON.stringify(data));
    }
  }
  useEffect(() => {
    if (localStorage.getItem('items'))
      setitems(JSON.parse(localStorage.getItem('items')));
  }, []);


  const deleteItem = (id) => {
    console.log("Delted Horaha")
    setitems((preval) => {
      return preval.filter((val, key) => {
        return key !== id;
      })

    })
    //  Local Storage Delete Data
    let data = JSON.parse(localStorage.getItem('items'));
    data.splice(id, 1);
    localStorage.setItem('items', JSON.stringify(data));
    // 

  }

  const EditItem = (id) => {
    console.log("Edit horaha")
    let neweditItem = items.find((val, index) => {
      return index == id
    });
    upd(neweditItem) // curr m value ja rhi jis pay click kia hay r input fiel m show horhi jis b id pay click kia
    a = neweditItem;
    console.log(a)
    updedit(id) //hook m ids ja rhi jis id pay click kia hay eidt k liye
    updtoggle(false)  

  }
  const RemoveAll = () => {
    setitems([]);
    window.localStorage.clear();
  }
  return (
    <>

      <div className="container-fluid">
        <div className="main_div">
          <div className="center_div">
            <br />
            <h1>ToDo List</h1>
            <br />
            <input type="text" placeholder="✍️ Add a item" value={curr} onChange={inputevent} />
            {
              toogle ? <AddIcon className="addbtn" onClick={Add} /> :
                <EditIcon className="addbtn" onClick={Add} />
            }
            <div className="mt-4">
              <ol>
                {items.map((val, key) => {
                  return <List
                    key={key}
                    id={key}
                    data={val}
                    Selected_todo={deleteItem}
                    onedit={EditItem}
                  />
                })}
              </ol>
            </div>
          </div>

        </div>
        <div className='text-center'>
          <PlaylistRemoveIcon className='rmv' onClick={RemoveAll} />
        </div>
      </div>

      {/*  */}


      {/* <Test/> */}
    </>
  );
}

export default App;
