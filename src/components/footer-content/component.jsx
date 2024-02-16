import classNames from "classnames";
import styles from "./styles.module.scss";

export const FooterContent = ({ container }) => {
   return (
      <div className={classNames(container)}>
         <h2 className={styles.footer__title}>Footer</h2>
      </div>
   );
}