"# Book-Record-Management-Build" 

Server >> Storing the certain book data
       >>User Register
       >>Subscriber

   this is a book record management API server/backend for the library system or management of records or manuals or books

# Routers and EndPoints

## /users 
POST: to create a new users
GET: to get all user info

## /users/{id}
GET:to get a user by id
PUT: to update a user by their Id
DELETE: delete a user by id ( check if user still have an issued dooks) && (is there any fine to paid)

## /users/subscription-details/{id}
GET: to get user subscription details
    >> date of subscription
    >> Valid till 
    >>is there any fine

## /books
GET: get all books info
POST:create/add the books

## /books/{id}
GET:get a book by id
POST: Update a book id

## /books/issued
GET:get all issued books

## /books/issued/withFine
GET:gat all issued books with their fine


Fine System:
user : 30-04-2024 - 29-07-2024
02-08-2024 -> 50*3 = 150/-

## subscription Types
3 months (Basics)
6 months (Standard)
1 years (Premium)