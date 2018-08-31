import React, {Component} from "react";
import "./App.css";
import Card from "./components/Card";
import routines from "./data/data";

class App extends Component {
    state = {
        routines
    };


    render() {
        return (
            <div className="App">
                {this.state.routines.map((routine, index) =>
                    <Card key={routine.title} title={routine.title} todos={routine.todos} />)}
            </div>
        );
    }
}

export default App;
