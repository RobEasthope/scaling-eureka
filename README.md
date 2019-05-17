# Simple React Hooks App

## Quick start guide

1. Run `yarn intall` or `npm install`
2. Run `yarn start` start the development server

## Developer notes

Taking Lukasz instructions to use any tech or framework I liked from telephone interview earlier this week, I've built a simple [React Hooks](https://reactjs.org/docs/hooks-intro.html) based app.

I want to stress I've written it this way not out of ego but rather in tandem a previous ES6 based technical test up on [Github](https://github.com/RobEasthope/simple-es6-webapp). Hopefully the two comboned will show evidence of what you are seeking.

## Questions

1. Why use React & React Hooks?
   I used React to cut out the DOM manipulation code required. It is of course total overkill for this kind of project and Hooks was simply picked because I was using it when the test landing in my inbox.

   Lastly, even if I don't get the position the code can be used as small portfolio piece.

   Rather than filling the code with React plugins, I've stuck to the spirit of the exercise and only used React to save having to write lots of DOM manipulation code. .

   I've made sure to use simple regular expressions and stayed away from HTML 5 API for the form validation.

2. Where are the units tests?
   Sadly I ran out of time. If I had the time I would have added:

   - Tests for the form validation regular expressions using mulitple dummy data sets.
   - Full validation testing
   - Snapshots to ensure components and styling didn't unexpectedly change.
   - Basic things link smoke tests to ensure I didn't break anything by accident.

3. Which styling library have you used?
   I've used [styled-components](https://www.styled-components.com) only to the [Rebass](http://rebassjs.org) and [styled-system](http://styled-system.com). Both of those libraries make it very easy to build responsive layout without having to write lots of media queries.
