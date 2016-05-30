import React from "react";
import { reduxForm } from "redux-form";
import { login } from "../Actions";
import { getSession, getLogin } from "../Selectors";
import Loader from "../../common/components/Loader";

class Login extends React.Component {

  submit(model) {
    this.props.submit(model.username, model.password);
  }

  render() {
    let { fields, handleSubmit, session, login } = this.props;
    let { username, password } = fields;
    return (
      <div class="p-50 text-center">
        <div class="profile-image-generic">
          <i class="material-icons">fingerprint</i>
        </div>
        { session.isChecking ? (
          <div>
            <h2 class="text-300 mb-0">Checking your session</h2>
            <p class="text-300 text-subtle mb-50">Please wait while we check your session</p>
            <Loader/>
          </div>
        ) : (
        <form class="pt-50" onSubmit={handleSubmit(this.submit.bind(this))}>
          <div class="form-field">
            <input type="text" class="form-field-input form-field-input-lg text-center" autofocus placeholder="Username or email" {...username} disabled={ login.isFetching ? 'disabled' : null }/>
            { username.touched && username.error && (
              <div class="form-field-error">{ username.error }</div>
            )}
          </div>
          <div class="form-field">
            <input type="password" class="form-field-input form-field-input-lg text-center" placeholder="Password" {...password} disabled={ login.isFetching ? 'disabled' : null }/>
            { password.touched && password.error && (
              <div class="form-field-error">{ password.error }</div>
            )}
          </div>
          { login.error && (
            <div class="pb-20">
              <div class="form-field-error">{ login.error }</div>
            </div>
          )}

          <button type="submit" class="btn btn-success btn-block btn-lg btn-rounded" disabled={ login.isFetching ? 'disabled' : null }>
            { login.isFetching ? (
              <Loader class="loader-white"/>
            ) : (
              <span>Login</span>
            )}
          </button>
        </form>
        )}
      </div>
    );
  }

}

export default reduxForm({
    form: 'login',
    fields: ['username', 'password'],
    validate: model => {
      const errors = {};

      if(!model.username)
        errors.username = 'Required - Please enter a value';

      if(!model.password)
        errors.password = 'Required - Please enter a value';

      return errors;
    }
  },
  state => ({
    session: getSession(state),
    login: getLogin(state)
  }),
  dispatch => ({
    submit: (username, password) => dispatch(login(username, password))
  })
)(Login);