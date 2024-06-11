import { useState } from "react"
import Markdown from "react-markdown"

const DUMMY_CHANGELOG = `# Changelog

Changelog is loading... This is a placeholder!

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), that adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased](https://github.com/argon-rbx/argon/compare/2.0.0-pre5...HEAD)

### Added

- Full two-way sync
- Support for \`legacy_scripts\` and \`keep_unknowns\` fields
- Ability to re-release the same version when needed
- Virtual file system for testing
- \`plugin\` command now fallbacks to bundled binary if user has no internet connection
- \`update\` command that updates both CLI and plugin regardless of global configuration
- Community stats tracking
- Helper scripts

### Improved

- Instance source tracking and meta management
- Standard file system with additional methods
- Argon network protocol now uses MessagePack instead of JSON
- Sessions that crashed now get removed from \`sessions.toml\` file

### Fixed

- \`.src\` and \`init\` files in sourcemap generation
- \`Open In Editor\` now opens folders only if instance has no other sources
- Plugin now installs and updates correctly on Windows

## [2.0.0-pre5](https://github.com/argon-rbx/argon/compare/2.0.0-pre4...2.0.0-pre5) - 2024-03-22

### Improved

- \`plugin\` command now creates directory if the provided one does not exist
- Argon plugin gets installed automatically at the first Argon launch
- Config is now only read once`

export default function Changelog({ link }: { link: string }) {
  const [state, setState] = useState(DUMMY_CHANGELOG)

  fetch(link)
    .then((response) => response.text())
    .then((text) => setState(text))

  return <Markdown>{state}</Markdown>
}
