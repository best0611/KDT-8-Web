import { useContext } from "react";
import cartContext from "./store/cart-context";

export default function CartItem() {
  const inCart = useContext(cartContext);
  const { cart, setCart } = inCart;
  const delCart = (id) => {
    // filter를 사용하여 새로운 배열 반환
    // 리액트에서 특정 값을 직접적으로 바꿀 수는 없음
    setCart(cart.filter((item) => item.id !== id));
  };
  // let totalPrice = 0;
  const style = {
    display: "flex",
  };
  const divStyle = {
    border: "1px solid brown",
    margin: "5px",
    padding: "20px",
  };

  // const totalPrice = () => {}
  //
  // reduce: 배열의 모든 요소를 더할 때 사용. 하나의 결과를 반환.
  const totalPrice = cart.reduce((acc, val) => acc + val.price);
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
                {/* <p hidden>
                  {(totalPrice += Number(item.price) * Number(item.count))}
                </p> */}
              </div>
            );
          })
        ) : (
          <div>장바구니에 상품이 없습니다.</div>
        )}
      </div>
      {/* 즉시 실행 함수 */}
      {/* {totalPrice()} */}
      <h4>총 가격: {totalPrice}원</h4>
    </>
  );
}
