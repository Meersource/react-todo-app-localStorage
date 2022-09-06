import React,{useEffect, useState} from 'react'
import UserCard from '../components/UserCard'


const getLocalStorage = () =>{
  let list  = localStorage.getItem("userList")
  if(list){
    return (list = JSON.parse(localStorage.getItem("userList")))
  } else{
    return [];
  }
}


const Users = () => {

  const [bio, setBio] = useState(getLocalStorage())
  const [user, setUser] = useState()


useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/photos').then(data=> data.json()).then((result)=>setBio(result)).catch(err=>console.log(err))
  
  // fetch('https://jsonplaceholder.typicode.com/users').then(data=> data.json()).then((result)=>setUser(result)).catch(err=>console.log(err))

}, [])

const limited= bio?.slice(1,50)
console.log("limited", limited)

useEffect(()=>{
  localStorage.setItem("userList", JSON.stringify(limited))
},[bio])


  return (
    <>
   <h1 style={{marginTop:"20px"}}>Users</h1>


    {
      limited?.map((val)=>{
        return(
          <div style={{width:'400px',height:"300px", margin:"0px auto", padding:"0px",display:"inline-block"}}>
      <UserCard title={val?.title} photo={val?.thumbnailUrl} id={val?.id} />
      </div>
        )
      })
    }
    
    </>
  )
}

export default Users