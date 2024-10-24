import { useContext, useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { ThemeContext } from "./useContext/ThemeProvider";



export const Product = ({ item, handleShow }) => {
  const { toggleTheme } = useContext(ThemeContext);

  //const [show, setShow] = useState(false);

  const { title, text, images } = item;

  // const handleClose = () => {
  //  setShow(false);
  // };
  // const handleShow = () => {
  //  setShow(true);
  //  };
  return (
    <>
      <div className="prod">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={images} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Button variant="primary" onClick={() => handleShow(item)}>
              Learn more
            </Button>
            <Button onClick={toggleTheme}>Change theme in Product</Button>
          </Card.Body>
        </Card>
      </div>

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{author}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{price}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
};
