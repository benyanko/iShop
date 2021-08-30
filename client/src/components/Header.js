import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import { logout } from '../actions/userActions'


const Header = () => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>
            <Navbar bg='light' variant='light' expand='lg' collapseOnSelect>
                <Container>
                    <LinkContainer to={'/'}>
                        <Navbar.Brand>iShop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {userInfo && (
                            <LinkContainer to={'/cart'}>
                                <Nav.Link>
                                  <i className='fas fa-shopping-cart'></i> Cart
                                </Nav.Link>
                            </LinkContainer>)}
                            {userInfo && (
                            <LinkContainer to={'/about'}>
                                <Nav.Link>
                                    About
                                </Nav.Link>
                            </LinkContainer> )}
                            <NavDropdown title='Readme' id='readme'>
                                <LinkContainer to='/benreadme'>
                                    <NavDropdown.Item>Ben Readme</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/yuvalreadme'>
                                    <NavDropdown.Item>Yuval Readme</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            {userInfo ? (
                                <NavDropdown  title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <LinkContainer to='/login'>
                                    <Nav.Link>
                                        <i className='fas fa-user'></i> Sign In
                                    </Nav.Link>
                                </LinkContainer>
                            )}
                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenu'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header