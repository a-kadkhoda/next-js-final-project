"use client";


import { setToCart } from "@/redux/slicers/useSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";


interface IProps {
  id: number
}
const AddToCart = (props :IProps) => {
  const state = useSelector((state:RootState)=> state.userSlice.cart)
  console.log(state);
  const {id} = props
  const dispatch =  useDispatch()
  return (
    <button  onClick={()=> dispatch(setToCart(id))} className={`btn ${state.includes(id) ? "btn-error": "btn-success"}`}>{state.includes(id) ? "Remove From Cart" : "Add To Cart"}</button>

  );
};

export default AddToCart;
