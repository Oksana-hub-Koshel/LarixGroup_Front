
import s from "./Info.module.css";
import { MAFbutton } from "../../ModuleComponent/MAFbutton/MAFbutton";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import { Catalog } from "../CatalogComponent";


// export const Info = (props) => {
//    const [state, setState] = useState(null);
//    const location = useLocation();
//    const { from } = location.state;
//    console.log(location.state);
//    const [catalog, setCatalog] = useState([]);
// 	console.log(state)
//    useEffect(() => {
//       axios
//          .get("http://127.0.0.1:8000/categories/")
//          .then((response) => setCatalog(response.data));
//    }, []);

//    useEffect(() => {
//       if (from) {
//          axios.get(`http://127.0.0.1:8000/product/${from}`).then((response) => {
//             setState(response.data);
//             // console.log(response.data)
//          });
//       }
//    }, [from]);

//    return (
//       <div className="container">
//          <MAFbutton />
//          <div className={s.line_element}>
//             <div className={s.services}>
//                <Link className={s.item_1} to="/privacy">
//                   <p>Гарантия</p>
//                   <img src="/Data/arrow-down-3f43d5514f61651d9d284f33af671963ee3362b952ec0b9ddff7b966f9bb1a7c.png" />
//                </Link>
//                <Link className={s.item_1} to="/installation">
//                   <p>Сборка, монтаж и шефмонтаж</p>
//                   <img src="/Data/arrow-down-3f43d5514f61651d9d284f33af671963ee3362b952ec0b9ddff7b966f9bb1a7c.png" />
//                </Link>
//                <Link className={s.item_1} to="/delivery">
//                   <p>Доставка и оплата</p>
//                   <img src="/Data/arrow-down-3f43d5514f61651d9d284f33af671963ee3362b952ec0b9ddff7b966f9bb1a7c.png" />
//                </Link>
//             </div>
//          </div>

//          <div className={s.setting}>
//             <div className={s.div_li}>
//                <ul className={s.list_setting}>
//                   <li className={s.li_black}>
//                      <Link to="/">Главная</Link>
//                   </li>
//                   <li className="Component-arrow-0-2-11">→</li>
//                   <li className={s.li_black}>
//                      <Link to="/categories">Категории</Link>
//                   </li>
//                   <li className="Component-arrow-0-2-11">→</li>
//                   <li className={s.li_black}>
//                      <Link to="/Catalog">Катaлог</Link>
//                   </li>
//                   <li className="Component-arrow-0-2-11">→</li>
//                   <li className={s.li_color}>
//                      <p>Каталог</p>
//                   </li>
//                </ul>
//             </div>
//          </div>

//          {state && (
//             <div className={s.container_main}>
//                <div className={s.img_left}>
//                   <div className={s.main_photo}>
//                      <img src={state.product.image} />
//                   </div>
//                   <div className={s.additional_photo}>
//                      {state.gallery.map((item, index) => {
//                         return <img key={index} src={item.image} />;
//                      })}
//                   </div>
//                </div>
//                <div className={s.description}>
//                   <h2>{state.product.name}</h2>
//                   <div className={s.button_num}>
//                      <div className={s.wrapper}>
//                         <div className={s.change}></div>
//                         <div className={s.count}></div>
//                         <div className={s.change}></div>
//                      </div>
//                      <button className={s.btn_order}>заказать</button>
//                   </div>
//                   <p className={s.descrip_1}>Описание</p>
//                   <p className={s.art}>Артикул: {state.product.article}</p>
//                   <h3 className={s.descrip}>{state.product.description}</h3>

//                   <div className={s.feature}>
//                      <div className={s.first_row}>
//                         <div className={s.col}>
//                            {state.characteristic.map((item) => {
//                               return (
//                                  <div className={s.charact}>
//                                     <p className={s.name}>{item.key}</p>
//                                     <p className={s.value}>{item.value}</p>
//                                  </div>
//                               );
//                            })}
//                         </div>
//                      </div>

//                      <div className={s.second_row}>
//                         <h4>Материал</h4>
//                         <p> {state.product.material.name}</p>
//                      </div>
//                   </div>
//                </div>
//             </div>
//          )}

//          <div className={s.present}>
//             <h2 className={s.title}>Также в наличии</h2>
//             <div className={s.components}>
//                {catalog.length &&
//                   catalog.map((value) => {
//                      return (
//                         <Link
//                            to={`/categories`}
//                            state={{ id: value.id }}
//                            key={value.id}
//                            className={s.item}
//                         >
//                            <div
//                               className={s.image}
//                               style={{ backgroundImage: `url(${value.image})` }}
//                            ></div>
//                            <p>{value.name}</p>
//                         </Link>
//                      );
//                   })}
//             </div>
//          </div>
//       </div>
//    );
// };

import { addToBasket } from "../../redux/BasketSlice";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerData } from "../../redux/OrdersSlice";

