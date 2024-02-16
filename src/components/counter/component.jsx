import { Button } from "../button/component";

import styles from "./styles.module.scss";

export const Counter = ({ value, min = 0, max = 5, onChenge }) => {
   return (
      <div>
         <Button onClick={() => { onChenge(value - 1) }} disabled={value == min} buttonView="countButton">-</Button>
         {value}
         <Button onClick={() => { onChenge(value + 1) }} disabled={value == max} buttonView="countButton">+</Button>
      </div>
   );
}