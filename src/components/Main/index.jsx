import cl from 'classnames';
import { motion, useScroll, useTransform } from 'framer-motion';

import authTextImg from 'assets/images/authText.png';
import blueButton from 'assets/images/blueButton.png';
import cloudImg from 'assets/images/cloud.png';
import cloudText from 'assets/images/cloudText.png';
import logoImg from 'assets/images/logo.png';
import noAuthTextImg from 'assets/images/noAuthText.png';
import pinkButton from 'assets/images/pinkButton.png';

import styles from './Main.module.scss';

export const Main = () => {
  const { scrollYProgress } = useScroll();

  const logoPosition = useTransform(scrollYProgress, [0, 0.2], ['40%', '0%']);
  const cloudOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const cloudTxtOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const btnsPosition = useTransform(scrollYProgress, [0.6, 0.8], ['50%', '0%']);
  const btnsTxtOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  return (
    <main className={styles.root}>
      <div className={styles.wrapper}>
        <motion.picture className={styles.logo} style={{ top: logoPosition }}>
          <source srcSet={logoImg} type='image/png' />
          <img className={styles.image} src={logoImg} alt='START логотип' />
        </motion.picture>
        <motion.div className={styles.cloud} style={{ opacity: cloudOpacity }}>
          <picture>
            <source srcSet={cloudImg} type='image/png' />
            <img className={'center'} src={cloudImg} alt='Облако' />
          </picture>
          <motion.img
            style={{ opacity: cloudTxtOpacity }}
            className={cl(styles.cloud__text, 'center')}
            src={cloudText}
            alt='Уже зарегистрированы на START?'
          />
        </motion.div>
        <motion.div style={{ top: btnsPosition }} className={styles.buttons}>
          <button className={styles.buttons__item}>
            <img className={styles.image} src={pinkButton} alt='Кнопка авторизации' />
            <motion.img
              style={{ opacity: btnsTxtOpacity }}
              className={cl(styles.buttons__text, 'center')}
              src={authTextImg}
              alt='Авторизоваться'
            />
          </button>
          <button className={styles.buttons__item}>
            <img className={styles.image} src={blueButton} alt='Войти' />
            <motion.img
              style={{ opacity: btnsTxtOpacity }}
              className={cl(styles.buttons__text, 'center')}
              src={noAuthTextImg}
              alt='Продолжить без авторизации'
            />
          </button>
        </motion.div>
      </div>
    </main>
  );
};
