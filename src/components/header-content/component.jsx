import classNames from "classnames";
import styles from './styles.module.scss'

export const HeaderContent = ({ headerClass }) => {
   return (
      <div className={classNames(styles.root, headerClass)}>
         <h1 className={styles.header__title}>Restaurants</h1>
      </div>
   );
}