export type Mods = Record<string, string | boolean>;

export function classNames(
  cls: string,
  mods: Mods = {},
  addition: string[] = [],
): string {
  return [
    cls,
    ...addition.filter(Boolean),
    ...Object.entries(mods).filter(([_, value]) => Boolean(value)).map(([className]) => className),
  ]
    .join(' ');
}
