/**
 * 获取所有的参数的类型
 */
export type ArgsTypesOf<T> = T extends (...args: infer U) => infer R ? U : void;

/**
 * 触发一个事件
 */
export function emitEvent<
  T extends ((...args: any[]) => void) | undefined | null
>(eventCallback: T, ...args: ArgsTypesOf<Exclude<T, null | undefined>>): void {
  if (eventCallback && typeof eventCallback === "function") {
    eventCallback(...args);
  }
}
