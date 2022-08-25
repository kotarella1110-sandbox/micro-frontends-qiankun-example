import { useEffect, useState } from "react";
import { Props } from "../App";

export const Shared = (props: Props) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    props.actions.onGlobalStateChange((state) => {
      setValue(state.shared);
    }, true);
  }, []);

  return (
    <>
      <h1>Shared</h1>
      <input
        onChange={(e) => {
          props.actions.setGlobalState({
            shared: e.target.value,
          });
        }}
        value={value}
      />
    </>
  );
};
