import React from 'react'
import { menu_list } from '../assets/assets'


const Explore = ({category, setCategory}) => {

  return (
    <div className='container' id='Explore'>
      <h1>Explore Our Menu</h1>
      <p className='explore-text'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
          return(
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}key={index} className='explore-menu-list-item'>
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>

              </div>
          )
        })}
      </div>
      <hr />

    </div>
  )
}

export default Explore