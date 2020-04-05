import React from "react";
import Joi from "joi-browser";
import Form from "../../common/formElements/form";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/auth/actions";

class SignUp extends Form {
  state = {
    data: { email: "", password: "", firstname: "", lastname: "" },
    errors: {}
  };
  schema = {
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    password: Joi.string()
      .min(6)
      .required()
      .label("Password"),
    firstname: Joi.string()
      .required()
      .label("First Name"),
    lastname: Joi.string()
      .required()
      .label("Last Name")
  };

  doSubmit = () => {
    console.log(this.state.data);
    console.log("Submitted");
    this.props.signUp(this.state.data);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <section id="cover" className="min-vh-100">
        <div id="cover-caption">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                <h1 className="display-4 py-2 text-center">Sign Up</h1>
                <div className="px-2">
                  <form
                    className="form justify-content-center"
                    onSubmit={this.handleSubmit}
                  >
                    {this.renderInput("email", "Email", "email")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("firstname", "First Name")}
                    {this.renderInput("lastname", "Last Name")}
                    {this.renderButton("SignUp")}
                    <div className="red-text center">
                      {authError ? <p>{authError}</p> : null}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
