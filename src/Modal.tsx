import * as React from "react";
import { emitEvent } from "./utils";

export interface ModalProps {
  onClose?: () => void; // 0 参数的
  onVisibleChange?: (visible: boolean) => void; // 1 个参数的
  onFooEvent?: (a: number, b: string, c: Date) => void; // 多个参数的
}

export const Modal: React.FC<ModalProps> = ({
  onClose,
  onVisibleChange,
  onFooEvent
}) => {
  // 代码仅为演示 emitEvent 用，别深究为啥有了 onClose 还要有 onVisibleChange
  const handleCloseBtnClick = () => {
    // 0 个参数的:
    emitEvent(onClose);
    // 1 个参数的:
    emitEvent(onVisibleChange, true);
    // 更多参数的：
    emitEvent(onFooEvent, 1, "2", new Date());
  };

  return <div onClick={handleCloseBtnClick} />;
};
