import React from 'react'

function UpdateProduct() {
    const handleSubmitChanges=() => {
        console.log(handleSubmitChanges)
    };
  return (
    <div>
      <form onSubmit={handleSubmitChanges} className="form">
        <input
          type="text"
          name="productname"
          placeholder="Product Name"
          required
        />
        <input type="number" name="price" placeholder="Price" required />
        <input
          type="text"
          name="category"
          placeholder="Category"
          required
        />
        <input type="number" name="quantity" placeholder="Quantity" required />
        <input type="text" name="img" placeholder="Image URL" required />
        <button type="submit">Edit Product</button>
      </form>
    </div>
  )
}

export default UpdateProduct
