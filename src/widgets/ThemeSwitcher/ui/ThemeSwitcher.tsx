import { Theme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import LightTheme from "shared/assets/icons/theme-light.svg";
import DarkTheme from "shared/assets/icons/theme-dark.svg";
import Button from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, changeTheme } = useTheme();

  return (
    <Button
      onClick={changeTheme}
    >
      {theme === Theme.DARK ? <DarkTheme /> : <LightTheme />}
    </Button>
  );
};

export default ThemeSwitcher;
