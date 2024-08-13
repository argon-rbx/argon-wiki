import { useEffect, useState } from "react"
import ContentLoader from "react-content-loader"
import Markdown from "react-markdown"

function Placeholder() {
  let globalY = 4

  function Rect(props: { w?: number; h?: number; o?: number }) {
    let w = props.w || 300
    const h = props.h || 6
    const o = props.o || 0
    const y = globalY + o

    globalY = y + h + 12

    if (w === 300) {
      w += Math.floor((Math.random() - 0.5) * 100)
    }

    return <rect y={y} width={w} height={h} rx={h === 6 ? 2 : 3} />
  }

  return (
    <ContentLoader
      speed={2}
      viewBox="0 0 420 690"
      backgroundColor="#2e2c30"
      foregroundColor="#67676f"
    >
      {/* Intro */}
      <Rect h={12} w={75} />
      <Rect w={200} />
      <Rect w={250} />
      {/* Unreleased */}
      <Rect h={12} w={80} o={12} />
      <Rect h={10} w={30} o={6} />
      <Rect />
      <Rect o={-4} />
      <Rect o={-4} />
      <Rect h={10} w={40} o={6} />
      <Rect />
      <Rect o={-4} />
      {/* V3 */}
      <Rect h={12} w={130} o={12} />
      <Rect h={10} w={50} o={6} />
      <Rect />
      <Rect h={10} w={30} o={6} />
      <Rect />
      <Rect o={-4} />
      <Rect h={10} w={40} o={6} />
      <Rect />
      {/* V2 */}
      <Rect h={12} w={130} o={12} />
      <Rect h={10} w={40} o={6} />
      <Rect />
      <Rect o={-4} />
      <Rect o={-4} />
      <Rect o={-4} />
      <Rect h={10} w={50} o={6} />
      <Rect />
      <Rect o={-4} />
      {/* V1 */}
      <Rect h={12} w={130} o={12} />
      <Rect h={10} w={30} o={6} />
      <Rect />
      <Rect o={-4} />
    </ContentLoader>
  )
}

export default function Changelog({ link }: { link: string }) {
  const [changelog, setChangelog] = useState(<Placeholder />)

  useEffect(() => {
    fetch(link)
      .then((response) => response.text())
      .then((text) => {
        text = text.substring(text.indexOf("##"))

        if (text.indexOf("###") > 20) {
          text = text.substring(text.indexOf("##", 2))
        }

        setChangelog(<Markdown>{text}</Markdown>)
      })
  }, [link])

  return changelog
}
