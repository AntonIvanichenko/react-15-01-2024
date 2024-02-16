import classNames from "classnames";
import { Dish } from "../dish/component";

import styles from "./styles.module.scss";

export const Menu = ({ menus }) => {

   return (
      <ul>
         {menus.map((dish) => {
            return (
               <li >
                  <Dish dish={dish} />
               </li>
            );
         })}
      </ul>
   );
}