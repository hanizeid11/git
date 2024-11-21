import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container fluid style={{ height: '100vh' }}>
      <div style={{ height: '100%'}}> 
        <div style={{
          height: '400px', width: '400px', backgroundColor: 'green', overflow:'scroll'
        }} className="d-flex flex-wrap  align-content- p-3">
          <div className='square'></div>
          <div className='square'></div>
  
          <div className='qa'></div>
          <div className='square'></div>
          <div className='square'></div>
          <div className='square'></div>
          <div className='square'></div>
          <div className='square'></div>
           
        </div>
      </div>

    </Container>
  );
}

export default App;
