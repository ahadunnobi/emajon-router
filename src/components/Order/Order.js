import React from "react";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Reitem from "../Reitem/Reitem";
import useCart from "../../hooks/useCart";
import './order.css'
import { Link } from "react-router-dom";


const Order = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
  return (
      <div className="shop-container0">
        <div className="products-container-0">
                {
                        cart.map(product => <Reitem
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem }
                        ></Reitem>)
                }
        </div>
        <div className="cart-container-0">
          <Cart cart={cart}>
            <Link to={'/inventory'}>
                  <button>Procced chekout</button>
            </Link>
          </Cart>
        </div>
      </div>
  );
};

export default Order;
