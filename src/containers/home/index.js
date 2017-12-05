import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './home.css'

const Home = () => (
  <div>
    <main role="main">

      <div className="jumbotron">
        <h1 className="display-3">Lorem Ipsum</h1>
        <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <p><Link className="btn btn-lg btn-success" to="/signup">Sign up today</Link></p>
      </div>

      <div className="row marketing">
        <div className="col-lg-6">
          <h4>Lorem Ipsum</h4>
          <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

          <h4>Lorem Ipsum</h4>
          <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

          <h4>Lorem Ipsum</h4>
          <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
        </div>

        <div className="col-lg-6">
          <h4>Lorem Ipsum</h4>
          <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

          <h4>Lorem Ipsum</h4>
          <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

          <h4>Lorem Ipsum</h4>
          <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
        </div>
      </div>
      <Link className="btn btn-link" to="/login">Login Here</Link>

    </main>

    <footer className="footer">
      <p>&copy; arcl technologies 2017</p>
    </footer>

  </div>
);

export default Home;