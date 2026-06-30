# Notification System Design


# Stage 1

## Headers

All APIs require the following headers.

```http
Authorization: Bearer <token>
Content-Type: application/json
```

---

## API List

1. Get All Notifications
2. Get Notification by ID
3. Create Notification
4. Mark Notification as Read
5. Delete Notification
6. Mark All Notifications as Read
7. Get Notifications by Type
8. Get Unread Notifications Count

---

# 1. Get All Notifications

This API is used to fetch all notifications.

### Method

`GET`

### Endpoint

```http
/notifications
```

### Request

No request body is required.

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

This API is used to fetch a particular notification using its ID.

### Method

`GET`

### Endpoint

```http
/notifications/{id}
```

### Request

No request body is required.

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

This API is used to create a new notification.

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

This API is used to mark a notification as read.

### Method

`PATCH`

### Endpoint

```http
/notifications/{id}/read
```

### Request

No request body is required.

### Response

```json
{
  "message": "Notification marked as read successfully."
}
```

---

# 5. Delete Notification

This API is used to delete a notification.

### Method

`DELETE`

### Endpoint

```http
/notifications/{id}
```

### Request

No request body is required.

### Response

```json
{
  "message": "Notification deleted successfully."
}
```

---

# 6. Mark All Notifications as Read

This API is used to mark all notifications as read.

### Method

`PUT`

### Endpoint

```http
/notifications/read-all
```

### Request

No request body is required.

### Response

```json
{
  "message": "All notifications marked as read successfully."
}
```

---

# 7. Get Notifications by Type

This API is used to get notifications based on their type.

### Method

`GET`

### Endpoint

```http
/notifications?type=<notification_type>
```

### Request

No request body is required.

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

This API is used to get the number of unread notifications.

### Method

`GET`

### Endpoint

```http
/notifications/unread-count
```

### Request

No request body is required.

### Response

```json
{
  "unreadCount": "<count>"
}
```

---

# Stage 2 - Database Design

## 1. Database Selection

I would use **PostgreSQL** because it is reliable, secure and suitable for storing notification data. It also supports SQL queries and indexing, which helps in retrieving notifications quickly.

---

## 2. Database Schema

**Database:** PostgreSQL

**Table Name:** `Notifications`

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| ID | UUID | Unique notification ID |
| Type | VARCHAR(50) | Type of notification |
| Message | TEXT | Notification message |
| IsRead | BOOLEAN | Shows whether the notification is read or not |
| Timestamp | TIMESTAMP | Date and time of notification |

---

## 3. Challenges

When the number of notifications increases:

- Database size increases.
- Queries become slower.
- Searching and sorting notifications take more time.

---

## 4. Solutions

To improve performance:

- Create indexes.
- Use pagination.
- Archive old notifications.

---

## 5. SQL Queries

### Get All Notifications

```sql
SELECT * FROM Notifications;
```

### Get Notification by ID

```sql
SELECT * FROM Notifications
WHERE ID = '<notification_id>';
```

### Get Notifications by Type

```sql
SELECT * FROM Notifications
WHERE Type = 'Placement';
```

### Get Unread Notifications

```sql
SELECT * FROM Notifications
WHERE IsRead = FALSE;
```

### Mark Notification as Read

```sql
UPDATE Notifications
SET IsRead = TRUE
WHERE ID = '<notification_id>';
```

### Delete Notification

```sql
DELETE FROM Notifications
WHERE ID = '<notification_id>';
```
