import React, {Component} from "react";
import ReactDOM from "react-dom/client"

class App extends Component {
    render() {
        return(
            <div className="container">
                <h1>Goats!</h1>
            </div>
        )
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);