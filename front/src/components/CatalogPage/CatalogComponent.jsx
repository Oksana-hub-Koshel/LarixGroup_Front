import React, {useEffect, useState} from 'react';
import s from './Catalog.module.css';
import {MAFbutton} from '../ModuleComponent/MAFbutton/MAFbutton';
import {CatalogLine} from '../ModuleComponent/CatalogLine/CatalogLine';
import {Link} from 'react-router-dom';
import axios from 'axios';

export const Catalog = () => {

   const [catalog, setCatalog] = useState([]);
   const [sortParams, setSortParams] = useState(0);
   useEffect(() => {
      axios
         .get("http://127.0.0.1:8000/categories/")
         .then((response) => setCatalog(response.data));
   }, []);

   return (
      <div className={s.catalog}>
         <MAFbutton />
         <div className={s.div_li}>
            <ul className={s.list_setting}>
               <li>
                  <Link to="/">Главная</Link>
               </li>
               <li className="Component-arrow-0-2-11">→</li>
               <li className={s.li_color}>Каталог малых архитектурных форм</li>
            </ul>
         </div>
         <CatalogLine setSortParams={setSortParams}/>
         <div className={s.components}>
            {catalog.length &&
               catalog.filter((obj) => {
                  if (obj.type === sortParams) {
                   return true;
                } else if (sortParams === 0) {
                  return obj
                }
                  return false;
               }).map((value) => {
                  console.log(value)
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
   );
};
