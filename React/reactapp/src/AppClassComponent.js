import React from "react";
import UserData from "./UserData";

class AppClassComponent extends React.Component {
    constructor() {
        super();
        let userValue = {
            name: "Asma",
            position: "Full stack develepment",
            age: 22
        }

        this.state = {...userValue }
    }

    //life cycle class component
    componentDidMount() {
        console.log("Did Mount");
    }

    componentDidUpdate() {
        console.log("Did Update");
    }

    componentDidUnmount() {}

    changName = (name) => {
        console.log("change name")
        this.setState({
            name
        })
    }


    render() {
        return (
            <div className="container text-center">
                <UserData name={this.state.name} position={this.state.position} age={this.state.age} />
                <button onClick={() => this.changName("Sara")}>Change Name 1</button>
                <button onClick={() => this.changName("Ali")}>Change Name 2</button>
            </div>
        );
    }
}
export default AppClassComponent;