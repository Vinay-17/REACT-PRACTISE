const parent = React.createElement("div",{id : "parent"},
    [
        React.createElement("div",{id : "child1"},[
            React.createElement("h1",{id : "h1"},"hello world from h1"),
            React.createElement("h2",{id : "h1"},"hello world from h2")
        ])
    ],
    [
        React.createElement("div",{id : "child2"},[
            React.createElement("h1",{id : "h1"},"hello world from h1 child2"),
            React.createElement("h2",{id : "h1"},"hello world from h2 child2")
        ])
    ]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)