import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    console.log("id==", id);
    //https://my-json-server.typicode.com/YuHeuiJongGmail/yhj-hnm
    let url = `https://my-json-server.typicode.com/YuHeuiJongGmail/yhj-hnm/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  }
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div> {product?.title}</div>
          <div> {product?.price}</div>
          <div>{product?.choice === true? "Conscious choice":""}</div>

          <Dropdown className="drop-down">
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product?.size.length > 0 &&
                  product.size.map((item) => (
                    <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>

          <Button className="add-button" variant='dark'>추가</Button>
        </Col>

      </Row>


    </Container>
  )
}

export default ProductDetail
