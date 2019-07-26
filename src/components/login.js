import React from "react";
import ReactFilestack from "filestack-react";
import Axios from "axios";

class Login extends React.Component {
  state = {
    files: [],
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    birthDate: "",
    gender: "",
    role: ""
  };

  registerNewUser = event => {
    event.preventDefault();
    Axios.post("http://localhost:3000/users/register", {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      phoneNumber: this.state.phoneNumber,
      address: this.state.files[0].url,
      birthDate: this.state.birthDate,
      gender: this.state.gender,
      role: this.state.role
    })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handelFileSuccess = response => {
    this.setState({
      files: response.filesUploaded
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        Upload Image using File Stack
        <ReactFilestack
          apikey="ACDYRWK9XTme25bXdZYo6z"
          onSuccess={this.handelFileSuccess}
        />
        <div>
          {this.state.files !== 0 &&
            this.state.files.map(data => {
              return <img src={data.url} alt="img" height="250" width="250" />;
            })}
        </div>
        <form onSubmit={this.registerNewUser}>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={this.handleChange}
          />
          <input
            type="number"
            name="phoneNumber"
            placeholder="phoneNumber"
            onChange={this.handleChange}
          />
          <input
            type="date"
            name="birthDate"
            placeholder="birthDate"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="gender"
            placeholder="gender"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="role"
            placeholder="role"
            onChange={this.handleChange}
          />
          <button type="submit">register new user</button>
        </form>
      </div>
    );
  }
}

export default Login;
