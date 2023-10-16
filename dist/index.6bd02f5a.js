// creating nested html structure or elements inside react.
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, React.createElement("h1", {}, "react h1 tag")));
// console.log(parent)
// Passing more than one children or create another sibling for that child:
const parent1 = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "react h1 tag"),
        React.createElement("h2", {}, "react h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "react h1 tag"),
        React.createElement("h2", {}, "react h2 tag")
    ])
]);
console.log(parent1);
const numbers = [
    1,
    2,
    3,
    4,
    5
];
// let sum = 0;
let sum = 0;
// numbers.map((number, index) => (
//   console.log(number * 10, index)
// ))
numbers.map((number, i)=>sum += numbers[i]);
document.getElementById("header").innerHTML = sum;
// const heading = React.createElement(
//   "h1",
//   { id: 1, name: "Anmol learns React" },
//   "Hello React World"
// );
// creates a JS Object which then gets converted to html when the browser renders it.
// in the above, the object parameter is used to give attributes to your tags or elements, eg: id, name are attributes to h1 tag
// console.log(heading); // heading declared above is a react element which is also equivalent to a JS object
const root = ReactDOM.createRoot(document.getElementById("root")); // creates a root for react library, we will then add the heading
// inside root, this root will run the entire react code and render the code inside it
// const header = ReactDOM.createRoot(document.getElementById("header"));
// header.render("grbrugi")
root.render(parent1); // root.render(heading); // this takes heading as an object, convert it into h1 tag that the browser understands
 //and then render it inside the root

//# sourceMappingURL=index.6bd02f5a.js.map
