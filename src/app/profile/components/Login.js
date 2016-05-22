import React from "react";
import { reduxForm } from "redux-form";

class Login extends React.Component {

  submit(model) {
    console.log(model);
  }

  render() {
    let { fields, handleSubmit } = this.props;
    let { username, password } = fields;
    return (
      <div class="p-50 text-center">
        <div class="profile-image-generic">
          <i class="material-icons">fingerprint</i>
        </div>
        <form class="pt-50" onSubmit={handleSubmit(this.submit.bind(this))}>
          <div class="form-field">
            <input type="text" class="form-field-input form-field-input-lg text-center" placeholder="Username or email" {...username}/>
          </div>
          <div class="form-field">
            <input type="password" class="form-field-input form-field-input-lg text-center" placeholder="Password" {...password}/>
          </div>
          <button type="submit" class="btn btn-success btn-block btn-lg btn-rounded">Login</button>
        </form>
      </div>
    );
  }

}

export default reduxForm({
  form: 'login',
  fields: ['username', 'password']
})(Login);