import { Button } from "../button/component";
import classNames from "classnames";
import styles from "./styles.module.scss";

export const NavTabs = ({ restaurants, container, setId, currentRestaurant }) => {
   return (
      <ul className={classNames(styles.root, container)}>
         {restaurants.map((restaurant) => {
            return (
               <li>
                  <Button onClick={() => { setId(restaurant.id) }} disabled={currentRestaurant.id == restaurant.id} buttonView="navMenuButton">{restaurant.name}</Button>
               </li>
            );
         })}
      </ul>
   );
} 