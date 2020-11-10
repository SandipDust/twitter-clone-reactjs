
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import {useStateValue} from "./StateProvider";


function App() {
  const [{user}, dispatch] =useStateValue();
  //BEM convention
  return (


    
    <div className="app">
      <div className="app__body">
        {!user ?
          (<Login/>) : (
          <>
              {/* Sidebar */}
                <Sidebar/>

              {/* Feed */}
                <Feed/>

              {/* Widget */}
                <Widgets/>
                  
          </>
          )}

      </div>
      
        
     </div>
    
  

     
  );
}

export default App;
