import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// App.jsx
import { Mypost } from '/src/assets/post.jsx';




function App() {
  const [count, setCount] = useState(0);

  return (<>
 <div className="container">
  <div className="row">
  <div className="postCompA"><Mypost/></div>
  <div className="postCompB"><Mypost/></div>
  <div className="postCompC"><Mypost/></div>

  </div>
  </div>
    
    </>)
}

export default App;
