import { useSelector, useDispatch } from "react-redux";
import { DEL_ITEM } from "./store";
export default function Cart() {
  const carts = useSelector((state) => state);
  console.log(carts);
  const dispatch = useDispatch();
  const delCart = (id) => {
    dispatch({ type: DEL_ITEM, id });
  };
  // let totalPrice = 0;
  const totalPrice = carts.reduce(
    (acc, val) => acc + val.price * val.quantity,
    0
  );
  return (
    <>
      <h2>장바구니</h2>
      <div>
        {carts.length > 0 ? (
          carts.map((item) => {
            return (
              <div key={item.id}>
                <p>상품명: {item.name}</p>
                <p>가격: {item.price}원</p>
                <p>수량: {item.quantity}</p>
                <button type="button" onClick={() => delCart(item.id)}>
                  제거
                </button>
                {/* <p hidden>{(totalPrice += Number(item.price))}</p> */}
              </div>
            );
          })
        ) : (
          <div>장바구니에 상품이 없습니다.</div>
        )}
      </div>
      <h4>총 금액: {totalPrice}원</h4>
    </>
  );
}
