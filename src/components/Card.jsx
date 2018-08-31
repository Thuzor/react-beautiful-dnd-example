import React from "react";

const Card = props => (
    <div className="card">
        <h5>{props.title} Routine</h5>
        <ul className="list">
            {props.todos.map(todo => <li>{todo}</li>)}

        </ul>
    </div>
);

export default Card;
