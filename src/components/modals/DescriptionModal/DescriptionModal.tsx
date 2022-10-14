import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@store/store';

export function DescriptionModal() {
  const dispatch = useDispatch();

  const visible = useSelector((state: RootState) => state.descriptionModal.visible);
  const data = useSelector((state: RootState) => state.descriptionModal.data);

  const handleHide = () => dispatch({ type: 'descriptionModal/closeModal' });

  return (
    <Modal show={visible} onHide={handleHide} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>{data.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="section-row section-subtitle text" id="modal-subtitle">
          {data.description}
        </div>
        <div className="section-row text">
          <div id="modal-bullets">
            {
              data.bullets.map((bullet, index) =>
                <div key={bullet}>
                  <p className="fonstsize" dangerouslySetInnerHTML={{ __html: bullet }}></p>
                  {(index !== data.bullets.length - 1) && <hr></hr>}
                </div>)
              //TODO check
            }
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <div className="section-row text" id="modal-reference">
          {data.reference}
        </div>
      </Modal.Footer>
    </Modal>
  );
}