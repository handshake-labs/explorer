import { render } from "preact";

import "normalize.css";
import "./css/defaults.css";
import "./css/icons.css";
import "./css/mixins.css";

import App from "App";

render(<App />, document.getElementById("root") as HTMLElement);
