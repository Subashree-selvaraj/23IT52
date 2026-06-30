# Notification System Design

# Stage 1 

## Headers

```http
Authorization:Bearer <token>
Content-type: application/json
```

---

## list of API

1. Get all Notifications
2. Get Notification by ID
3. create Notification
4. Mark Notification as Read
5. Delete Notification
6. Mark All Notifications as Read
7. Get Notifications by Type
8. Get Unread Notifications Count

# 1. Get All Notifications

### Method

`GET`

### Endpoint

```http
/notifications
```

### Request

No request body.

### Response

```json
{
  "notifications": [
    {
      "ID": "<notification_id>",
      "Type": "<notification_type>",
      "Message": "<notification_message>",
      "Timestamp": "<YYYY-MM-DD HH:MM:SS>"
    }
  ]
}
```

---

# 2. Get Notification by ID

### Method

`GET`

### Endpoint

```http
/notifications/{id}
```

### Request

No request body

### Response

```json
{
  "ID": "<notification_id>",
  "Type": "<notification_type>",
  "Message": "<notification_message>",
  "Timestamp": "<YYYY-MM-DD HH:MM:SS>"
}
```

---

# 3. Create Notification

### Method

`POST`

### Endpoint

```http
/notifications
```

### Request

```json
{
  "Type": "<notification_type>",
  "Message": "<notification_message>"
}
```

### Response

```json
{
  "message": "Notification created successfully."
}
```

---

# 4. Mark Notification as Read

### Method

`PATCH`

### Endpoint

```http
/notifications/{id}/read
```

### Request

No request body .

### Response

```json
{
  "message": "Notification marked as read successfully."
}
```

---

# 5. Delete Notification

### Method

`DELETE`

### Endpoint

```http
/notifications/{id}
```

### Request

No request body .

### Response

```json
{
  "message": "Notification deleted successfully."
}
```

---

# 6. Mark All Notifications as Read

### Method

`PUT`

### Endpoint

```http
/notifications/read-all
```

### Request

No request body .

### Response

```json
{
  "message": "All notifications marked as read successfully."
}
```

---

# 7. Get Notifications by Type

### Method

`GET`

### Endpoint

```http
/notifications?type=<notification_type>
```

### Request

No request body.

### Response

```json
{
  "notifications": [
    {
      "ID": "<notification_id>",
      "Type": "<notification_type>",
      "Message": "<notification_message>",
      "Timestamp": "<YYYY-MM-DD HH:MM:SS>"
    }
  ]
}
```

---

# 8. Get Unread Notifications Count

### Method

`GET`

### Endpoint

```http
/notifications/unread-count
```

### Request

No request body.

### Response

```json
{
  "unreadCount": "<count>"
}
```