import React, { useEffect, useState } from 'react'
import './home.css'
import Card from './Card'
const Home = () => {
    const [data, setData]  = useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then((res)=>res.json()).then(json=>setData(json))
    })
  return (
    <div className='main'>
        <section className='products'>
         <ul className='data-items'>
         {console.log(data)}
           {data.map((item, index)=>
          
          <li key={index} className='list-item'>
            <Card image={item.image} price ={item.price} title={item.title}/>
            
               
          </li>
        )}
         </ul>
        </section>
    </div>
  )
}

export default Home