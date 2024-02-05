export type Mods = Record<string, string | boolean>;

export function classNames(
  cls: string,
  mods: Mods,
  addition: string[]
): string {
  return [
    cls,
    ...addition,
    ...Object.entries(mods).filter(([cls, value]) => Boolean(value)).map(([cls]) => cls)
  ]
    .join(" ");
}
