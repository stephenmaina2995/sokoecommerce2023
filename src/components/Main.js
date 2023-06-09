import React from 'react'

function Main() {
  const handleSubmit=()=> {
    console.log(handleSubmit);
  };
  return (
    <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="productname"
          placeholder="Product Name"
          required
        />        <input type="number" name="price" placeholder="Price" required />

        <input
          type="text"
          name="category"
          placeholder="Description"
          required
        />
        <input type="number" name="quantity" placeholder="Quantity" required />
        <input type="text" name="img" placeholder="Image URL" required />
        <button type="submit">Add Product</button>
      </form>
  )
}

export default Main
