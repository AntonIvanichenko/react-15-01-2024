import { useState } from "react";
import { RestaurantNav } from "../../components/reataurants-nav/component";
import { Restaurant } from "../../components/restaurant/component";

import styles from "./styles.module.scss";

export const RestaurantsPage = ({ restaurants }) => {
   const [id, setId] = useState(restaurants[0].id);

   function getRestaurant() {
      let currentRestaurant;

      restaurants.forEach(restaurant => {

         if (restaurant.id === id) currentRestaurant = restaurant;
      });

      return currentRestaurant;
   }

   return (
      <>
         <RestaurantNav restaurants={restaurants} setId={setId} currentRestaurant={getRestaurant()} />
         <Restaurant className={styles.container} restaurant={getRestaurant()} />
      </>
   );
}