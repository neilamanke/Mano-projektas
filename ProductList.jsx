import { useState } from "react";
import { Product } from "./Product";
import { Button, Modal, Toast } from "react-bootstrap";

const Products = [
  {
    id: 1,
    title: "The blue fantasy",
    text: "Showcase your style with our exclusive handmade bracelets. Each piece tells a story. Contact us and find the best one for you.",
    price: 15.99,
    images: ["image/IMG_3986.JPEG"],
  },
  {
    id: 2,
    title: "Red passion",
    text: "Beautiful red bracelet that gives you self-confidence",
    price: 14.99,
    images: ["image/IMG_3976.JPEG"],
  },
  {
    id: 3,
    title: "Green Passion",
    text: "Soft, very feminine bracelet made of natural stone beads. The bracelet is decorated with moody beads.",
    price: 15.99,
    images: ["image/IMG_3971.JPEG"],
  },
  {
    id: 4,
    title: "Purple love",
    text: "Soft, cute, very feminine bracelet made of natural stones and purple gold hematite beads",
    price: 14.99,
    images: ["image/IMG_3939.JPEG"],
  },
  {
    id: 5,
    title: "Dark red",
    text: "Bracelet made of beautiful dark red quartz stones",
    price: 12.99,
    images: ["image/IMG_3992.JPEG"],
  },
  {
    id: 6,
    title: "Marble",
    text: "Made from natural volcanic lava and howlite beads.",
    price: 16.99,
    images: ["image/IMG_3998.JPEG"],
  },
];

 export const ProductList = () => {
  const [modalProduct, setModalProduct] = useState();
  const [showToast, setShowToast] = useState(false);

const [show, setShow] = useState(false);

 const handleClose = () => setModalProduct(undefined);
 const handleShow = (product) => {
    setModalProduct(product);
     setShow(true);
 };
  const handleshowToast = () => {
   setModalProduct(undefined);
   setShowToast(true);
 }; 
  return (
    <>
    {/*   <Toast show={showToast}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Toast body</Toast.Body>
      </Toast>  */}

      {Products.map((product) => (
        <Product
          item={product}
          title={product.title}
          text={product.text}
          price={product.price}
          images={product.images}
          handleShow={handleShow}
        />
      ))}

      {/*  <Modal show={modalProduct} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {modalProduct?.author}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalProduct?.price}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleshowToast}>
            Show Toast
          </Button>
        </Modal.Footer>
      </Modal>  */}
    </>
  );
};
