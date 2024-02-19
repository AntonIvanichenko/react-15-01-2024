import classNames from "classnames";
import { NavTabs } from "../nav-tabs/component";
import styles from "./styles.module.scss";

export const RestaurantNav = ({ restaurants, setId, currentRestaurant }) => {
   return (
      <nav className={classNames(styles.root)}>
         <NavTabs container={classNames(styles.container)} restaurants={restaurants} setId={setId} currentRestaurant={currentRestaurant} />
      </nav>
   );
}