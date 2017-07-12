<br />
<div align="center"><H1>React-Boilerplate-Testing</H1></div>
<div align="left">This project is a testing ground to learn / work with React.js, Redux, Babel, redux-saga, react-router, Offline First, etc.</div>

## Quick start

1. Clone this repo using `git clone https://github.com/Jonathan-Steinmann/react-boilerplate-testing.git`
2. Move to the appropriate directory: `cd react-boilerplate-testing`.  

### Set up (local)

  1. Install Node

### Set up (Docker)

  1. Install Docker
  2. `$ dev-scripts/start_env.sh`
  3. `$ dev-scripts/ssh_env.sh`
    
You are now in a shell in the Docker container. Proceed to the application specific setup section.

### Set up (application specific)

    $ npm install
    $ npm run build:dll
    $ npm run start

Visit http://localhost:3001

## Reference

Here is a <a href="https://vimeo.com/168648012">video</a> on how to structure your React.js apps with scalability in mind. It provides rationale for the majority of boilerplate's design decisions.
<br />
Here is a <a href="https://www.smashingmagazine.com/2016/09/how-to-scale-react-applications/">blog post</a> that is also interesting to review.

## Documentation

- [**The Hitchhikers Guide to `react-boilerplate`**](docs/general/introduction.md): An introduction for newcomers to this boilerplate.
- [Overview](docs/general): A short overview of the included tools
- [**Commands**](docs/general/commands.md): Getting the most out of this boilerplate
- [Testing](docs/testing): How to work with the built-in test harness
- [Styling](docs/css): How to work with the CSS tooling
- [Your app](docs/js): Supercharging your app with Routing, Redux, simple
  asynchronicity helpers, etc.
