import React from "react";
import Joi from "joi-browser";
import Form from "../../common/formElements/form";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../store/auth/actions";
class SignIn extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {}
  };
  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(6)
      .label("Password")
  };

  doSubmit = () => {
    console.log("Submitted Login");
    this.props.signIn(this.state.data);
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <section id="cover" className="min-vh-100">
        <div id="cover-caption">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                <h1 className="display-4 py-2 text-center">Sign In</h1>
                <div className="px-2">
                  <form
                    className="form justify-content-center"
                    onSubmit={this.handleSubmit}
                  >
                    {this.renderInput("email", "Email", "email")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("SignIn")}
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
    signIn: credentials => dispatch(signIn(credentials))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
