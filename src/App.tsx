import React, { FC, useEffect, useRef, useState } from "react";

import Display from "./components/Display";
import styled from "styled-components";
import useInput from "./hooks/useInput";

const App: FC = () => {
  const [text, setText] = useInput();

  return (
    <div>
      <Text onChange={setText} />
      <Display text={text} />
    </div>
  );
};

const Text = styled.textarea`
  width: 100%;
  height: 400px;
`;

export default App;
