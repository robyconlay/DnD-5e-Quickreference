import { Navbar } from 'react-bootstrap';

import Homepage from '@views/Homepage';
import { LanguageChooserModal } from '@components/modals';
import { LanguageChooser } from '@components/layouts';

import './App.css';

function App() {

  return (
    <>
      {/* <Navbar bg="light" >
        <Navbar.Brand href="/">Quickref</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className='float-end'>
          <LanguageChooser />
        </div>
      </Navbar> */}
      <Homepage />
      <LanguageChooserModal />
    </>
  );
}

export default App;
