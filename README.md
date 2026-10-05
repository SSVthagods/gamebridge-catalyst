# GameBridge Catalyst microsite

GameBridge is a product developed under SSV Tech. This static application demo distinguishes the working game-development prototype from a proposed research adaptation.

## Structure

`dist/` is the complete deployable website: HTML, CSS, JavaScript, two inspected prototype screenshots and a sanitized evidence summary. `CURRENT_VS_PROPOSED.md` documents claim boundaries. Local authoring tools, internal evidence locators and QA captures are excluded from Git.

## Preview

Run from the repository root:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Open your loopback browser at port 4173. No dependencies, environment variables or API keys are required.

## Vercel deployment

Connect this repository to project `gamebridge-catalyst` and use production branch `main`. Root directory is the repository root; framework is Other; build and install commands are empty; output directory is `dist`. These settings are recorded in `vercel.json`. Only dist is served.

## Evidence scope

Published summaries reference historical internal prototype records, not independent accreditation or rerun tests. Research capabilities remain proposed. World 5 technical PASS remains separate from pending Game Director certification. No institutional adoption is asserted. No raw evidence, databases, runtime source or credentials are included.
