import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { Product } from '../../models/product.model'
import Rating from '../Rating/Rating';
import classes from './ProductCard.module.css';

interface Props {
    product: Product;
}

export default function ProductCard(props: Props) {

    const product: Product = props.product;

    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as="div">
                    <div className='my-3'>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                    </div>
                </Card.Text>
                <Card.Text as="h3" className={classes.price}>
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
