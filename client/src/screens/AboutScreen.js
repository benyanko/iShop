import React from "react"
import {Row, Col} from "react-bootstrap"
import Product from "../components/Product"
import Loader from "../components/Loader"
import Message from "../components/Message"

const AboutScreen = () => {

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