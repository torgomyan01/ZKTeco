"use client";
import React, { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-javascript";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import Image from "next/image";

function PrintCode() {
  const codeRef = useRef<any>(null);
  useEffect(() => {
    Prism.highlightElement(codeRef.current);
  }, []);

  return (
    <pre className="line-numbers language-javascript">
      <Image
        src="/images/cup-max.svg"
        alt="cup-max"
        className="cup-max"
        width="146"
        height="146"
      />
      <code ref={codeRef} className="language-javascript">
        {`
  // Type some code ->

  console.log "oO08 iIlL1 g9qCGQ ~-+=>";
  // â é ù ï ø ç Ã Ē Æ œ
  
  function updateGutters(cm) {
     var gutters = cm.display.gutters,
         __specs = cm.options.gutters;

     removeChildren(gutters);

     for (var i = 0; i < specs.length; ++i) {
       var gutterClass = __specs[i];
       var gElt = gutters.appendChild(
         elt(
           "div",
           null,
           "CodeMirror-gutter " + gutterClass
         )
       );
       if (gutterClass == "CodeMirror-linenumbers") {
         cm.display.lineGutter = gElt;
         gElt.style.width = (cm.display.lineNumWidth || 1) + "px";
       }
     }
     gutters.style.display = i ? "" : "none";
     updateGutterSpace(cm);

     return false;
  }
`}
      </code>
    </pre>
  );
}

export default PrintCode;
