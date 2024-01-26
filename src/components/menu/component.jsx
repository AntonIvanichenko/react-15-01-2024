import { Dish } from "../dish/component";

export const Menu = ({ menus }) => {
   return (
      <ul>
         {menus.map((dish) => {
            return (
               <li>
                  <Dish dish={dish} />
               </li>
            );
         })}
      </ul>
   );
}