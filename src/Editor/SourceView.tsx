import React, { FunctionComponent, useRef } from "react";
import { useSelector } from "react-redux";
import { getCode } from "../JavascriptVM/vmSlice";
import SyntaxHighlighter from "react-syntax-highlighter";

import "./SourceView.css";

/**
 * Read-only view for the source code generated by Blockly.
 */
export const SourceView: FunctionComponent = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const code = useSelector(getCode);

  return (
    <div
      ref={wrapperRef}
      className={"source-view"}
      title={"Generated source code is read-only"}
    >
      <SyntaxHighlighter
        language="javascript"
        showLineNumbers={true}
        customStyle={{ margin: 1 }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};