import { HeaderContent } from '../header-content/component';

import classNames from 'classnames';
import styles from './styles.module.scss';

export const Header = () => {
   return (
      <header className={classNames(styles.root)}>
         <HeaderContent headerClass={classNames(styles.container)} />
      </header>)
};