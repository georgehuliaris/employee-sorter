import React, { Component } from "react";
import "./../styles/style.css";
import DataBody from "./DataBody";

class Data extends Component {
  state = {
    Search: "",
    filteredEmployees: [],
  };
  componentDidMount() {
    console.log("this.props", this.props)
    if (this.state.filteredEmployees.length < 1) {
      this.setState({
        filteredEmployees: this.props.employees,
      });
    }
  }
  handleInputChange = (e) => {
    this.setState({
      Search: e.target.value,
    });
    let userTyped = e.target.value;
    const filteredList = this.props.employees.filter((item) => {
      console.log(this.props.employees);
      let values =
        item.name.title +
        item.name.first +
        item.name.last +
        item.gender +
        item.dob.age +
        item.email +
        item.cell;
      return values.indexOf(userTyped) !== -1;
    });
    this.setState({
      filteredEmployees: filteredList,
    });
  };
  render() {
    return (
      <div>
        <form className="form">
          <input
            value={this.state.Search}
            name="Search"
            onChange={(event) => this.handleInputChange(event)}
            type="text"
            placeholder="Search"
          />
        </form>
        {this.state.filteredEmployees?.length > 0 && (
          <DataBody empList={this.state.filteredEmployees} />
        )}
        <br></br>
      </div>
    );
  }
}

export default Data;
