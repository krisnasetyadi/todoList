import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./service/routes";


function App() {
  return (
    <Router>
      <div>
        
        <Switch>
          {routes.map((route) => {
            return (
              <Route exact={route.exact} path={route.path}>
                {route.component}
              </Route>
            );
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
