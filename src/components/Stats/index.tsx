import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import AnimatedNumber from "react-animated-numbers";
import { useState, useEffect } from "react";

type StatItem = {
  id: string;
  title: string;
  value: number;
};

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
    id: "projects_built",
    title: "Projects Built",
    value: 23053,
  },
  {
    id: "sessions_started",
    title: "Sessions Started",
    value: 26366,
  },
  {
    id: "temp",
    title: "One more",
    value: 69420,
  },
];

function Stat({ title, value }: { title: string; value: any }) {
  return (
    <div className={clsx("col col--4")}>
      <div>
        <AnimatedNumber
          includeComma
          transitions={(index) => ({
            type: "spring",
            duration: index / 2,
          })}
          animateToNumber={value}
          fontStyle={{
            fontSize: 52,
            fontWeight: "bold",
            color: "#8278e6",
          }}
        />
      </div>
      <div className="padding-horiz--md padding-bottom--md">
        <Heading as="h2">{title}</Heading>
      </div>
    </div>
  );
}

export default function Stats(): JSX.Element {
  let [stats, setStats] = useState(
    Object.fromEntries(StatList.map((item) => [item.id, item.value]))
  );

  useEffect(() => {
    fetch(`https://api.argon.wiki/pull`, {
      cache: "force-cache",
    })
      .then((response) => {
        response
          .json()
          .then((data) => {
            setStats(data);
          })
          .catch(() => {
            console.warn("Failed to parse stats");
          });
      })
      .catch(() => {
        console.warn("Failed to fetch stats - running in development mode");
      });

    return () => {};
  }, []);

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {StatList.map((props, idx) => (
            <Stat key={idx} title={props.title} value={stats[props.id]} />
          ))}
        </div>
      </div>
    </section>
  );
}
