import * as React from "react";
import { NumberInput } from "./NumberInput";

export default function App() {
  const [value, setValue] = React.useState<number | undefined>(0);

  return (
    <div className="App">
      <NumberInput value={value} onChange={setValue} />
    </div>
  );
}
