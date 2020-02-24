import React, {useState} from "react";

const Edit = ({product, editProduct, deleteProduct})=>{

    const [toggle, setToggle]=useState(false);
    const [qty, setQty]=useState(product.qty);
    console.log(toggle)
return(
    <div>
                    <div className='product-container'>
                        <img src={product.product_image} alt={product.product_name} className='product-image'/>
                            <p>{product.product_name}</p>
                            <p>${product.price*(product.qty)}.00</p>
                            <p>qty: {toggle ? 
                            <input 
                            name='qty'
                            value={qty}
                            onChange={(e)=>setQty(e.target.value)}/> 
                            : product.qty}</p>
                            {toggle ? <button onClick={()=> {
                                setToggle(!toggle)
                                editProduct(product,qty)}}>Save</button>:<button onClick={()=>setToggle(!toggle)}>Edit</button>}
                            <button onClick={() => deleteProduct(product.order_item_id)}>Delete</button>
                    </div> 
                </div>
)
}
export default Edit;