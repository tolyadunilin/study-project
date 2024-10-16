import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (

    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink
          to="/"
          className={cls.mainLink}
          theme={AppLinkTheme.SECONDARY}
        >
          {t('Главная')}
        </AppLink>
        <AppLink to="/about">
          {t('О сайте')}
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
