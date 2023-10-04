import { useContext } from "react";
import cartContext from "./store/cart-context";

export default function CartItem() {
  const inCart = useContext(cartContext);
  const { cart, setCart } = inCart;
  const delCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  let totalPrice = 0;
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
      <h2>장바구니</h2>
      <div className="Cart" style={style}>
        {cart.length > 0 ? (
          cart.map((item) => {
            return (
              <div key={item.id} style={divStyle}>
                <p>상품명: {item.name}</p>
                <p>가격: {item.price}원</p>
                <p>수량: {item.count}개</p>
                <button type="button" onClick={() => delCart(item.id)}>
                  제거
                </button>
                <p hidden>
                  {(totalPrice += Number(item.price) * Number(item.count))}
                </p>
              </div>
            );
          })
        ) : (
          <div>장바구니에 상품이 없습니다.</div>
        )}
      </div>
      <h4>총 가격: {totalPrice}원</h4>
    </>
  );
}