export const Info = (props) => {
   const [state, setState] = useState(null);
   const [animation, setAnimation] = useState(false);
   const [name, setName] = useState();
   const [tel, setTel] = useState();
   const [email, setEmail] = useState();
   const [counter, setCounter] = useState(0);
   const dispatch = useDispatch();
   const dataBasket = useSelector((state) => state.basket.dataBasket);
   const location = useLocation();
   const { from } = location.state;
   const [catalog, setCatalog] = useState([]);

   useEffect(() => {
      axios
         .get("http://127.0.0.1:8000/categories/")
         .then((response) => setCatalog(response.data));
   }, []);

   useEffect(() => {
      if (from) {
         axios.get(`http://127.0.0.1:8000/product/${from}`).then((response) => {
            setState(response.data);
         });
      }
   }, [from]);

   function CounterDec() {
      setCounter(counter - 1);
      if (counter <= 0) {
         setCounter(counter);
      }
   }

   return (
      <div className="container">
         <MAFbutton />
         <div className={s.line_element}>
            <div className={s.services}>
               <Link className={s.item_1} to="/privacy">
                  <p>Гарантия</p>
                  <img
                     src="/Data/arrow-down-3f43d5514f61651d9d284f33af671963ee3362b952ec0b9ddff7b966f9bb1a7c.png"
                     alt=""
                  />
               </Link>
               <Link className={s.item_1} to="/installation">
                  <p>Сборка, монтаж и шефмонтаж</p>
                  <img
                     src="/Data/arrow-down-3f43d5514f61651d9d284f33af671963ee3362b952ec0b9ddff7b966f9bb1a7c.png"
                     alt=""
                  />
               </Link>
               <Link className={s.item_1} to="/delivery">
                  <p>Доставка и оплата</p>
                  <img
                     src="/Data/arrow-down-3f43d5514f61651d9d284f33af671963ee3362b952ec0b9ddff7b966f9bb1a7c.png"
                     alt=""
                  />
               </Link>
            </div>
         </div>

         <div className={s.setting}>
            <div className={s.div_li}>
               <ul className={s.list_setting}>
                  <li className={s.li_black}>
                     <Link to="/">Главная</Link>
                  </li>
                  <li className="Component-arrow-0-2-11">→</li>
                  <li className={s.li_black}>
                     <Link to="/categories">Категории</Link>
                  </li>
                  <li className="Component-arrow-0-2-11">→</li>
                  <li className={s.li_black}>
                     <Link to="/Catalog">Катaлог</Link>
                  </li>
                  <li className="Component-arrow-0-2-11">→</li>
                  <li className={s.li_color}>{state && state.product.name}</li>
               </ul>
            </div>
         </div>

         {state && (
            <div className={s.container_main}>
               <div className={s.img_left}>
                  <div className={s.main_photo}>
                     <img src={state.product.image} />
                  </div>
                  <div className={s.additional_photo}>
                     {state.gallery.map((item) => {
                        return <img key={item.id} src={item.image} alt="" />;
                     })}
                  </div>
               </div>
               <div className={s.description}>
                  <h2>{state.product.name}</h2>
                  <div className={s.button_num}>
                     <div className={s.wrapper}>
                        <div className={s.change} onClick={CounterDec}>
                           -
                        </div>
                        <div className={s.count}>{counter}</div>
                        <div
                           className={s.change}
                           onClick={() => setCounter(counter + 1)}
                        >
                           +
                        </div>
                     </div>
                     <Link to="/Basket">
								<button
                        className={s.btn_order}
                        onClick={() => {
                           // setAnimation(!animation);
                           dispatch(addToBasket(state.product));
                        }}
                     >
                        заказать
                     </button>
							</Link>
                  </div>
                  <p className={s.descrip_1}>Описание</p>
                  <p className={s.art}>Артикул: {state.product.article}</p>
                  <h3 className={s.descrip}>{state.product.description}</h3>

                  <div className={s.feature}>
                     <div className={s.first_row}>
                        <div className={s.col}>
                           {state.characteristic.map((item) => {
                              return (
                                 <div className={s.charact} key={item.id}>
                                    <p className={s.name}>{item.key}</p>
                                    <p className={s.value}>{item.value}</p>
                                 </div>
                              );
                           })}
                        </div>
                     </div>

                     <div className={s.second_row}>
                        <h4>Материал</h4>
                        <p> {state.product.material.name}</p>
                     </div>
                  </div>
               </div>
            </div>
         )}

         <div className={s.present}>
            <h2 className={s.title}>Также в наличии</h2>
            <div className={s.components}>
               {catalog.length &&
                  catalog.map((value) => {
                     return (
                        <Link
                           to={`/categories`}
                           state={{ id: value.id }}
                           key={value.id}
                           className={s.item}
                        >
                           <div
                              className={s.image}
                              style={{ backgroundImage: `url(${value.image})` }}
                           ></div>
                           <p>{value.name}</p>
                        </Link>
                     );
                  })}
            </div>
         </div>

         {/* <aside className={`${animation ? s.basket_animation : s.basket} `}>
            <img
               onClick={() => setAnimation(!animation)}
               src="data:image/png;base64,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"
               alt="close"
               className={s.basket_close}
            />
            <h2 className={s.basket_h2}>Корзина</h2>
            {dataBasket.map((item) => {
               return (
                  <div className={s.preview} key={item.id}>
                     <a href='/products/LGO2-Avtobusnaya ostanovka "Siti"'>
                        <div>
                           <img
                              src={item.product.image}
                              alt="bench"
                              className={s.preview_img}
                           />
                           <p className="Component-itemInfo-0-2-40">
                              {item.name}
                           </p>
                        </div>
                     </a>
                  </div>
               );
            })}

            <Link to="/Basket">
               <button className={s.basket_button}>Посмотреть корзину</button>
            </Link>
            <div className={s.basket_form}>
               <label>
                  <p>Имя</p>
                  <input
                     type="text"
                     name="firstname"
                     required=""
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                  />
               </label>
               <label>
                  <p>Телефон</p>
                  <input
                     type="text"
                     name="phone"
                     required=""
                     value={tel}
                     onChange={(e) => setTel(e.target.value)}
                  />
               </label>
               <label>
                  <p>Электронная почта</p>
                  <input
                     type="email"
                     name="email"
                     required=""
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
               </label>
               <Link to="/Basket">
                  <button
                     className={s.basket_confirm}
                     onClick={(e) =>
                        dispatch(addCustomerData({ name, tel, email }))
                     }
                  >
                     Оформить
                  </button>
               </Link>
            </div>
         </aside> */}
      </div>
   );
};
