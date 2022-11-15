import React, {useState} from 'react';
import Modal from "./components/Modal/Modal";
import Alert from "./components/Alert/Alert";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const [showAlert2, setShowAlert2] = useState(true);

  const cancel = () => setShowModal(false);

  const closeAlert = () => setShowAlert(false);

  return (
    <div className="App">
      <Modal show={showModal} title="Order" onClose={cancel}>
        <div className="modal-body">Content</div>
        <div className="modal-footer">
          <button className="btn btn-danger" onClick={cancel}>Cancel</button>
        </div>
      </Modal>
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>Show demo modal</button>
      <Alert show={showAlert} type="warning" onDismiss={closeAlert}>This is a warning type alert</Alert>
      <Alert show={showAlert2} type="success">This is a success type alert</Alert>
    </div>
  );
}

export default App;
