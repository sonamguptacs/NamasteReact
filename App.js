 
import React from 'react';
import ReactDOM from 'react-dom'

// React.createElement => object => Rendered
const heading = React.createElement("h1", {}, "Sample React Code without npx");

/**JSX is not React
 * 
 * JSX => Reat.createElement => object => Rendered
*/

//React Element
const title = <h1>Hello</h1>

//React Functional Component
const Heading=()=>title

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(<Heading/>);
    