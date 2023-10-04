import { useContext } from "react";
import cartContext from "./store/cart-context";

export default function ProductList() {
  const products = [
    {
      id: 1,
      name: "product1",
      price: "1000",
    },
    {
      id: 2,
      name: "product2",
      price: "2000",
    },
    {
      id: 3,
      name: "product3",
      price: "3000",
    },
  ];
  const inCart = useContext(cartContext);
  const addCart = (id) => {
    const checkItem = inCart.cart.filter((item) => {
      return item.id === id ? true : false;
    });
    checkItem.length > 0
      ? inCart.setCart(
          inCart.cart.filter((item) => {
            return item.id === id
              ? { ...item, count: (item.count += 1) }
              : item;
          })
        )
      : inCart.setCart([
          ...inCart.cart,
          { ...products[Number(id) - 1], count: 1 },
        ]);
  };
  const style = {
    display: "flex",
  };
  const divStyle = {
    border: "1px solid brown",
    margin: "5px",
    padding: "20px",
  };
  return (
    <>
      <h2>상품 리스트</h2>
      <div className="Products" style={style}>
        {products.map((product) => {
          return (
            <div key={product.id} style={divStyle}>
              <p>상품명: {product.name}</p>
              <p>가격: {product.price}원</p>
              <button type="button" onClick={() => addCart(product.id)}>
                장바구니에 추가
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
