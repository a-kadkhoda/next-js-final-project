"use client";


import { setToCart } from "@/redux/slicers/useSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";


interface IProps {
  id: number
}
const AddToCart = (props :IProps) => {
  const cart = useSelector((state:RootState)=> state.userSlice.cart)
  const name = useSelector((state:RootState)=> state.auth.name)

  const {id} = props
  const dispatch =  useDispatch()
  return (<>
      {
      name == "" ? <span className="text-3xl text-warning font-bold border p-10 text-center">You Have To Loggin First</span> :   <button  onClick={()=> dispatch(setToCart(id))} className={`btn ${cart.includes(id) ? "btn-error": "btn-success"}`}>{cart.includes(id) ? "Remove From Cart" : "Add To Cart"}</button>
    }
  
  </>


  );
};

export default AddToCart;
