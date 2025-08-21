# Book Directory API

A simple **Node.js + Express + MongoDB CRUD API** for managing a book directory. Supports creating, reading, updating, and deleting books with proper error handling.

---

## Features
- **Create** a new book  
- **Read** all books or a single book by ID  
- **Update** book details  
- **Delete** a book  
- Centralized **error handling** (validation, duplicate ISBNs, invalid IDs, etc.)  

---

## Project Structure
```bash
├── config
│ └── db.js # Database connection
├── controllers/
│ └── bookController.js # CRUD logic
├── models/
│ └── bookModel.js # Mongoose schema
├── routes/
│ └── bookRoutes.js # Book routes
├── middleware/
│ └── errorHandler.js # Centralized error handler
├── utils/
│ └── ApiError.js # Custom error class
├── server.js # App entry point
└── package.json
```

---

## Installation & Setup

1. Clone the repo
   
   ```bash
   git clone https://github.com/renuthomas/book-directory.git
   cd book-directory
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Create a .env file and add your MongoDB URI
   
   ```
   DB_URI=mongodb://localhost:27017/bookdb
   PORT=4000
   ```
4. Start the server
   ```bash
   npm run start
   ```

## API Endpoints
Base URL: http://localhost:4000/api/v1/books

| Method | Endpoint | Description          |
|--------|----------|----------------------|
| GET    | `/`      | Get all books        |
| GET    | `/:id`   | Get book by ID       |
| POST   | `/`      | Create a new book    |
| PUT    | `/:id`   | Update a book (full) |
| DELETE | `/:id`   | Delete a book        |


## Example Book Object
```json
{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "publishedYear": 2008,
  "category": "Programming",
  "ISBN": "978-0132350884",
  "language": "English"
}
```
##  API Usage (Examples)
- Create a Book
```bash
curl -X POST http://localhost:4000/api/v1/books \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Clean Code",
    "author": "Robert C. Martin",
    "publishedYear": 2008,
    "category": "Programming",
    "ISBN": "978-0132350884",
    "language": "English"
  }'
  ```
- Get All Books

```bash
curl http://localhost:4000/api/v1/books
```
- Get a Book by ID

```bash
curl http://localhost:4000/api/v1/books/<BOOK_ID>
```
- Update a Book
```bash
curl -X PUT http://localhost:4000/api/v1/books/<BOOK_ID> \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Refactoring",
    "author": "Martin Fowler",
    "publishedYear": 2018,
    "category": "Software Engineering",
    "ISBN": "978-0201485677",
    "language": "English"
  }'
  ```
-  Delete a Book

```bash
curl -X DELETE http://localhost:4000/api/v1/books/<BOOK_ID>
```

## Error Handling
- 400 Bad Request → Invalid ID, missing/invalid fields
- 404 Not Found → Book not found
- 409 Conflict → Duplicate ISBN
- 500 Internal Server Error → Server/DB issue
