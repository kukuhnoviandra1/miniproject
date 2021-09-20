API DOCUMENTATION

Simple application Online hotels

RESTFUL Endpoints

---USER---

---GET /users

Get all users
-Request
    - Request Header : none
    - Request Body : none
-Response
    - Succes (200)
[
    {
        id: <user_id>,
        name: <user.name>
        age: <user.age>
        gender: <user.gender>
        createdAt: <user.created>
        updatedAt: <user.updated>
    }
]
    -Failure (500)
{
    message: <internal_memory_error>
}

---GET /users/register

Get register page
-Request
    - Request Header : none
    - Request Body : none
-Response
    - Succes (200)
[
    {
        id: <user_id>,
        name: <user.name>
        age: <user.age>
        gender: <user.gender>
        createdAt: <user.created>
        updatedAt: <user.updated>
    }
]
    -Failure (500)
{
    message: <internal_memory_error>
}

---POST /rooms/register

Post to register
-Request
    - Request Header : none
    - Request Body :
-Response
    - Succes (201)
[
    {
        name: <user.name>
        age: <user.age>
        gender: <user.gender>
        email: <user.email>

    }
]
    -Failure (500)
{
    message: <internal_memory_error>
}

---GET /delete/:id

Get To delete by Id
-Request
    - Request Header : none
    - Request Body : none
-Response
    - Succes (201)
{
     "access_token": "<room.access_token>"
}
    -500: (Internal Server Eror)
    {
  "message": "<Internal Server Error>"
}

---GET /update/:id
Get To Update user by Id
    - Request Header : none
    - Request Body : 
[
    {
        name: <user.name>
        age: <usr.age>
        gender: <user.gender>
        email: <user.mail>
        createdAt: <room.created>
        updatedAt: <room.updated>

    }
]
-Response
    - Success (201)

    -Failure (500)
{
    message: <internal_memory_error>
}
---POST update/:id
    - Request Header : none
    - Request Body : 
-Response
    - Succes (201)
[
    {
        name: <user.name>
        age: <user.age>
        gender: <user.gender>
        email: <user.email>
    }
]
    -Failure (500)
{
    message: <internal_memory_error>
}


---ROOM---

---GET /rooms/add

Get all room
-Request
    - Request Header : none
    - Request Body : none
-Response
    - Success (200)
[
    {
        id: <room_id>,
        name: <room.name>
        type: <room.type>
        status: <room.status>
        createdAt: <room.created>
        updatedAt: <room.updated>
    }
]
    -Failure (500)
{
    message: <internal_memory_error>
}

---POST /rooms/add

POST all room
-Request
    - Request Header : none
    - Request Body :
-Response
    - Succes (201)
[
    {
        id: <room_id>,
        name: <room.name>
        type: <room.type>
    }
]
    -Failure (500)
{
    message: <internal_memory_error>
}

---POST /delete/id

POST to delete by id
-Request
    - Request Header : none
    - Request Body :none
-Response
    - Success (200)

    -Failure (500)
{
    message: <internal_memory_error>
}

---GET rooms/update/:id

GET to update by id
-Request
    - Request Header : none
    - Request Body :
    [
    {
        id: <room_id>,
        name: <room.name>
        type: <room.type>
    }
]
-Response
    - Success (200)

    -Failure (500)
{
    message: <internal_memory_error>
}

---BOOK---

---GET /books

Get all books info
-Request
    - Request Header : none
    - Request Body : none
-Response
    - Success (200)
[
    {
        id: <book_id>,
        RoomId: <room.RoomId>
        UserId: <room.UserId>
        dateIn: <room.dateIn>
        dateOut: <room.dateOut>
        createdAt: <room.created>
        updatedAt: <room.updated>
    }
]
    -Failure (500)
{
    message: <internal_memory_error>
}

---GET /booking

Get all books of booking info
-Request
    - Request Header : none
    - Request Body : 
[
    {
        id: <book_id>,
        RoomId: <room.RoomId>
        UserId: <room.UserId>
        dateIn: <room.dateIn>
        dateOut: <room.dateOut>
    }
]
-Response
    - Success (200)

    -Failure (500)
{
    message: <internal_memory_error>
}

---POST /booking

Post all books of booking info
-Request
    - Request Header : none
    - Request Body : 
[
    {
        id: <book_id>,
        RoomId: <room.RoomId>
        UserId: <room.UserId>
    }
]
-Response
    - Success (201)

    -Failure (500)
{
    message: <internal_memory_error>
}

---GET /books/delete/:id

Deleet room of booking info
-Request
    - Request Header : none
    - Request Body : none
-Response
    - Success (200)

    -Failure (500)
{
    message: <internal_memory_error>
}