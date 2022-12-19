import React, { useEffect, useMemo, useState } from "react";
import s from "./basket.module.css";
import { MAFbutton } from "../ModuleComponent/MAFbutton/MAFbutton";
import { CatalogLine } from "../ModuleComponent/CatalogLine/CatalogLine";
import { clear } from "@testing-library/user-event/dist/clear";
import { useDispatch, useSelector } from "react-redux";
import { removeAll, removeItemIncart } from "../redux/BasketSlice";
import ItemCount from "./ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { addCustomerData, addOrder } from "../redux/OrdersSlice";
import axios from "axios";

export const Basket = () => {
    const [Button, setButton] = useState('');
    const data = useSelector(state => state.basket.dataBasket);
    const orderData = useSelector(state => state.order.orderData);
    const dataCount = useSelector(state => state.order.count);
    const objCustomer = useSelector(state => state.order.customerData);
    const dispatch = useDispatch();
    const [sendData, setSendData] = useState();



   const dataForOrder = {
      order: {
         name: objCustomer.name,
         telephone: objCustomer.tel,
         email: objCustomer.email,
      },
      cart:
         data &&
         data.map((item, i) => {
            return {
               product: item.id,
               name: item.name,
               quantity: dataCount[i],
               article: item.article,
               price: item.price,
               summ: item.price * dataCount[i],
            };
         }),
   };

   console.log(JSON.stringify(dataForOrder));
   console.log("qwerqwer:", dataForOrder);
   useEffect(() => {
      axios({
         method: "post",
         url: "http:127.0.0.1:8000/order/create",
         headers: {},
         data: JSON.stringify(dataForOrder),
      });
   }, [sendData]);

   const onClickSubmitOrder = (objCustomer) => {
      setSendData(orderData);
      alert("Заказ принят!");
   };

   const res = data.map((item) => {
      return (
         <tr key={item.id}>
            <td data-label="Наименование">
               {/* <Link to={`/info/${item.id}`} state={{from: `${item.id}`}}> */}
               <img className={s.table_img} src={item.image} />
               {item.name}
               {/* </Link> */}
            </td>
            <td data-label="Артикул">{item.article}</td>
            <td data-label="Стоимость">{item.price} руб.</td>
            <ItemCount item={item} />
            <td data-label="Удалить">
               <button onClick={() => dispatch(removeItemIncart(item.id))}>
                  удалить
               </button>
            </td>
         </tr>
      );
   });


    return (
        <div className={s.catalog}>
            <MAFbutton />
            <div className={s.setting}>
                <div className={s.div_li}>
                    <ul className={s.list_setting}>
                        <li>
                            <Link to="/">Главная</Link>
                        </li>
                        <li>→</li>
                        <li>
                            <Link to="/catalog">Категории</Link>
                        </li>
                        <li>→</li>
                        <li>
                            <Link to="/categories">Каталог</Link>
                        </li>
                        <li>→</li>
                        <li>Корзина</li>
                    </ul>
                </div>
                <CatalogLine />
            </div>


         <div className={s.table_container}>
            <table className={s.table}>
               <thead className="Component-thead-0-2-105">
                  <tr className={s.thead}>
                     <th>Наименование</th>
                     <th>Артикул</th>
                     <th>Стоимость</th>
                     <th>Количество</th>
                     <th>Сумма</th>
                     <th>Удалить</th>
                  </tr>
               </thead>
               <tbody
                  className={` ${s.tbody} ${
                     Button === "Clear" ? s.tbody_none : ""
                  }`}
               >
                  {res}
               </tbody>
            </table>
            <div className={s.action}>
               <Link to="/Categories">Продолжить покупки</Link>
               <div>
                  <button
                     onClick={() => {
                        dispatch(removeAll([]));
                        setButton("Clear");
                     }}
                  >
                     Очистить корзину
                  </button>
               </div>
            </div>
            <div className={s.person}>
               <a>Имя</a>
               <div>
                  <input
                     type="text"
                     value={objCustomer.name}
                     onChange={(e) =>
                        dispatch(
                           addCustomerData({
                              name: e.target.value,
                              tel: objCustomer.tel,
                              email: objCustomer.email,
                           })
                        )
                     }
                  ></input>
               </div>
               <a>Телефон</a>
               <div>
                  <input
                     type="text"
                     value={objCustomer.tel}
                     onChange={(e) =>
                        dispatch(
                           addCustomerData({
                              name: objCustomer.name,
                              tel: e.target.value,
                              email: objCustomer.email,
                           })
                        )
                     }
                  ></input>
               </div>
               <a>Электронная почта</a>
               <div>
                  <input
                     type="text"
                     value={objCustomer.email}
                     onChange={(e) =>
                        dispatch(
                           addCustomerData({
                              name: objCustomer.name,
                              tel: objCustomer.tel,
                              email: e.target.value,
                           })
                        )
                     }
                  ></input>
               </div>
               <div>
                  <button
                     className={s.basket_confirm}
                     onClick={() => {
                        onClickSubmitOrder(objCustomer);
                     }}
                  >
                     Оформить
                  </button>
               </div>
            </div>
        </div>
        </div>
    );
}
