import { useState } from "react";

export const Input = () => {
  const [state, setState] = useState<any | null>();
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <input type="text" value={state} />
    </>
  );
};
