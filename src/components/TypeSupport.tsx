import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Changelog() {
  const [state, setState] = useState("Type support chart loading...");

  fetch("https://raw.githubusercontent.com/rojo-rbx/rbx-dom/master/README.md")
    .then((response) => response.text())
    .then((text) => {
      text = text.substring(text.indexOf("Coverage") + 10);
      text = text.substring(0, text.indexOf("##") - 2);

      text = text.replace("rbx_types", "Argon");
      text = text.replace("rbx_dom_lua", "Plugin");
      text = text.replace("rbx_xml", "XML");
      text = text.replace("rbx_binary", "Binary");

      text = text.replaceAll("✔", "✅");
      text = text.replaceAll("➖", "⏺️");
      text = text.replaceAll("N/A", "`N/A`");

      setState(text);
    });

  return <Markdown remarkPlugins={[remarkGfm]}>{state}</Markdown>;
}
