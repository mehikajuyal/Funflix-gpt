import { useDispatch, useSelector } from "react-redux";
import CategoryItemCard from "./CategoryItemCard";
import {clearCart} from "./../utils/Store/cartSlice"

const CartComponent = () => {
    const cartList = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
      dispatch(clearCart());
    }
    return (
    <div  className="text-center m-2 p-2">
        <h1 className="font-bold text-xl">Cart</h1>
        <div className="text-right mr-28 mb-4"> 
        <button className="p-3 bg-gray-500 text-white rounded-sm" onClick={handleClearCart}>Clear</button>
        </div>

        <div className="w-6/12  m-auto">
            {
                cartList.length === 0 && <h2>Card is empty. Add items to your cart.</h2>
            }
            <CategoryItemCard itemList={cartList}></CategoryItemCard>
        </div>
    </div>
    )
}

export default CartComponent;