import React from 'react';

const Info = () => (
  <div style={{ maxWidth: '600px' }}>
    <h1 id="simple-react-hooks-app">Simple React Hooks App</h1>
    <h2 id="quick-start-guide">Quick start guide</h2>
    <ol>
      <li>
        Run <code>yarn intall</code> or <code>npm install</code>
      </li>
      <li>
        Run <code>yarn start</code> start the development server
      </li>
    </ol>
    <h2 id="developer-notes">Developer notes</h2>
    <p>
      Taking Lukasz instructions to use any tech or framework I liked from
      telephone interview earlier this week, I&#39;ve built a simple{' '}
      <a href="https://reactjs.org/docs/hooks-intro.html">React Hooks</a> based
      app.
    </p>
    <p>
      I want to stress I&#39;ve written it this way not out of ego but rather in
      tandem a previous ES6 based technical test up on{' '}
      <a href="https://github.com/RobEasthope/simple-es6-webapp">Github</a>.
      Hopefully the two comboned will show evidence of what you are seeking.
    </p>
    <h2 id="questions">Questions</h2>
    <ol>
      <li>
        <p>
          Why use React &amp; React Hooks? I used React to cut out the DOM
          manipulation code required. It is of course total overkill for this
          kind of project and Hooks was simply picked because I was using it
          when the test landing in my inbox.
        </p>
        <p>
          Lastly, even if I don&#39;t get the position the code can be used as
          small portfolio piece.
        </p>
        <p>
          Rather than filling the code with React plugins, I&#39;ve stuck to the
          spirit of the exercise and only used React to save having to write
          lots of DOM manipulation code. .
        </p>
        <p>
          I&#39;ve made sure to use simple regular expressions and stayed away
          from HTML 5 API for the form validation.
        </p>
      </li>
      <li>
        <p>
          Where are the units tests? Sadly I ran out of time. If I had the time
          I would have added:
        </p>
        <ul>
          <li>
            Tests for the form validation regular expressions using mulitple
            dummy data sets.
          </li>
          <li>Full validation testing</li>
          <li>
            Snapshots to ensure components and styling didn&#39;t unexpectedly
            change.
          </li>
          <li>
            Basic things link smoke tests to ensure I didn&#39;t break anything
            by accident.
          </li>
        </ul>
        <p />
      </li>
      <li>
        <p>
          Which styling library have you used? I&#39;ve used{' '}
          <a href="https://www.styled-components.com">styled-components</a> only
          to the <a href="http://rebassjs.org">Rebass</a> and{' '}
          <a href="http://styled-system.com">styled-system</a>. Both of those
          libraries make it very easy to build responsive layout without having
          to write lots of media queries.
        </p>
      </li>
    </ol>
  </div>
);

export default Info;
