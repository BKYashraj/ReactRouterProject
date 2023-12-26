import React, { useEffect, useState } from 'react'

function youtube() {
  const[data,setData] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/BKYashraj')
    .then(Response => Response.json())
    .then(data =>{
      console.log(data);
      setData(data)
    })
  },[])
  return (
    <h1 className=' text-center m-4 text-3xl p-6  bg-gray-700 text-white
    '>Github Followers : {data.followers} 
      <br />
      <br />
      Github Followings : {data.following} 
    <img src={data.avatar_url} alt="" className=' p-4 'width={400}/>
    </h1>
  )
}

export default youtube