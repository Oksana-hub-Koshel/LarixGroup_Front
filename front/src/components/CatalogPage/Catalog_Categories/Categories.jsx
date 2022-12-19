
import React, { useState, useEffect, useCallback } from "react";
import s from "./categories.module.css";
import { MAFbutton } from "../../ModuleComponent/MAFbutton/MAFbutton";
import { CatalogLine } from "../../ModuleComponent/CatalogLine/CatalogLine";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../redux/BasketSlice";
import { addCustomerData } from "../../redux/OrdersSlice";
import { useRef } from "react";
import { Project } from "../../ProjectPage/Project";
import { Info } from "../Product_Info/Info";

export const Categories = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const [active, setActive] = useState("Grid");
   const [animation, setAnimation] = useState(false);
   const [catList, setCatList] = useState(null);
   const [catParams, setCatParams] = useState(
      location.state ? [location.state.id] : []
   );
   const [matList, setMatList] = useState(null);
   const [matParams, setMatParams] = useState([]);
   const [products, setProducts] = useState([]);
   const [ordering, setOrdering] = useState("name");
   const [page, setPage] = useState(1);
   const [loading, setLoading] = useState(false);
   const [nextPage, setNextPage] = useState("");
   const [valueSearch, setValueSearch] = useState("");
   const [name, setName] = useState();
   const [tel, setTel] = useState();
   const [email, setEmail] = useState();
   const [sortParams, setSortParams] = useState(0);
   console.log(sortParams);
   const dispatch = useDispatch();
   const dataBasket = useSelector((state) => state.basket.dataBasket);
   const openAside = useRef(null);

   useEffect(() => {
      document.addEventListener("scroll", scrollHandler);
      return function () {
         document.removeEventListener("scroll", scrollHandler);
      };
   }, [nextPage, loading]);
   useEffect(() => {
      setPage(1);
   }, [ordering]);
   const scrollHandler = (e) => {
      if (
         e.target.documentElement.scrollHeight -
            (e.target.documentElement.scrollTop + window.innerHeight) <
            50 &&
         nextPage &&
         !loading
      ) {
         setPage(page + 1);
      }
   };
   useEffect(() => {
      axios.get("http://127.0.0.1:8000/categories/").then((response) => {
         setCatList(response.data);
      });
      axios.get("http://127.0.0.1:8000/materials/").then((response) => {
         setMatList(response.data);
      });
   }, []);
   useEffect(() => {
      setLoading(true);
      axios
         .get(`http://127.0.0.1:8000/products/${location.search}`)
         .then((response) => {
            setProducts(products.concat(response.data.results));
            setNextPage(response.data.next);
            setLoading(false);
         });
   }, [location.search]);

   const SetOptions = useCallback(
      (id, type) => {
         if (id !== undefined) {
            if (type === "cat") {
               if (catParams.indexOf(id) == -1) {
                  setCatParams([...catParams, id]);
               } else {
                  let index = catParams.indexOf(id);
                  let arr = catParams;
                  arr.splice(index, 1);
                  setCatParams([...arr]);
               }
            } else if (type === "mat") {
               if (matParams.indexOf(id) == -1) {
                  setMatParams([...matParams, id]);
               } else {
                  let index = matParams.indexOf(id);
                  let arr = matParams;
                  arr.splice(index, 1);
                  setMatParams([...arr]);
               }

            }
            setProducts([]);
            setPage(1);
        }},
        [catParams, matParams]
    );

    useEffect(() => {
        setProducts([]);
    }, [ordering]);


   useEffect(() => {
      valueSearch && setProducts([]);
      navigate(
         `/categories/?page=${page}${
            catParams.length ? `&category=${catParams.join("&category=")}` : ""
         }${
            matParams.length ? `&material=${matParams.join("&material=")}` : ""
         }${`&search=${valueSearch}`}&ordering=${ordering}`
      );
   }, [catParams, matParams, ordering, page, valueSearch]);


    return (
        <>
        <div className={s.catalog}>
            <div
                className={`${
                    animation === true ? 'categories_active' : ''
                }`}></div>
            <MAFbutton />
            <div className={s.setting}>
                <div className={s.div_li}>
                    <ul className={s.list_setting}>
                        <li>
                            <Link to="/">Главная</Link>
                        </li>
                        <li className="Component-arrow-0-2-11">→</li>
                        <li>
                            <Link to="/Catalog">Категории</Link>
                        </li>
                        <li className="Component-arrow-0-2-11">→</li>
                        <li className={s.li_color}>
                            Каталог малых архитектурных форм
                        </li>
                    </ul>
                </div>
                <CatalogLine
                    catList={catList}
                    valueSearch={valueSearch}
                    setValueSearch={setValueSearch}
                    //sortParams={sortParams}
                    setSortParams={setSortParams}
                />
                <aside ref={openAside} className={s.list_category}>
                    <div className={s.aside_setting}>
                        <div
                            className={s.list}
                            onClick={e => SetOptions(e.target.value, 'cat')}>
                            <p>Категории</p>
                            {catList &&
                                catList.map(value => {
                                    return (
                                        <div key={value.id}>
                                            <label>
                                                <input
                                                    value={value.id}
                                                    type="checkbox"
                                                />
                                                {value.name}
                                            </label>
                                        </div>
                                    );
                                })}
                        </div>
                        <div
                            className={s.list}
                            onClick={e => SetOptions(e.target.value, 'mat')}>
                            <p>Материал</p>
                            {matList &&
                                matList.map(value => {
                                    return (
                                        <div key={value.id}>
                                            <label>
                                                <input
                                                    value={value.id}
                                                    type="checkbox"
                                                />
                                                {value.name}
                                            </label>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </aside>
                <section className={s.section_setting}>
                    <div className={s.panel}>
                        <div className={s.grid}>
                            <button
                                onClick={() => setActive('Grid')}
                                className={` active_button_grid ${
                                    active === 'Grid'
                                        ? 'active_button_grid'
                                        : 'no_active_rows'
                                }`}>
                                Grid
                            </button>
                            <button
                                onClick={() => setActive('Row')}
                                className={`${
                                    active === 'Row'
                                        ? 'active_button_rows'
                                        : 'no_active_grid'
                                } `}>
                                Rows
                            </button>
                        </div>
                        <div className={s.categories}>
                            <div>Сортировать по</div>
                            <select
                                onChange={e => {
                                    setOrdering(e.target.value);
                                }}>
                                <option value={'name'}>
                                    Наименованию (по возр.)
                                </option>
                                <option value={'-name'}>
                                    Наименованию (по убыв.)
                                </option>
                                <option value={'price'}>Цене (по возр.)</option>
                                <option value={'-price'}>
                                    Цене (по убыв.)
                                </option>
                            </select>
                        </div>
                    </div>
                    {loading ? (
                        <div className="preloader">
                            <svg
                                className="preloader__image"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path
                                    fill="currentColor"
                                    d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"></path>
                            </svg>
                        </div>
                    ) : (
                        // <div className={s.product}>
                        <div
                            className={
                                active === 'Grid'
                                    ? `${s.product}`
                                    : `${s.product_line}`
                            }>
                            {products.length
                                ? products
                                      .filter(obj => {
                                          if (
                                              obj.category.type === sortParams
                                          ) {
                                              return true;
                                          } else if (sortParams === 0) {
                                              return obj;
                                          }
                                          return false;
                                      })
                                      .map(value => {
                                          console.log('products:', value);

                                          return (
                                              <div
                                                  key={value.id}
                                                  className={
                                                      active === 'Grid'
                                                          ? `${s.buy}`
                                                          : `${s.buy_line}`
                                                  }>
                                                  <Link
                                                      to={`/info/${value.id}`}
                                                      state={{
                                                          from: `${value.id}`,
                                                      }}
                                                      className={
                                                          active === 'Grid'
                                                              ? `${s.a_setting}`
                                                              : `${s.a_setting_line}`
                                                      }>
                                                      <img src={value.image} />
                                                  </Link>
                                                  <div
                                                      className={
                                                          active === 'Grid'
                                                              ? `${s.product_setting}`
                                                              : `${s.product_setting_line}`
                                                      }>
                                                      <a>
                                                          <div
                                                              className={
                                                                  s.text
                                                              }>
                                                              {value.name}
                                                          </div>
                                                          <div
                                                              className={
                                                                  active ===
                                                                  'Grid'
                                                                      ? `${s.product_descrip_none}`
                                                                      : `${s.product_descrip_block}`
                                                              }>
                                                              <p
                                                                  className={
                                                                      s.descrip_line_text
                                                                  }>
                                                                  {
                                                                      value.description
                                                                  }
                                                              </p>
                                                          </div>
                                                      </a>
                                                      {/*<div className={s.margin}>&nbsp;</div>*/}
                                                      <div
                                                          className={
                                                              active === 'Grid'
                                                                  ? `${s.button_setting}`
                                                                  : `${s.button_setting_line}`
                                                          }>
                                                          <button
                                                              onClick={() => {
                                                                  setAnimation(
                                                                      !animation,
                                                                  );
                                                                  dispatch(
                                                                      addToBasket(
                                                                          value,
                                                                      ),
                                                                  );
                                                              }}>
                                                              <a>Заказать</a>
                                                          </button>
                                                      </div>
                                                  </div>
                                              </div>
                                          );
                                      })
                                : 'Товаров нет'}
                        </div>
                    )}
                </section>
            </div>

            <CatalogLine
               catList={catList}
               valueSearch={valueSearch}
               setValueSearch={setValueSearch}
               //sortParams={sortParams}
               setSortParams={setSortParams}
            />
            <aside ref={openAside} className={s.list_category}>
               <div className={s.aside_setting}>
                  <div
                     className={s.list}
                     onClick={(e) => SetOptions(e.target.value, "cat")}
                  >
                     <p>Категории</p>
                     {catList &&
                        catList.map((value) => {
                           return (
                              <div key={value.id}>
                                 <label>
                                    <input value={value.id} type="checkbox" />
                                    {value.name}
                                 </label>
                              </div>
                           );
                        })}
                  </div>
                  <div
                     className={s.list}
                     onClick={(e) => SetOptions(e.target.value, "mat")}
                  >
                     <p>Материал</p>
                     {matList &&
                        matList.map((value) => {
                           return (
                              <div key={value.id}>
                                 <label>
                                    <input value={value.id} type="checkbox" />
                                    {value.name}
                                 </label>
                              </div>
                           );
                        })}
                  </div>
               </div>
            </aside>
            <section className={s.section_setting}>
               <div className={s.panel}>
                  <div className={s.grid}>
                     <button
                        onClick={() => setActive("Grid")}
                        className={` active_button_grid ${
                           active === "Grid"
                              ? "active_button_grid"
                              : "no_active_rows"
                        }`}
                     >
                        Grid
                     </button>
                     <button
                        onClick={() => setActive("Row")}
                        className={`${
                           active === "Row"
                              ? "active_button_rows"
                              : "no_active_grid"
                        } `}
                     >
                        Rows
                     </button>
                  </div>
                  <div className={s.categories}>
                     <div>Сортировать по</div>
                     <select
                        onChange={(e) => {
                           setOrdering(e.target.value);
                        }}
                     >
                        <option value={"name"}>Наименованию (по возр.)</option>
                        <option value={"-name"}>Наименованию (по убыв.)</option>
                        <option value={"price"}>Цене (по возр.)</option>
                        <option value={"-price"}>Цене (по убыв.)</option>
                     </select>
                  </div>
               </div>
               {loading ? (
                  <div className="preloader">
                     <svg
                        className="preloader__image"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                     >
                        <path
                           fill="currentColor"
                           d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"
                        ></path>
                     </svg>
                  </div>
               ) : (
                  // <div className={s.product}>
                  <div
                     className={
                        active === "Grid" ? `${s.product}` : `${s.product_line}`
                     }
                  >
                     {products.length
                        ? products
                             .filter((obj) => {
                                if (sortParams === 0) {
                                   return obj
                                } else if (obj.category.type === sortParams) {
											return true;
										}
                                return false;
                             })
                             .map((value) => {
                                console.log("products:", value);

                                return (
                                   <div
                                      key={value.id}
                                      className={
                                         active === "Grid"
                                            ? `${s.buy}`
                                            : `${s.buy_line}`
                                      }
                                   >
                                      <Link
                                         to={`/info/${value.id}`}
                                         state={{ from: `${value.id}` }}
                                         className={
                                            active === "Grid"
                                               ? `${s.a_setting}`
                                               : `${s.a_setting_line}`
                                         }
                                      >
                                         <img src={value.image} />
                                      </Link>
                                      <div
                                         className={
                                            active === "Grid"
                                               ? `${s.product_setting}`
                                               : `${s.product_setting_line}`
                                         }
                                      >
                                         <a>
                                            <div className={s.text}>
                                               {value.name}
                                            </div>
                                            <div
                                               className={
                                                  active === "Grid"
                                                     ? `${s.product_descrip_none}`
                                                     : `${s.product_descrip_block}`
                                               }
                                            >
                                               <p
                                                  className={
                                                     s.descrip_line_text
                                                  }
                                               >
                                                  {value.description}
                                               </p>
                                            </div>
                                         </a>
                                         {/*<div className={s.margin}>&nbsp;</div>*/}
                                         <div
                                            className={
                                               active === "Grid"
                                                  ? `${s.button_setting}`
                                                  : `${s.button_setting_line}`
                                            }
                                         >
                                            <button
                                               onClick={() => {
                                                  setAnimation(!animation);
                                                  dispatch(addToBasket(value));
                                               }}
                                            >
                                               <a>Заказать</a>
                                            </button>
                                         </div>
                                      </div>
                                   </div>
                                );
                             })
                        : "Товаров нет"}
                  </div>
               )}
            </section>
         </div>

         <aside className={`${animation ? s.basket_animation : s.basket} `}>
            <img
               onClick={() => setAnimation(!animation)}
               src="data:image/png;base64,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"
               alt="close"
               className={s.basket_close}
            />
            <h2 className={s.basket_h2}>Корзина</h2>
            {dataBasket.map((item) => {
               return (
                  <div className={s.preview}>
                     <a href='/products/LGO2-Avtobusnaya ostanovka "Siti"'>
                        <div>
                           <img
                              src={item.image}
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
               {/* <OrderForm /> */}
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
         </aside>

</>
   );

};
