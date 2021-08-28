import React from "react"

const YuvalReadmeScreen = () => {

    return (
        <>
            <h1>
                Latest Products
            </h1>
                <h3>Store Name</h3>
            <p>iShop</p>
            <p>&nbsp;</p>
                <h4>What are you selling</h4>
            <p>We sell Apple Products- Iphone, Ipad, Airpods, Macbook etc...</p>
            <p>&nbsp;</p>
                <h4>What additional page(s) did you add?</h4>
            <p>-&nbsp;User Profile Screen: Show&nbsp;orders history and track orders.&nbsp;</p>
            <p>- Admin Orders Screen: Display all the orders of the store.</p>
            <p>- Order Screen: Display order's details for a user, mark as delieverd functionality for Admin.</p>
            <p>- About Page: Which tells our story and why we started sell Apple products.</p>
            <p>&nbsp;</p>
                <h4>How to operate the additional pages?</h4>
            <p>-&nbsp;User Profile Screen: After user login, his name will display on the menu, by clicking the name profile button will be displayed.</p>
            <p>- Admin Orders Screen: After admin login, an admin button will display on the menu. By clicking the button will be display Order Button.</p>
            <p>- Order Screen: After user/admin login, can access order by clicking the&nbsp;desired order in the order list, for admin will display "mark as delievered button"</p>
            <p>- About Page: button at menu&nbsp;page which each button will take you to the relevant page</p>
            <p>&nbsp;</p>
                <h4>What was hard to do?</h4>
            <p>The part that was hard for me was working with the database. Until this project all my knowledge about Data was only in theory and this is actually the first time I used Data with my project.</p>
            <p>It was challenging for me to understand how to work with Data on a practical level but I finally learned a lot of tools which I am sure will help me along the way</p>
            <p>&nbsp;</p>
                <h4>Who is your partner?</h4>
            <p>Ben Yankovich - 316491323</p>
            <p>&nbsp;</p>
                <h4>What did you do?</h4>
            <p>- Products logic: Build the product model(the properties of each product), controllers and routes.</p>
            <p>- Create database for the products of our store and connect it to the project.&nbsp;</p>
            <p>-Additional pages: Build the additional pages: User Profile Screen, Admin Orders Screen, Order Screen and About page.</p>
            <p>-UI: Design pages. &nbsp;</p>
            <p>&nbsp;</p>
                <h4>What did your partner do?</h4>
            <p>-Planning and design the store architecture: Plan how the should look like, the connection between models and more.</p>
            <p>- User login authentication: Create hierarchy between user and admin with differnet permissions.&nbsp;</p>
            <p>- Implement Redux in our project: User login, Cart, Order and more.</p>
            <p>-UI: Design pages. &nbsp;</p>
            <p>&nbsp;</p>
                <h4>Specify all the different routes your app supports</h4>
            <pre><br />route   GET /api/orders/:id<br />desc    Get order by ID<br />access  Private</pre>
            <pre>route   GET /api/orders/:id/deliver<br />desc    Update order to delivered<br />access  Private/Admin</pre>
            <pre>route   GET /api/orders/myorders<br />desc    Get logged in user orders<br />access  Private</pre>
            <pre>route   GET /api/orders<br />desc    Get all orders<br />access  Private/Admin</pre>
            <pre>route   POST /api/orders<br />desc    Create new order<br />access  Private</pre>
            <pre>router  GET api/products<br />desc    Get all products<br />access  Public</pre>
            <pre>router  GET api/products/:id<br />desc    Get single product<br />access  Public</pre>
            <pre>router  GET api/users/profile<br />desc    Get user profile<br />access  Private</pre>
            <pre>desc    Get all users<br />route   GET /api/users<br />access  Private/Admin</pre>
            <pre>router  POST api/users/login<br />desc    Auth user &amp; get token<br />access  Public</pre>
            <pre>router  POST api/users<br />desc    Register new user<br />access  Public</pre>
            <pre>&nbsp;</pre>
        </>
    )
}

export default YuvalReadmeScreen