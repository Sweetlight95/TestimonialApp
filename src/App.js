import Form from './components/form/Form'
import Congratulation from './components/form/Congratulation'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path= "/testimonial1" element={ <Form />}/>
        <Route path= "/congratulation" element={ <Congratulation />}/>

      </Routes>
       
    </div>
  );
}

export default App;
