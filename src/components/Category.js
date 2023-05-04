import React from 'react'

const Category = () => {
  return (
    <div className='main'>
      
<input list="data" placeholder='search by category'/>
<datalist id='data'>
  <option>Laptop</option>
  <option>Smartphone</option>
</datalist>
    </div>
  )
}

export default Category
