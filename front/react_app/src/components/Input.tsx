import { useState } from "react";

export const Input = () => {
  const [state, setState] = useState();
  return <input type="text" value={state} />;
};
