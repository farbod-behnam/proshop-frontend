import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
    return (
        <Container>
            <footer>Footer</footer>
            <Row>
                <Col className='text-center py-3'>
                    Copyright &copy; ProShop
                </Col>
            </Row>
        </Container>
    )
}
