import injectContext from "./store/appContext";
import './App.css';
import { Switch, Route } from "react-router-dom";

import login from "./views/login";

function App() {
  const { store } = useContext(Context);
  return (
    
      <AuthState>
        <RssContextProvider>

          <div className="container-fluid">
            <div className="row pb-5 responsive-view">
              <Switch>
                <Route exact path="/" component={login} />
                
              </Switch>
            </div>
          </div>
        </RssContextProvider>
      </AuthState>
   
    
  );
}

export default injectContext(App);
