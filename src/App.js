

import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./utils/routes";



function App() {
  return (
    <Provider store={store}>
      <div className="App">   
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;


        {/* 
    Header
    Body
      -sidebar
      -MenuItems
    MainContainer
      -ButtunList
      VideoContainer
      VideoCard

    */}