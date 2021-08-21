link--->  https://infoware-assignment.herokuapp.com/    --> HELLO WORLD


A) For Website Owner:

Add account  

    //note --> provide unique email-ID
    method:"POST"                                                 
    ---> https://infoware-assignment.herokuapp.com/api/signup

    body:{
            "name":"Owner",
            "email":"Owner@gmail.com",
            "password":"password",
            "role":1
        }


Add products

    method:"GET"                                                              userID
    ---> https://infoware-assignment.herokuapp.com/api/addproduct/612155832f8e4e2654a634914

        body:{
            "name":"tv",
            "description":"new tv",
            "stock":20,
            "price":50000
        }

View Orders

    //note --> if End user, will show only that users orders
               if owner, will show all orders by all users

    method:"GET"                                                      userId  
    ---> https://infoware-assignment.herokuapp.com/api/orders/612155832f8e4e2654a63491

    Headers:{
        Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTIxNTU4MzJmOGU0ZTI2NTRhNjM0OTEiLCJpYXQiOjE2Mjk1NzU5NjIsImV4cCI6MTYyOTc5MTk2Mn0.o74gzUabUZDUnr7nr2Y27d7skY1Lu7ow5i9kVxrLV7E
    }



B)  For End Customers

Add account

    //note --> provide unique email-ID
    
    method:"POST"                                                 
    ---> https://infoware-assignment.herokuapp.com/api/signup
        body:{
            "name":"endUser",
            "email":"Enduser@gmail.com",
            "password":"password",
        }

Login

    method: "POST"
    --->https://infoware-assignment.herokuapp.com/api/signin

        body:{
            "email":"shershah@gmail.com",
            "password":"password"
        }


Browse Products

    method:"GET"
    --->https://infoware-assignment.herokuapp.com/api/products


Order products(no payment integration)

    method:"POST"                                                      userId           productId
    --->https://infoware-assignment.herokuapp.com/api/order/612158f188ff2c232452151d/6121566f59988c42cc4e40f3

    headers:{
        Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTIxNThmMTg4ZmYyYzIzMjQ1MjE1MWQiLCJpYXQiOjE2Mjk1NzU0MTgsImV4cCI6MTYyOTc5MTQxOH0.eV5gP0or_zVQ5hxSSlN6bbbkXf3qTSmbI5BBwgwvwhU
    }

View Orders

    //note --> if End user, will show only that users orders
               if owner, will show all orders by all users

        method:"GET"                                                      userId  
        ---> https://infoware-assignment.herokuapp.com/api/orders/612155832f8e4e2654a63491

        Headers:{
            Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTIxNTU4MzJmOGU0ZTI2NTRhNjM0OTEiLCJpYXQiOjE2Mjk1NzU5NjIsImV4cCI6MTYyOTc5MTk2Mn0.o74gzUabUZDUnr7nr2Y27d7skY1Lu7ow5i9kVxrLV7E
        }

