import React from 'react'
import { Row, Col, Alert, Container } from 'react-bootstrap'
import Product from './product'
import products from '../data/product'
import Header from './Header'
import Footer from './Footer'

const Dashboard = ({history}) => {
  let user = null 
  const userName = localStorage.getItem('login')
  if(userName){
    user = userName.split('@')[0];
  }
  return (
    <>
    
      <Header />
      <Container>
      <h1>Latest Products</h1>
      {user && <Alert variant="success">Welcome {user}</Alert>}
        <Row>
          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
        <Footer />

        </Container>
    </>
  )
}

export default Dashboard
