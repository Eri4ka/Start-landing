import authTextImg from 'assets/images/authText.png';
import blueButton from 'assets/images/blueButton.png';
import cloudImg from 'assets/images/cloud.png';
import cloudText from 'assets/images/cloudText.png';
import logoImg from 'assets/images/logo.png';
import NoAuthTextImg from 'assets/images/noAuthText.png';
import pinkButton from 'assets/images/pinkButton.png';
import cl from 'classnames';

import styles from './Main.module.scss';

export const Main = () => {
  return (
    <main className={styles.root}>
      <div className={styles.wrapper}>
        <picture className={styles.logo}>
          <source srcSet={logoImg} type='image/png' />
          <img className={styles.image} src={logoImg} alt='START логотип' />
        </picture>
        <div className={styles.cloud}>
          <picture>
            <source srcSet={cloudImg} type='image/png' />
            <img className={'center'} src={cloudImg} alt='Облако' />
          </picture>
          <img className={cl(styles.cloud__text, 'center')} src={cloudText} alt='Уже зарегистрированы на START?' />
        </div>
        <div className={styles.buttons}>
          <button className={styles.buttons__item}>
            <img className={styles.image} src={pinkButton} alt='Кнопка авторизации' />
            <img className={cl(styles.buttons__text, 'center')} src={authTextImg} alt='Авторизоваться' />
          </button>
          <button className={styles.buttons__item}>
            <img className={styles.image} src={blueButton} alt='Войти' />
            <img className={cl(styles.buttons__text, 'center')} src={NoAuthTextImg} alt='Продолжить без авторизации' />
          </button>
        </div>
      </div>
    </main>
  );
};
