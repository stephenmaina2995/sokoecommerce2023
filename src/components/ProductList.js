import React from 'react'

function ProductList({product, addToCart}) {
  return (
    <div className='flex'>
      {
product.map((productItem, productIndex)=>{
return(
<div style={{width: '50%'}}>
    <div className='product-item'>
        <img src={productItem.img} width="100%"/>
        <p>{productItem.productname}|Kshs {productItem.price}</p>
        <p>{productItem.description}|{productItem.quantity}</p>
        <button onClick={()=>addToCart(productItem)}>Add To Cart</button>
        <button>Delete</button>
    </div>
</div>
)
})
      }
    </div>
  )
}

export default ProductList
