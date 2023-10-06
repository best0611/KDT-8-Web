import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_ITEM } from "./store";

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
  const carts = useSelector((state) => state);
  const dispatch = useDispatch();

  const addCart = (product) => {
    dispatch({ type: ADD_ITEM, product });
  };
  return (
    <>
      <h2>상품 리스트</h2>
      <div>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <p>상품명: {product.name}</p>
              <p>가격: {product.price}원</p>
              <button type="button" onClick={() => addCart(product)}>
                장바구니에 추가
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
