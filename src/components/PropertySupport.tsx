import { useState } from "react"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"

const coverage: string = require("!!raw-loader!./PropertyCoverage.md")?.default

export default function PropertySupport({ withLinks }: { withLinks: boolean }) {
  const [state, setState] = useState(coverage)

  fetch("https://raw.githubusercontent.com/argon-rbx/rbx-dom/master/README.md")
    .then((response) => response.text())
    .then((text) => {
      text = text.substring(text.indexOf("Coverage") + 10)
      text = text.substring(0, text.indexOf("##") - 2)

      text = text.replace("rbx_types", "CLI")
      text = text.replace("rbx_dom_lua", "Plugin")
      text = text.replace("rbx_xml", "XML")
      text = text.replace("rbx_binary", "Binary")

      if (withLinks) {
        for (const line of text.split("\n")) {
          let property = line.substring(line.indexOf("| ") + 2)
          property = property.substring(0, property.indexOf(" |"))
          property = property.trimEnd()

          let link = `| [${property}](#${property.toLocaleLowerCase()})`

          if (coverage.includes(link)) {
            text = text.replace("| " + property, link)
          }
        }
      }

      setState(text)
    })

  return <Markdown remarkPlugins={[remarkGfm]}>{state}</Markdown>
}
