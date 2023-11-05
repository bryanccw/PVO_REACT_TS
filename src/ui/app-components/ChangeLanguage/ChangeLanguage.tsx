import React from 'react';
import { useTranslation } from 'react-i18next';
import i18nConfig from '../../i18n/config';
import styles from './ChangeLanguage.module.scss';

export const ChangeLanguage = () => {
  const { i18n } = useTranslation();
  const langList = Object.keys(i18nConfig?.options?.resources ?? {});
  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang: string = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem('locale', lang);
  };

  return (
    <div className={styles['framework-change-language']}>
      {i18nConfig?.options?.resources && (
        <select onChange={changeLanguage} value={i18nConfig?.language}>
          {i18nConfig &&
            langList.map((locale: string, i: number) => {
              const item = i18nConfig.options?.resources?.[locale].name;
              const optionChildren = typeof item === 'string' ? item : 'Language not defined';
              return (
                <option key={i} value={locale}>
                  {optionChildren}
                </option>
              );
            })}
        </select>
      )}
    </div>
  );
};
