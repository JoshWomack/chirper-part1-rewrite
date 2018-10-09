import React, { Component } from "react";
import PageHeader from "./PageHeader";
import Timeline from "./Timeline";
import CreateChirpForm from "./CreateChirpForm";

class App extends Component {
  constructor(props) {
    super(props);

    //Set up intial state data

    this.state = {
      chirps: [
        {
          userName: "Frank",
          chirpContent:
            "Well, I don't know how many years on this earth I got left, I'm gonna get real weird with it.",
          chirpId: 5,
          chirpDate: "Oct 08 2018 16:12"
        },
        {
          userName: "Charlie",
          chirpContent:
            "Dude, it's amazing. Look at this. Bro, you could chop a camel right in the hump and drink all of its milk right off the tip of this thing.",
          chirpId: 4,
          chirpDate: "Oct 08 2018 15:02"
        },
        {
          userName: "Charlie",
          chirpContent:
            "@Dennis, Alright well I'm gonna check it out anyway, there could be something delicious in here that wasps do make and I want that",
          chirpId: 3,
          chirpDate: "Oct 08 2018 14:55"
        },
        {
          userName: "Dennis",
          chirpContent: "@Charlie, no, wasps do not make honey.",
          chirpId: 2,
          chirpDate: "Oct 08 2018 12:22"
        },
        {
          userName: "Charlie",
          chirpContent: "Do wasps make honey?",
          chirpId: 1,
          chirpDate: "Oct 08 2018 11:43"
        }
      ],
      createChirp: false,
      numChirps: 5
    };

    this.handleToggleCreateChirp = this.handleToggleCreateChirp.bind(this);
    this.handleNewChirp = this.handleNewChirp.bind(this);
  }

  // toggle between new chirp display and timeline display
  handleToggleCreateChirp() {
    this.setState({ createChirp: !this.state.createChirp });
  }

  // handle inputs to new chirp form
  handleNewChirp(chirp) {
    let date = new Date();
    chirp.chirpDate = date.toString();
    chirp.chirpId = this.state.numChirps + 1;
    this.setState({
      chirps: [chirp, ...this.state.chirps],
      createChirp: false,
      numChirps: this.state.numChirps + 1
    });
    console.log(this.state);
  }

  render() {
    if (this.state.createChirp === false) {
      return (
        <>
          <PageHeader handleToggleCreateChirp={this.handleToggleCreateChirp} />
          <Timeline chirps={this.state.chirps} />
        </>
      );
    } else {
      return (
        <>
          <PageHeader handleToggleCreateChirp={this.handleToggleCreateChirp} />
          <CreateChirpForm
            handleCancel={this.handleToggleCreateChirp}
            handleSubmit={this.handleNewChirp}
          />
        </>
      );
    }
  }
}

export default App;
