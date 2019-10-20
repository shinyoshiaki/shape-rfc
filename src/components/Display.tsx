import React, { FC, useMemo } from "react";

import { shaper } from "../domain/shaper";

const Display: FC<{ text: string }> = ({ text }) => {
  const shaped = useMemo(() => shaper(text), [text]);

  return (
    <textarea value={shaped} readOnly style={{ width: "100%", height: 400 }} />
  );
};

export default Display;
