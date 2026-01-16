import { Button, Butt } from '@repo/ui';
 
import { useState } from 'react';

import Sum from './pages/Sum.jsx';

function App() {
  const [showsum, setShowSum] = useState(false);
  return (
     <div>
      <h2><span style={{color: "red"}}>Web</span> page</h2>
      <h4>Monorepo example</h4>
      <Button>Login from web</Button>
      <p>login to connect with us....</p>

       <Butt onClick={() => setShowSum(prev => !prev)}>  {showsum ? "Done" : "Sum up Here"} </Butt>
       { showsum &&   (
          <div style={{ border: "2px solid red", marginTop: "20px" }}>
               <Sum />
          </div>
)}
       
     </div>
  );
}

export default App;
