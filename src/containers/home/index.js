import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => (
  <div className="jumbotron">
    <h1 className="display-3">React Boilerplate</h1>
    <hr className="my-4" />

    <Link className="btn btn-link" to="/login">Login Here</Link>
    <Link className="btn btn-link" to="/signup">Click To Register</Link>
  </div>
);

export default Home;