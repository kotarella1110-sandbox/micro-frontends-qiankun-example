import { useEffect, useState } from "react";
import { Props } from "../App";

export const Shared = (props: Props) => {
  const [text, setText] = useState("");

  useEffect(() => {
    props.actions.onGlobalStateChange((state) => {
      setText(state.shared);
    }, true);
  }, []);

  return (
    <>
      <h1>Shared</h1>
      <div>text: {text}</div>
    </>
  );
};
