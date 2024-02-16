import classNames from "classnames";
import styles from "./styles.module.scss";

export const Button = ({ children, onClick, disabled, buttonView }) => {

   return (
      <button onClick={onClick} className={classNames(styles.root, styles[buttonView])} disabled={disabled}>{children}</button>
   );
}