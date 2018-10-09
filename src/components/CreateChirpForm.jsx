import React, { Component } from "react";

class CreateChirpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      chirpContent: ""
    };
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleCancel(e) {
    console.log(this.props);
    e.preventDefault();
    this.props.handleCancel();
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.userName === "" || this.state.chirpContent === "") {
      alert("Input name and chirp content!");
      return;
    } else {
      this.props.handleSubmit(this.state);
    }
  }

  handleInput(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="userNameInput">User Name:</label>
            <input
              value={this.state.userName}
              className="form-control"
              id="userName"
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="chirpContent">Chirp Content:</label>
            <textarea
              className="form-control"
              id="chirpContent"
              onChange={this.handleInput}
            />
          </div>
          <button
            className="btn btn-dark text-light mr-3"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
          <button
            className="btn btn-dark text-light"
            onClick={this.handleCancel}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default CreateChirpForm;
