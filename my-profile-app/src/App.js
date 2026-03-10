// src/App.js
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    // 3️⃣ Initialize state
    this.state = {
      person: {
        fullName: "Jon Snow",
        bio: "A member of the Night's Watch and heir to Winterfell.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png",
        profession: "Protector of the Realm",
      },
      shows: false, // boolean to toggle profile visibility
      secondsSinceMount: 0, // to track time since mount
    };
  }

  // 5️⃣ Lifecycle method to start interval after mount
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        secondsSinceMount: prevState.secondsSinceMount + 1,
      }));
    }, 1000);
  }

  // 6️⃣ Clear interval when component unmounts
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // 4️⃣ Toggle function
  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows, secondsSinceMount } = this.state;

    return (
      <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div style={{ marginTop: "20px" }}>
            <h1>{person.fullName}</h1>
            <img
              src={person.imgSrc}
              alt={person.fullName}
              style={{ width: "200px", borderRadius: "10px" }}
            />
            <p>{person.bio}</p>
            <h3>{person.profession}</h3>
          </div>
        )}

        <div style={{ marginTop: "20px", fontStyle: "italic" }}>
          Time since component mounted: {secondsSinceMount} seconds
        </div>
      </div>
    );
  }
}

export default App;