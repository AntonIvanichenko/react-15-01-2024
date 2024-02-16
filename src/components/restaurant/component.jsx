import classNames from "classnames";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

import styles from './styles.module.scss';

export const Restaurant = ({ restaurant, className }) => {

   const menus = restaurant.menu;
   const reviews = restaurant.reviews;

   return (
      <section className={classNames(styles.root, className)}>
         <h2 className={styles.title}>{restaurant.name}</h2>
         <div className={styles.info}>
            <h3>Меню:</h3>
            <Menu menus={menus} />
         </div>
         <div className={styles.info}>
            <h3>Отзывы:</h3>
            <Reviews reviews={reviews} />
         </div>
      </section>
   );
}

