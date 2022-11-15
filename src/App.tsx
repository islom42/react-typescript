import React, {createElement as e} from "react";

function App() {
    return(
        // <h1>Hello world</h1>
        e("div", {className: "container"},[
            e("h1",{className: "font-bold"}, "Text Test"),
            e("button", {className: "py-2 px-4 border btn"}, "Click me")
    ])
    )
}
export default App