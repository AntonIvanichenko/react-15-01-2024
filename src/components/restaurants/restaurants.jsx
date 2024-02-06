import { Restaurant } from "../restaurant/component";

import styles from "./styles.module.scss";

export const Restaurants = ({ restaurants }) => {
   return (
      <section>
         <h1 className={styles.title}>Рестораны:</h1>
         {restaurants.map((restaurant) => {
            return <Restaurant restaurant={restaurant} />
         })}
      </section>
   );
}