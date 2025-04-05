# 📌 ToDo API Documentation

**Root URL:** `https://todo-list.dcism.org`

---

## 🔐 Sign Up

**Method:** `POST`  
**Route:** `/signup_action.php`  

**Request Body:**

```json
{
  "firstName": "ChizB",
  "lastName": "Beloy",
  "email": "chizray@gmail.com",
  "password": "123456",
  "confirm_password": "123456"
}
```

**Success Response:**

```json
{
  "status": 200,
  "message": "Account created successfully."
}
```

**Error Response:**

```json
{
  "status": 400,
  "message": "Email already exists."
}
```

---

## 🔓 Sign In

**Method:** `GET`  
**Route:** `/signin_action.php`

**Parameters:**

- `email`
- `password`

**Sample Request:**
```
/signin_action.php?email=cbelarmino@usc.edu.ph&password=123456
```

**Success Response:**

```json
{
  "status": 200,
  "data": {
    "id": 4,
    "fname": "Chris Ray",
    "lname": "Belarmino",
    "email": "cbelarmino@usc.edu.ph",
    "timemodified": "2025-03-31 15:14:00"
  },
  "message": "Success"
}
```

**Error Response:**

```json
{
  "status": 400,
  "message": "Account does not exists."
}
```

---

## 📄 Get To Do Task (active or inactive)

**Method:** `GET`  
**Route:** `/getItems_action.php`  

**Parameters:**

- `status` (`active` or `inactive`)
- `user_id`

**Sample Request:**
```
/getItems_action.php?status=active&user_id=3
```

**Success Response:**

```json
{
  "status": 200,
  "data": {
    "0": {
      "item_id": 4,
      "item_name": "Final Exam",
      "item_description": "CIS 1101 Prog 1 Final Exam",
      "status": "active",
      "user_id": 3,
      "timemodified": "2025-03-31 15:14:00"
    },
    "1": {
      "item_id": 5,
      "item_name": "Final Exam Tomorrow",
      "item_description": "CIS 1204 IM 1 Final Exam",
      "status": "active",
      "user_id": 3,
      "timemodified": "2025-03-31 15:14:00"
    }
  },
  "count": "2"
}
```

---

## ➕ Add To Do Task

**Method:** `POST`  
**Route:** `/addItem_action.php`

**Request Body:**

```json
{
  "item_name": "Final Exam",
  "item_description": "CIS 1101 Prog 1 Final Exam",
  "user_id": 3
}
```

**Success Response:**

```json
{
  "status": 200,
  "data": {
    "item_id": 4,
    "item_name": "Final Exam",
    "item_description": "CIS 1101 Prog 1 Final Exam",
    "status": "active",
    "user_id": 3,
    "timemodified": "2025-03-31 15:14:00"
  },
  "message": "Item added successfully"
}
```

---

## ✏️ Update To Do Task

**Method:** `PUT`  
**Route:** `/editItem_action.php`

**Request Body:**

```json
{
  "item_name": "Final Exam",
  "item_description": "CIS 1101 Prog 1 Final Exam",
  "user_id": 3
}
```

**Success Response:**

```json
{
  "status": 200,
  "message": "Item updated"
}
```

---

## 🔄 Change To Do Task Status

**Method:** `PUT`  
**Route:** `/statusItem_action.php`

**Request Body:**

```json
{
  "status": "active", // or "inactive"
  "item_id": 44
}
```

**Success Response (active):**

```json
{
  "status": 200,
  "message": "To do item activated."
}
```

**Success Response (inactive):**

```json
{
  "status": 200,
  "message": "To do item done."
}
```

---

## ❌ Delete To Do Task

**Method:** `DELETE`  
**Route:** `/deleteItem_action.php`

**Parameters:**

- `item_id`

**Sample Request:**
```
/deleteItem_action.php?item_id=6
```

**Success Response:**

```json
{
  "status": 200,
  "message": "Item deleted"
}
```
