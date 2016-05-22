import React from "react";
import { reduxForm } from "redux-form";
import { userFetch, userUpdate } from "../Actions";

class UserDetails extends React.Component {

  componentDidMount() {
    this.props.dispatch(userFetch(this.props.params.id));
  }

  save(user) {
    this.props.dispatch(userUpdate(this.props.params.id, user));
  }

  render() {
    const {fields, handleSubmit} = this.props;
    const {slug, firstName, lastName, email, url} = fields;

    return (
      <form onSubmit={handleSubmit(this.save.bind(this))}>
        <div class="action-bar clearfix">
          <button class="action-bar-btn btn btn-success pull-right" type="submit"><i class="material-icons">check</i></button>
        </div>
        <div class="bg-white plr-30 pt-30 pb-15">
          <h1 class="page-title">User</h1>
        </div>
        <div class="bg-white plr-15">
          <ul class="tabs-menu">
            <li class="active"><a>Details</a></li>
            <li><a>Permissions</a></li>
            <li><a>Activity</a></li>
          </ul>
        </div>
        <div class="p-30">
          <div class="row">
            <div class="col-sm-6">
              <div class="form-field">
                <div class="form-field-label">Slug</div>
                <input type="text" class="form-field-input" {...slug}/>
              </div>
              <div class="form-field">
                <div class="form-field-label">Email</div>
                <input type="text" class="form-field-input" {...email}/>
              </div>
              <div class="form-field">
                <div class="form-field-label">Website URL</div>
                <input type="text" class="form-field-input" {...url}/>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-field">
                <div class="form-field-label">First name</div>
                <input type="text" class="form-field-input" {...firstName}/>
              </div>
              <div class="form-field">
                <div class="form-field-label">Last name</div>
                <input type="text" class="form-field-input" {...lastName}/>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }

}

export default reduxForm({
  form: 'user',
  fields: ['slug', 'firstName', 'lastName', 'email', 'url']
}, (state) => ({
  initialValues: state.user.details.user
}))(UserDetails);