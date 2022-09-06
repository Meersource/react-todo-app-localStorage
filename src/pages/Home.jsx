import React, { useState, useEffect } from 'react'
import List from '../components/List'
import Alert from '../components/Alert'



const getLocalStorage = () =>{
  let list  = localStorage.getItem("list")
  if(list){
    return (list = JSON.parse(localStorage.getItem("list")))
  } else{
    return [];
  }
}






const Home = () => {
  const [name, setName] = useState("");
  // const [list, setList] = useState([]);
  const [list, setList] = useState(getLocalStorage());

  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });


useEffect(()=>{
  localStorage.setItem("list", JSON.stringify(list))
},[list])


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please Enter Value");
    } else if (name && isEditing) {


//       const edititem = list.findIndex((item)=> item.id === editID)
//       console.log("edititem", edititem)
//       const a=list[edititem].title=name
//       console.log("aaa", a)
//       setList( [...list,a] )
// console.log("list",list)

      const InputData =  list?.map((item) =>{
        if(item.id === editID){
          return {...item, title: name}
        }
        return item
      })
      setList(
        InputData 
      )
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "Value Edited")
    } else {
      showAlert(true, "success", "item Added to the list")
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName('');

    }
  }
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
 
  }
  const removeItem = (id) => {
    showAlert(true, "danger", "Item Removed");
    setList(list?.filter((item) => item.id !== id))
  }
  const editItem = (id) => {
    const edititem = list?.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(edititem.title)
  }
  const clearList = () => {
    showAlert(true, "danger", "Empty List")
    setList([])
  }










  return (
    <section className='section-center'>
      <form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3 style={{ marginBottom: "1.5rem", textAlign: "center" }}>Todo List</h3>

        <div className='mb-3 form'>
          <input type="text" className="form-control" placeholder="e.g Task"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button type='sumit' className='btn btn-success'>
            {isEditing ? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div style={{ marginTop: "2rem" }}>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <di className="text-center">
            <button className='btn btn-warning' onClick={clearList}>Clear Items</button>

          </di>
        </div>
      )}
       
    </section>
  )
}

export default Home