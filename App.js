import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("h3", {id: "heading"}, "React Practice Series");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

const Title = () => <h5>I am learning React</h5>

const JsxComponent = () => (
    <>
<h3>Hello Learning World!!!</h3>
<Title />
</>
)



const jsxElement = <h3>React Practice Series 2</h3> 

root.render(jsxElement);

root.render(<JsxComponent />);