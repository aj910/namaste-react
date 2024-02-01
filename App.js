import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h3", {id: "heading"}, "React Practice Series");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

const Title = () => <h3>I am learning react components</h3>
const number = 10;
const JsxComponent = () => (
    <>
    <h3>{number + number}</h3>
{Title()}
<Title></Title>

<h3>Hello Learning World!!!</h3>

</>
)

const ReactComponent = () => <h3>This is my component!!</h3>

//console.log(ReactComponent)

const jsxElement = <h3>React Practice Series 2</h3> 

root.render(jsxElement);

root.render(<JsxComponent />);