import { FooterContent } from '../footer-content/component';

import classNames from 'classnames';
import styles from './stales.module.scss';

export const Footer = () => {
   return (
      <footer className={styles.root}>
         <FooterContent container={classNames(styles.container)} />
      </footer>
   );
}