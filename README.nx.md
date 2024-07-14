# Create Nx Monorepo Next PreSet

`npm install -g nx`
`npx create-nx-workspace@latest --preset=next`

# Create React App

`nx g @nx/react:app my-react-app`

# Create Next App

`nx g @nx/next:app my-next-app`

# Create ui-shared lib and shared-component

`nx g @nrwl/react:lib ui-shared`
`nx g @nrwl/react:component ui-shared/src/my-shared-component --project=ui-shared --export`

# Add Story Book Nx workspace

????

# husky

`npx husky-init && npm install`
`yarn install --dev lint-staged`

# .lintstagedrc config

<!-- {
"*.ts": ["nx affected:lint --fix --files"],
"*": ["npx nx format:write --files"],
"*.scss": ["npx stylelint --fix"]
} -->

# precommit sample

`npx husky add .husky/pre-commit 'npx lint-staged –relative'`

<!-- #!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged --relative  -->
<!-- ---------------------------------- -->

## Extend (not for UI library)

# To generate a new library run

`nx g @nx/next:lib my-next-lib`

# for remove workspace

`nx g @nrwl/workspace:remove --project=my-next-lib`

#### ----------------------RUN Scripts--------------------

# React

`nx test my-next-app`
`nx test my-next-lib`
`nx build my-react-app`

# Next

`nx build my-next-app`
`nx start my-next-app`

# Remove Project

`nx g @nrwl/workspace:remove --projectName my-project`
`nx g @nrwl/workspace:remove --project ui-shared`

`nx show project NexUI --web`
