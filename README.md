<br />
<div align="center"><H1>React-Boilerplate-Testing</H1></div>
<div align="left">This project is a testing ground to learn / work with React.js, Redux, Babel, redux-saga, react-router, Offline First, etc.</div>

## Quick start

1. Clone this repo using `git clone https://github.com/Jonathan-Steinmann/react-boilerplate-testing.git`
2. Move to the appropriate directory: `cd react-boilerplate-testing`.<br />
3. Run `npm run setup` in order to install dependencies and clean the git repo.<br />
   *We auto-detect `yarn` for installing packages by default, if you wish to force `npm` usage do: `USE_YARN=false npm run setup`*<br />
   *At this point you can run `npm start` to see the example app at `http://localhost:3000`.*
4. For learning purposes, I recommend looking at the example app.
5. Run `npm run clean` to delete the example app once you're ready to start your own project.  

Now you're ready to rumble!

## Setup Dev Environment

### Set up (local)

  1. Install Node / NPM

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
