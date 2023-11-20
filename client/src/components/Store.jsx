import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import school from '../assets/school2.png';
import { storeImages } from '../utils/storeImages';
import { useShoppingCart } from 'use-shopping-cart';
import '../styles/Store.css';

export default function Store({ isMobile }) {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [paragraph, setParagraph] = useState('');

  // Shopping Cart
  const {
    addItem,
    cartCount,
    cartDetails,
    totalPrice,
    incrementItem,
    decrementItem,
    removeItem,
    clearCart,
  } = useShoppingCart();

  // Function to add to cart
  const handleAddToCart = (id, name, price, image) => {
    let quantity = 0;

    // Get current localStorage data
    const cartData = JSON.parse(localStorage.getItem('shoppingCart')) || {};

    // Check if the item already exists
    if (cartData[id]) {
      cartData[id].quantity += 1;
    } else {
      // If it doesn't exist, add with a quantity of 1
      cartData[id] = { id, name, price, image, quantity: 1 };
      // Update localStorage with new cartData
      localStorage.setItem('shoppingCart', JSON.stringify(cartData));
    }

    addItem({
      id: id,
      name: name,
      price: price,
      image: image,
      quantity: cartData[id].quantity,
    });

    // Save cart data to localStorage
    const updatedCart = {
      ...cartDetails,
      [id]: { name, price, image, quantity },
    };
    localStorage.setItem('shoppingCart', JSON.stringify(updatedCart));
  };

  // Clear Cart Items
  const handleClearCart = () => {
    clearCart();
    localStorage.removeItem('shoppingCart');
  };

  const handleShow = (e) => {
    setImage(e.currentTarget.childNodes[0].src);
    setTitle(e.currentTarget.childNodes[1].childNodes[0].innerText);
    setPrice(e.currentTarget.childNodes[1].childNodes[1].innerText);

    switch (title) {
      case 'STAFF ONLY - Fleece Jacket':
        setParagraph('This is a test');
        break;
      default:
        setParagraph('');
    }

    setShow(true);
  };

  return (
    <div>
      <Container className='store-container'>
        <Row>
          <Col>
            Cart Count: <span className='cart-count'>{cartCount}</span>
          </Col>
          <Col>
            Cart Details:
            {Object.keys(cartDetails).length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <ul>
                {Object.values(cartDetails).map((item) => (
                  <li>
                    {item.name} - {item.formattedValue} - Quantity:{' '}
                    {item.quantity} - {item.image}
                    <button
                      className='remove-item'
                      onClick={() => removeItem(item.id)}
                    >
                      Remove From Cart
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </Col>

          <Col>
            <button onClick={handleClearCart}>Clear Cart</button>
          </Col>
        </Row>
        <Row className={`membership mt-5 mb-5`}>
          <>
            <Col className='myCol' md={3}>
              <Card key={1} className={isMobile ? '' : 'store-card'}>
                <Card.Img className='card-image' src={school}></Card.Img>
                <Card.Body>
                  <Card.Title>Membership</Card.Title>
                  <Card.Subtitle>$10.00</Card.Subtitle>
                  <Card.Text>Standard PTO Family Membership 2023-24</Card.Text>
                  <Card.Footer
                    onClick={() => {
                      handleAddToCart(1, 'Membership', 10, school);
                    }}
                  >
                    Add To Cart
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>

            <Col className='myCol' md={3}>
              <Card key={2} className={isMobile ? '' : 'store-card'}>
                <Card.Img
                  className='card-image'
                  src={storeImages[15].src}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Staff Membership</Card.Title>
                  <Card.Subtitle>$10.00</Card.Subtitle>
                  <Card.Text>Staff PTO Family Membership 2023-24</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col className='myCol' md={3}>
              <Card key={3} className={isMobile ? '' : 'store-card'}>
                <Card.Img
                  onMouseOver={(e) =>
                    (e.currentTarget.src = storeImages[3].src)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.src = storeImages[2].src)
                  }
                  className='card-image'
                  src={storeImages[2].src}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Cinch Pack</Card.Title>
                  <Card.Subtitle>$15.00</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>

            <Col className='myCol' md={3}>
              <Card key={4} className={isMobile ? '' : 'store-card'}>
                <Card.Img
                  onMouseOver={(e) =>
                    (e.currentTarget.src = storeImages[8].src)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.src = storeImages[6].src)
                  }
                  className='card-image'
                  src={storeImages[6].src}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Lincoln Pride Full Zipper Hoodie</Card.Title>
                  <Card.Subtitle>$25.00</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>

            <Col className='myCol' md={3}>
              <Card key={5} className={isMobile ? '' : 'store-card'}>
                <Card.Img
                  onMouseOver={(e) =>
                    (e.currentTarget.src = storeImages[8].src)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.src = storeImages[7].src)
                  }
                  className='card-image'
                  src={storeImages[7].src}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Lincoln Pride Pull Over Hoodie</Card.Title>
                  <Card.Subtitle>$22.00</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>

            <Col className='myCol' md={3}>
              <Card key={6} className={isMobile ? '' : 'store-card'}>
                <Card.Img
                  onMouseOver={(e) =>
                    (e.currentTarget.src = storeImages[20].src)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.src = storeImages[19].src)
                  }
                  className='card-image'
                  src={storeImages[19].src}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Tie-Dye Short Sleeve Shirt</Card.Title>
                  <Card.Subtitle>$15.00</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>

            <Col className='myCol' md={3}>
              <Card key={7} className={isMobile ? '' : 'store-card'}>
                <Card.Img
                  className='card-image'
                  src={storeImages[9].src}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Linc the Lion Plush Toy</Card.Title>
                  <Card.Subtitle>$5.00</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>

            <Col className='myCol' md={3}>
              <Card key={8} className={isMobile ? '' : 'store-card'}>
                <Card.Img
                  className='card-image image-board'
                  src={storeImages[0].src}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Birthday Board!</Card.Title>
                  <Card.Subtitle>$10.00</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>

            <Col className='myCol' md={3}>
              <Card key={9} className={isMobile ? '' : 'store-card'}>
                <Card.Img
                  className='card-image image-board'
                  src={storeImages[12].src}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Sponsorship</Card.Title>
                  <Card.Subtitle>$10.00</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>

            <Col className='myCol' md={3}>
              <Card key={10} className={isMobile ? '' : 'store-card'}>
                <Card.Text className='sale'>Sale</Card.Text>
                <Card.Img
                  className='card-image image-board'
                  src={storeImages[11].src}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Short Sleeve T-Shirts</Card.Title>
                  <Card.Subtitle className='strikethrough'>
                    $10.00
                  </Card.Subtitle>
                  <Card.Subtitle>$8.00</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>

            <Col className='myCol' md={3}>
              <Card key={11} className={isMobile ? '' : 'store-card'}>
                <Card.Text className='sale'>Sale</Card.Text>
                <Card.Img
                  className='card-image image-board'
                  src={storeImages[10].src}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Long Sleeve T-Shirts</Card.Title>
                  <Card.Subtitle className='strikethrough'>
                    $15.00
                  </Card.Subtitle>
                  <Card.Subtitle>$10.00</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>

            <Col className='myCol' md={3}>
              <Card key={12} className={isMobile ? '' : 'store-card'}>
                <Card.Text className='sale'>Sale</Card.Text>
                <Card.Img
                  className='card-image image-board'
                  src={storeImages[5].src}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Hoodie Sweatshirts</Card.Title>
                  <Card.Subtitle className='strikethrough'>
                    $22.00
                  </Card.Subtitle>
                  <Card.Subtitle>$15.00</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>

            <Col className='myCol' md={3}>
              <Card key={13} className={isMobile ? '' : 'store-card'}>
                <Card.Text className='sale'>Sale</Card.Text>
                <Card.Img
                  className='card-image image-board'
                  src={storeImages[17].src}
                  onMouseEnter={(e) =>
                    (e.currentTarget.src = storeImages[18].src)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.src = storeImages[17].src)
                  }
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Sweatpants</Card.Title>
                  <Card.Subtitle className='strikethrough'>
                    $20.00
                  </Card.Subtitle>
                  <Card.Subtitle>$15.00</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>

            <Col className='myCol' md={3}>
              <Card key={14} className={isMobile ? '' : 'store-card'}>
                <Card.Text className='sale'>Sale</Card.Text>
                <Card.Img
                  className='card-image image-board'
                  src={storeImages[4].src}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Full Zipper Hoodie Sweatshirt</Card.Title>
                  <Card.Subtitle className='strikethrough'>
                    $25.00
                  </Card.Subtitle>
                  <Card.Subtitle>$20.00</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>

            <Col className='myCol' md={3}>
              <Card key={15} className={isMobile ? '' : 'store-card'}>
                <Card.Img
                  className='card-image image-board'
                  src={storeImages[4].src}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>STAFF ONLY - Polo T-Shirt</Card.Title>
                  <Card.Subtitle>$18.00</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>

            <Col className='myCol' md={3}>
              <Card
                key={16}
                className={isMobile ? '' : 'store-card'}
                onClick={(e) => {
                  handleShow(e);
                }}
              >
                <Card.Img
                  className='card-image image-board'
                  src={storeImages[13].src}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>STAFF ONLY - Fleece Jacket</Card.Title>
                  <Card.Subtitle>$25.00</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          </>
        </Row>

        {/* Make a switch using title */}

        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
            <Modal.Body>
              {paragraph}
              {price}
            </Modal.Body>
          </Modal.Header>
        </Modal>
      </Container>
    </div>
  );
}
