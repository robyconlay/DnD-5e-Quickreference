import { Navbar } from 'react-bootstrap';

import Homepage from '@views/Homepage';
import { LanguageChooserModal } from '@components/modals';
import { LanguageChooser } from '@components/layouts';

import './App.css';

function App() {
  const title = 'Quickref';

  return (
    <>
      <Navbar bg="light" >
        <Navbar.Brand href="/">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className='float-end'>
          <LanguageChooser />
        </div>
      </Navbar>
      <Homepage />
      <LanguageChooserModal />
    </>
  );
}

export default App;
