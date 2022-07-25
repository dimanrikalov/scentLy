#ScentLy

#Introduction

ScentLy is a MERN full-stack web application themed around fragrances. The functionality of the application covers the basic operations you would find in almost every web application (Create, Remove, Update, Delete). The app contains 3 collections on which you can execute these operations (User, Fragrance, Review) (MongoDB models are named identically). The main app folder is divided in 2 parts: "client" and "server".

    #Client
    The client folder is divided into "public" folder and a "src" folder. Inside the public folder you can expect to find common for the components css styles, html as well as other statics files. To be able to run the client part of the app, you will need to type "npm i" inside the console, within the "client" folder. The react app starts on port 3001.

    #Server
    The server folder aims to follow the MVC structure as much as possible, it consists of "config", "controllers", "models" and "service" folders as well as "index" and "router" files. "index.js" is the entry point for the server side of the application. The "config" folder is responsible for initializing the express app as well as the mongo database (mongoose). There you can find the settings to the ports as well as specific to the authentication process options. The express app starts on port 3000.

#Endpoints

0. Main URL: "http://localhost:3000"

1. Authentication:
    sub URL: "/auth"

1.1. Register:
    sub URL: "/register", 
    payload: 
        method: 'POST',
        credentials: 'include',
        headers: 'Content-Type': 'application/json',
        body: JSON.stringify(body),

        The body must include these key-value pairs:
        1. "email" : must meet the criteria "some-text@some-text.some-text"
        2. "name" : first and last names split by a single space. Example: "John Doe"
        3. "profileImage" : a profile image which is a valid URL link (starts with http:// or https://)
        4. "password" :  minimum length 4 characters
        5. "city" : (a string that starts with 1 capital letter, the rest must be lowercase, no spaces)
        6. "country": (a string that starts with 1 capital letter, the rest must be lowercase, no spaces)
        7. "age": must be in the range [10-100] inclusive
        8. "gender": a valid gender: ["male", "female"]

1.2. Login
    sub URL: "/login", 
    payload: 
        method: 'POST',
        credentials: 'include',
        headers: 'Content-Type': 'application/json',
        body: JSON.stringify(body),

        The body must include these key-value pairs:
        1. "email"
        2. "password"

1.3. Logout
    sub URL: "/logout" (GET request), deletes the cookie and logs out

2. Catalog:
    sub URL: "/catalog"

2.1 sub URL: "/" (GET request), returns all fragrances from the database

2.2 sub URL: "/reviews" (GET request), returns all fragrance reviews from the database

2.3 sub URL: "/search" (POST request)
    method: 'POST',
    headers: 'Content-Type': 'application/json',
    body: search value entered by user (for example a fragrance brand or name)
    
    returns all fragrances that have a name or brand that includes the input string

2.4 sub URL: "/create" (POST request)

    IMPORTANT: you cannot create if you are not logged in

    method: 'POST'
    headers: 'Content-Type': 'application/json',
    body: JSON.stringify(body).
    
    The body must include these key-value pairs:
    1. "name"
    2. "brand"
    3. "creator": (OPTIONAL)
    4. "imageUrl" : Must start with http:// or https://
    5. "topNotes" : (if multiple notes must be added split them by comma and a space!)
    6. "middleNotes" : (if multiple notes must be added split them by comma and a space!)
    7. "baseNotes" : (if multiple notes must be added split them by comma and a space!)
    8. "author" : the id of the user that is creating the fragrance
    
    returns an object { message: 'Successfully created!', user }
    where user is updated user that now has the fragrance saved to his collection

2.5 sub URL: "/:fragranceID/details"
    method: GET
    no body required
    returns all fragrance information related to the id from the req.params

2.6 sub URL: "/:fragranceID/edit"
    
    IMPORTANT: You cannot edit the fragrance if you did not create it in the first place
    
    method: POST
    headers: 'Content-Type': 'application/json',
    The body must include these key-value pairs:
    1. "name"
    2. "brand"
    3. "creator": (OPTIONAL)
    4. "imageUrl" : Must start with http:// or https://
    5. "topNotes" : (if multiple notes must be added split them by comma and a space!)
    6. "middleNotes" : (if multiple notes must be added split them by comma and a space!)
    7. "baseNotes" : (if multiple notes must be added split them by comma and a space!)

    returns the fragrance object after the changes

2.7 sub URL: "/:fragranceID/delete"

    IMPORTANT - deleting a fragrance automatically deletes all reviews tied to that fragrance!

    method: "GET"
    no body required
    if you are not the creator the request WILL NOT SUCCEED as for the other CRUD operations

    returns { [req.params.fragranceId]: 'deleted', creator }

2.8 sub URL: "/:fragranceID/review/create"

    IMPORTANT: The fragrance creator or a user that is not logged in cannot create a review

    method: "POST"
    headers: 'Content-Type': 'application/json',
    The body must include these key-value pairs:
    "description"
    "rating": MUST BE A NUMBER!
    "imageUrl": the same URL as the one with which the fragrance you are reviewing was created,
    "fragranceName": the name of the fragrance (the exact same as when the fragrance was created)
    "fragranceBrand": the brand of the fragrance (the exact same as when the fragrance was created)

    returns res.json({ [req.params.fragranceId]: 'reviewed', creator });

2.9 sub URL: "/:fragranceID/review/edit"

    IMPORTANT! - you must have already created a review to this fragranceID in order to be able to edit!
    
    method: POST
    headers: 'Content-Type': 'application/json',
    The body must include these key-value pairs:
    "fragrance": id to the fragrance you are reviewing
    "description": newly input description,
    "rating": newly input rating,
    "userId": your userID

    returns the fragrance of which you have edited the review

2.10 sub URL: ":fragranceID/review/delete"

    IMPORTANT! - you must have already created a review to this fragranceID in order to be able to delete!

    method: 'POST',
    headers: 'Content-Type': 'application/json'
    The body must include these key-value pairs:
    "userId": your userID

    returns { [req.params.fragranceId]: 'deleted', user, fragrance }

3. Profile:
    sub URL: "/profile/:userID"

    returns full information about the user with the corresponding id

4. About:
    sub URL: "/about"

    returns { userCount, fragranceCount, reviewsCount } (statistics about the database collections)