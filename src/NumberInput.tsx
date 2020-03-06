import * as React from "react";
import { emitEvent } from "./utils";

export interface NumberInputProps {
  value?: number;
  onChange?: (value: number | undefined) => void;
}

export const NumberInput: React.FC<NumberInputProps> = ({
  value,
  onChange
}) => {
  const handleAdd = () => {
    emitEvent(onChange, (value || 0) + 1);
  };

  const handleSub = () => {
    emitEvent(onChange, (value || 0) - 1);
  };

  return (
    <div>
      <input type="text" value={`${value || ""}`} />
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
    </div>
  );
};
