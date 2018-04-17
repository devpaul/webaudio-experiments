# Monorepo project starter

This project uses [lerna](https://github.com/lerna/lerna) to manage workflow between projects.

## Quick Start

`lerna bootstrap`

Lerna [bootstrap](https://github.com/lerna/lerna#bootstrap) will install all of your project dependencies and will
 link together Lerna packages that are dependencies of one-another 

### Building

`lerna run build`

Builds application packages locally

### Prettify

`lerna run pretty`

pretties up all of the source code according to prettier rules

### Test

`lerna run test`

TODO tests application packages

`lerna run ci`

TODO runs the full suite of tests against packages
