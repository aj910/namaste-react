import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("h3", {id: "heading"}, "React Practice Series");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

console.log(heading)

const JsxComponent = () => {
    return <h4>Hello React World</h4>
}

console.log(JsxComponent, "data")

const jsxElement = <h3>React Practice Series 2</h3> 

root.render(jsxElement);

root.render(<JsxComponent />);