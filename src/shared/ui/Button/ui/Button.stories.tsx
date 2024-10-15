import { Button, ThemeButton } from './Button';
import 'app/styles/index.scss';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Clear = {
  args: {
    children: 'test',
    theme: ThemeButton.CLEAR,
  },
};

export const Outline = {
  args: {
    children: 'test',
    theme: ThemeButton.OUTLINE,
  },
};
