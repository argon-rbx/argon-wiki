import clsx from "clsx"
import Heading from "@theme/Heading"
import styles from "./styles.module.css"
import SlotCounter from "react-slot-counter"
import { useState, useEffect } from "react"
import formatNumber from "@site/src/util/formatNumber"

type StatItem = {
  id: string
  title: string
  value: number
}

const StatList: StatItem[] = [
  {
    id: "hours_used",
    title: "Hours Used",
    value: 65492,
  },
  {
    id: "files_synced",
    title: "Files Synced",
    value: 1133945,
  },
  {
    id: "lines_synced",
    title: "Lines Synced",
    value: 281466776,
  },
  {
    id: "projects_created",
    title: "Projects Created",
    value: 1234,
  },
  {
    id: "projects_built",
    title: "Projects Built",
    value: 23053,
  },
  {
    id: "sessions_started",
    title: "Sessions Started",
    value: 26366,
  },
]

function Stat({ title, value }: { title: string; value: any }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <SlotCounter
          containerClassName={styles.number}
          value={formatNumber(value)}
        />
      </div>
      <div className="text--center padding-horiz--md padding-bottom--md">
        <Heading as="h2">{title}</Heading>
      </div>
    </div>
  )
}

export default function Stats(): JSX.Element {
  let [stats, setStats] = useState(
    Object.fromEntries(StatList.map((item) => [item.id, item.value])),
  )

  useEffect(() => {
    fetch("https://api.argon.wiki/pull")
      .then((response) => {
        response
          .json()
          .then((data) => {
            setStats(data)
          })
          .catch(() => {
            console.warn("Failed to parse stats")
          })
      })
      .catch(() => {
        console.warn("Failed to fetch stats - running in development mode")
      })

    return () => {}
  }, [])

  return (
    <section className={styles.stats}>
      <div className="container">
        <div className="row">
          {StatList.map((props, idx) => (
            <Stat key={idx} title={props.title} value={stats[props.id]} />
          ))}

          <i className={styles.note}>
            These stats are collected 100% anonymously. You can opt out
            completely by disabling{" "}
            <a href="/docs/configuration#global-config">share_stats</a> setting.
            The server backend is open source and can be seen{" "}
            <a href="https://github.com/argon-rbx/stats-backend">here</a>.
          </i>
        </div>
      </div>
    </section>
  )
}
