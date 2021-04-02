import React from "react";

class AgeSearch extends React.Component {
  readAge(event) {
    event.preventDefault();
    // Getting Age
    let element = document.querySelector("#age");
    fetch("/ages/" + element.value)
      .then((res) => {
        return res.json();
      })
      // Posting Name
      .then((processed) => {
        let reporting = document.querySelector("#reportingArea");

        if (processed.error) {
          reporting.innerHTML = processed.error;
        } else {
          reporting.innerHTML = processed.name;
        }
      });
    element.value = "";
  }
  render() {
    return (
      <div>
        <h2>Age</h2>
        <form onsubmit={this.readAge}>
          <input id="age" type="text" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AgeSearch;
