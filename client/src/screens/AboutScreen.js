import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../actions/productActions";

const AboutScreen = ({ location, history }) => {

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        }
    }, [dispatch, history, userInfo])

    return (
        <>
            <h1>
                About Us
            </h1>
            <p>We are Ben Yankovich and Yuval Apel and we live in Herzliya.&nbsp;</p>
            <p>We became best friends 15 years ago because we played basketball together.</p>
            <p>Our store&nbsp;started sell Apple's products since we were 18 years old.&nbsp;</p>
            <p>We believe that Apple company is the best company in the word and that's reason we decided to sell only Apple's products.</p>
            <p>The store is located in Sokolov street Herzliya, and in addition we sell products online.&nbsp;</p>
            <p>>You are welcome to visit our site or come to see our store.&nbsp;</p>
            <p>Hope you will find whatever you need :)</p>
        </>
    )
}

export default AboutScreen