import { Link, RouteComponentProps } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import products_data from '../../products_data';
import { Fragment } from 'react';
import Rating from '../../components/Rating/Rating';
import { Product } from '../../models/product.model';

interface Props {
  id: string;
}

export default function ProductScreen(props: RouteComponentProps<Props>) {

  const id = props.match.params.id;

  const product = products_data.find(product => product._id === id);

  if (product === undefined) {
    return (
      <Fragment>
        <h2>Product cannot be found!</h2>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Link className='btn btn-outline-dark my-3' to='/'>Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product?.image} alt={product?.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product?.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product?.rating} text={`${product?.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup.Item variant='flush'>
              <Row>
                <Col>Price:</Col>
                <Col><strong>${product.price}</strong></Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item variant='flush'>
              <Row>
                <Col>Status:</Col>
                <Col>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stuck'}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button className='btn-success btn-block' type='button' disabled={product.countInStock === 0}>Add To Cart</Button>
            </ListGroup.Item>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
