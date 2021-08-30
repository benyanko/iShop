import React, { useEffect } from "react"
import { useDispatch, useSelector} from "react-redux"
import {Row, Col} from "react-bootstrap"
import Product from "../components/Product"
import {listProducts} from "../actions/productActions"
import Loader from "../components/Loader"
import Message from "../components/Message"
import {listMyOrders} from "../actions/orderActions";

const HomeScreen = ({ location, history }) => {
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const productList = useSelector(state => state.productList )
    const {loading, error, products } = productList

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else{
            dispatch(listProducts())        }
    }, [dispatch, history, userInfo])


    return (
        <>
          <h1>
              Products
          </h1>
            {loading ?
                (<Loader/>):
                error ?
                    (<Message variant={'danger'}>{error}</Message> )
                    : (
                <Row>
                    {products.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            )}
        </>
    )
}

export default HomeScreen