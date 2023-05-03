import React, { useState } from 'react'

function ProductList({product, addToCart}) {
  let [products, setProduct] = useState()
  function handleDelete(id=1){
    fetch(`http://localhost:8000/electronics/${id}`, {
      method:"DELETE",
    })
    .then(res => res.json())
    .then(data => setProduct())
  }
  return (
    <div className='flex'>
      {
product.map((productItem, productIndex)=>{
return(
<div style={{width: '50%'}}>
    <div className='product-item'>
        <img src={productItem.img} width="100%"/>
        <p>{productItem.productname}|Kshs {productItem.price}</p>
        <p>{productItem.category}|{productItem.quantity}</p>
        <button onClick={()=>addToCart(productItem)}>Add To Cart</button>
        <button onClick={handleDelete}>Delete</button>
    </div>
</div>
)
})
      }
    </div>
  )

    }
export default ProductList
