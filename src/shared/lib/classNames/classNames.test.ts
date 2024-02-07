import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first parametr', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional parametr', () => {
    const returnValue = 'someClass class-1 class-2';
    expect(classNames('someClass', {}, ['class-1', 'class-2'])).toBe(returnValue);
  });

  test('with mods parametr', () => {
    const returnValue = 'someClass class_1';
    expect(classNames('someClass', { class_1: true, class_2: false }, [])).toBe(returnValue);
  });

  test('with mods and addition parametrs', () => {
    const returnValue = 'someClass hover selected class_1 class_2';
    expect(classNames('someClass', { class_1: true, class_2: true }, ['hover', 'selected'])).toBe(returnValue);
  });

  test('with mods undefined', () => {
    const returnValue = 'someClass hover selected class_1';
    expect(classNames('someClass', { class_1: true, class_2: undefined }, ['hover', 'selected'])).toBe(returnValue);
  });
});
