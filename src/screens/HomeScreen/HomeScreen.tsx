import { Fragment } from "react"
import { Row, Col } from "react-bootstrap"
import ProductCard from "../../components/ProductCard/ProductCard"
import products from "../../products_data"

export default function HomeScreen() {
    return (
        <Fragment>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </Fragment>
    )
}
