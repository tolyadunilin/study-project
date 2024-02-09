import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import cls from './ErrorContent.module.scss';

interface ErrorContentProps {
  className?: string;
}
export const ErrorContent = ({ className }: ErrorContentProps) => {
  const { t } = useTranslation();

  const handleClickButton = () => {
    window.location.reload();
  };
  console.log('work');
  return (
    <div className={classNames(cls.errorContent, {}, [className])}>
      <p>
        {t('Произошла непредвиденная ошибка')}
      </p>
      <Button onClick={handleClickButton}>
        {t('Обновить страницу')}
      </Button>
    </div>
  );
};
