import clsx from "clsx"
import Heading from "@theme/Heading"
import styles from "./styles.module.css"

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<"svg">>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: "Professional",
    Svg: require("@site/static/img/icons/professional.svg").default,
    description: (
      <>
        Enables the use of external editors, tools and version control systems
        available on the Internet
      </>
    ),
  },
  {
    title: "Feature Rich",
    Svg: require("@site/static/img/icons/feature-rich.svg").default,
    description: (
      <>
        Comes with many useful features that help manage project, maintain code
        and manipulate instances
      </>
    ),
  },
  {
    title: "Customizable",
    Svg: require("@site/static/img/icons/customizable.svg").default,
    description: (
      <>
        Extremely customizable by command flags as well as detailed global
        config and project templates
      </>
    ),
  },
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/icons/easy-to-use.svg").default,
    description: (
      <>
        Good for beginners as VS Code extension has graphical interface and
        requires one click to setup
      </>
    ),
  },
  {
    title: "Modular",
    Svg: require("@site/static/img/icons/modular.svg").default,
    description: (
      <>
        Greatly integrates with other Roblox tools such as: Wally, StyLua,
        selene and roblox-ts
      </>
    ),
  },
  {
    title: "Fast and Safe",
    Svg: require("@site/static/img/icons/fast-and-safe.svg").default,
    description: (
      <>Built with Rust and MessagePack, major changes need user confirmation</>
    ),
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function Features(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
