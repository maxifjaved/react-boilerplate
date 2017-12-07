import React from 'react'
import './v2.css'
import './v2.js'


const SignUpFormV2 = (props) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                    <form role="form">
                        <h2>Please Sign Up <small>It's free and always will be.</small></h2>
                        <hr className="colorgraph" />
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="form-group">
                                    <input type="text" name="first_name" id="first_name" className="form-control input-lg" placeholder="First Name" tabIndex={1} />
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="form-group">
                                    <input type="text" name="last_name" id="last_name" className="form-control input-lg" placeholder="Last Name" tabIndex={2} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="text" name="display_name" id="display_name" className="form-control input-lg" placeholder="Display Name" tabIndex={3} />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" id="email" className="form-control input-lg" placeholder="Email Address" tabIndex={4} />
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="form-group">
                                    <input type="password" name="password" id="password" className="form-control input-lg" placeholder="Password" tabIndex={5} />
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="form-group">
                                    <input type="password" name="password_confirmation" id="password_confirmation" className="form-control input-lg" placeholder="Confirm Password" tabIndex={6} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-4 col-sm-3 col-md-3">
                                <span className="button-checkbox">
                                    <button type="button" className="btn" data-color="info" tabIndex={7}>I Agree</button>
                                    <input type="checkbox" name="t_and_c" id="t_and_c" className="hidden" defaultValue={1} />
                                </span>
                            </div>
                            <div className="col-xs-8 col-sm-9 col-md-9">
                                By clicking <strong className="label label-primary">Register</strong>, you agree to the <a href="#" data-toggle="modal" data-target="#t_and_c_m">Terms and Conditions</a> set out by this site, including our Cookie Use.
          </div>
                        </div>
                        <hr className="colorgraph" />
                        <div className="row">
                            <div className="col-xs-12 col-md-6"><input type="submit" defaultValue="Register" className="btn btn-primary btn-block btn-lg" tabIndex={7} /></div>
                            <div className="col-xs-12 col-md-6"><a href="#" className="btn btn-success btn-block btn-lg">Sign In</a></div>
                        </div>
                    </form>
                </div>
            </div>
            {/* Modal */}
            <div className="modal fade" id="t_and_c_m" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h4 className="modal-title" id="myModalLabel">Terms &amp; Conditions</h4>
                        </div>
                        <div className="modal-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal">I Agree</button>
                        </div>
                    </div>{/* /.modal-content */}
                </div>{/* /.modal-dialog */}
            </div>{/* /.modal */}
        </div>


    );
}

export default SignUpFormV2;