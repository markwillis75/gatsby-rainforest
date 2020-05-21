import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <div id="footer">
    <footer>
      <Link to="/">Home</Link> {'  '}
      <Link to="/diary/day-1">Day 1</Link> {'  '}
      <Link to="/diary/day-2">Day 2</Link> {'  '}
      <Link to="/diary/day-3">Day 3</Link> {'  '}
      <Link to="/diary/day-4">Day 4</Link> {'  '}
      <Link to="/diary/day-5">Day 5</Link> {'  '}
      <Link to="/diary/day-6">Day 6</Link> {'  '}
      <br />
       © {new Date().getFullYear()}, A Hannah and Daddy creation
      <br />
       <Link to="/watch-the-magic">Watch Hannah at work!</Link>
    </footer>
  </div>
)

export default Footer
