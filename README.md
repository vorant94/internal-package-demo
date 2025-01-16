## how does it work?

https://turbo.build/blog/you-might-not-need-typescript-project-references

## about this repo

front-end `vite`-based projects are easiest to deal with, see `web` inside this repo.

back-end is problematic, because there are different way to compile back-end code. go-to solution for new projects would
be just use `vite` on the back-end side of things as well. some of back-end frameworks even provide first-party 
integration with `vite`, see `server` inside this repo. for those that do not have first-party integration,
`vite-plugin-node` can be used, see `server-nest` inside this repo

the only concern with it is hot module replacement since `vite` is quite bad with barrel exports and with this approach
`common` looks like exactly alias to barrel export file. but having live-reload without hot module replacement is still
better than not having live-reload at all
