import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


interface props {
  corps: string;
  finish: ()=>void;
  function:()=>void;
}

const ConfirmDispo: React.FC<props> = (props) => {

  return (
    <>
      <Modal show={true} onHide={props.finish}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation des changements</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> {props.corps} </p>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className='custom_color_refuse' onClick={props.finish}>
            Annuler
          </Button> 
          <Button variant="primary" className='custom_color_accept' onClick={props.function}>
            Accepter
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmDispo;