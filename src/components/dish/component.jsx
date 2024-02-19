import classNames from "classnames";
import styles from "./styles.module.scss"

import { useState } from "react";
import { Counter } from "../counter/component";


export const Dish = ({ dish }) => {

   const [amount, setAmount] = useState(0);

   return (
      <div className={classNames(styles.root)}>
         <h4 className={classNames(styles.dish__title)}>{dish.name}</h4>
         <Counter value={amount} onChenge={setAmount} />
      </div>
   );
}