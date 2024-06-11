import clsx from "clsx"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import { useColorMode } from "@docusaurus/theme-common"
import BrowserOnly from "@docusaurus/BrowserOnly"
import useBaseUrl from "@docusaurus/useBaseUrl"
import { useState } from "react"
import Layout from "@theme/Layout"
import Heading from "@theme/Heading"
import ReactPlayer from "react-player"
import { OnProgressProps } from "react-player/base"
import useWindowDimensions from "../util/windowDimensions"

import Features from "../components/Features"
import Stats from "../components/Stats"

import Banner from "@site/static/img/banner.svg"
import styles from "./index.module.css"

function Header() {
  const { siteConfig } = useDocusaurusContext()
  const { colorMode } = useColorMode()

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <BrowserOnly>
        {() => {
          const { width } = useWindowDimensions()
          const [loaded, setLoaded] = useState(false)

          let player: ReactPlayer

          function onProgress(state: OnProgressProps) {
            if (state.playedSeconds >= 73) {
              player.seekTo(0)
            } else if (!loaded && state.playedSeconds > 0) {
              setLoaded(true)
            }
          }

          return (
            <>
              <ReactPlayer
                className={styles.player}
                ref={(ref) => (player = ref)}
                url={"https://www.youtube.com/watch?v=eAvXhNlO-rA"}
                playing={true}
                muted={true}
                loop={true}
                width={Math.max(width, 600)}
                height={Math.max(width, 600)}
                onProgress={onProgress}
              />

              <div
                className={styles.fakePlayer}
                style={{
                  display: loaded ? "none" : "block",
                }}
              />

              <div
                className={styles.dimmer}
                style={{
                  background: colorMode === "dark" ? "black" : "white",
                }}
              />
            </>
          )
        }}
      </BrowserOnly>

      <div className={clsx("container", styles.container)}>
        <Heading as="h1" className="hero__title">
          <Banner className={styles.banner} />
        </Heading>

        <BrowserOnly>
          {() => (
            <p
              className="hero__subtitle"
              style={{
                color: colorMode == "dark" ? "white" : "black",
              }}
            >
              {siteConfig.tagline}
            </p>
          )}
        </BrowserOnly>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Learn
          </Link>

          <Link
            className={clsx(
              "button button--primary button--lg",
              styles.download,
            )}
            to="https://github.com/argon-rbx/argon/releases/latest"
          >
            Download
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Home"
      description="Argon - full featured tool for Roblox development"
    >
      <Header />

      <main>
        <Features />
        <Stats />
      </main>
    </Layout>
  )
}
