# polyproto-chat Extension Specification

:::danger

This specification document is wildly **incomplete and outdated**! It needs to be (and will be) reworked and does not
represent the current state of polyproto-chat.

Please check out [the OpenAPI specification(s)](https://github.com/polyphony-chat/typespec-openapi/tree/main/build/3.1.0)
of polyproto-chat instead, as they provide a much better overview of currently thought-of APIs and
behaviors.

:::

**Namespace:** `chat`

**Version:** `v1.0-alpha.1`

**Base Path:** `/.p2/chat/v1/`

polyproto-chat is a federated chat service for communities, built on the polyproto protocol.
This specification defines the HTTP API endpoints for core chat functionality including guilds,
channels, messages, and user management.

## Authentication and Authorization

All endpoints requiring authentication use Bearer token authentication as defined in the polyproto core specification. Session tokens are obtained through the core authentication flow and ID-Cert verification process.

### Authorization Levels

-   **Public**: No authentication required
-   **Authenticated**: Requires valid session token
-   **Guild Member**: Requires guild membership
-   **Guild Admin**: Requires administrative permissions in guild
-   **Server Admin**: Requires server-wide administrative permissions

## Core Entities

### Guild Object

```json
{
    "id": "string",
    "name": "string",
    "description": "string",
    "icon": "string",
    "owner_id": "string",
    "created_at": "number",
    "member_count": "number",
    "features": ["string"]
}
```

### Channel Object

```json
{
    "id": "string",
    "guild_id": "string",
    "name": "string",
    "type": "number",
    "position": "number",
    "topic": "string",
    "parent_id": "string",
    "created_at": "number",
    "permissions": {}
}
```

### Message Object

```json
{
    "id": "string",
    "channel_id": "string",
    "author": {},
    "content": "string",
    "timestamp": "number",
    "edited_timestamp": "number",
    "signature": "string",
    "id_cert": "string",
    "attachments": [],
    "embeds": [],
    "reactions": []
}
```

## Guild Management

### Get Guild Information

**GET** `/.p2/chat/v1/guilds/{guild_id}`

Retrieve information about a specific guild.

**Parameters:**

-   `guild_id` (path, required): The ID of the guild

**Authorization:** Public for discoverable guilds, Guild Member for private guilds

**Responses:**

-   `200`: Guild object
-   `403`: Access forbidden
-   `404`: Guild not found

### Create Guild

**POST** `/.p2/chat/v1/guilds`

Create a new guild. Requires authentication.

**Authorization:** Authenticated

**Request Body:**

```json
{
    "name": "string",
    "description": "string",
    "icon": "string"
}
```

**Responses:**

-   `201`: Guild created successfully
-   `400`: Invalid request body
-   `403`: Insufficient permissions

### Update Guild

**PATCH** `/.p2/chat/v1/guilds/{guild_id}`

Update guild settings. Requires guild administrative permissions.

**Parameters:**

-   `guild_id` (path, required): The ID of the guild

**Authorization:** Guild Admin

**Request Body:**

```json
{
    "name": "string",
    "description": "string",
    "icon": "string"
}
```

**Responses:**

-   `200`: Guild updated successfully
-   `403`: Insufficient permissions
-   `404`: Guild not found

### Delete Guild

**DELETE** `/.p2/chat/v1/guilds/{guild_id}`

Delete a guild. Only the guild owner can perform this action.

**Parameters:**

-   `guild_id` (path, required): The ID of the guild

**Authorization:** Guild Owner

**Headers:**

-   `X-P2-Sensitive-Solution` (required): Second factor authentication for sensitive action

**Responses:**

-   `204`: Guild deleted successfully
-   `403`: Insufficient permissions
-   `404`: Guild not found

## Channel Management

### Get Guild Channels

**GET** `/.p2/chat/v1/guilds/{guild_id}/channels`

Retrieve all channels in a guild.

**Parameters:**

-   `guild_id` (path, required): The ID of the guild

**Authorization:** Guild Member

**Responses:**

-   `200`: Array of channel objects
-   `403`: Access forbidden
-   `404`: Guild not found

### Create Channel

**POST** `/.p2/chat/v1/guilds/{guild_id}/channels`

Create a new channel in a guild.

**Parameters:**

-   `guild_id` (path, required): The ID of the guild

**Authorization:** Guild Admin

**Request Body:**

```json
{
    "name": "string",
    "type": "number",
    "topic": "string",
    "parent_id": "string"
}
```

**Responses:**

-   `201`: Channel created successfully
-   `400`: Invalid request body
-   `403`: Insufficient permissions

### Update Channel

**PATCH** `/.p2/chat/v1/channels/{channel_id}`

Update channel settings.

**Parameters:**

-   `channel_id` (path, required): The ID of the channel

**Authorization:** Guild Admin

**Request Body:**

```json
{
    "name": "string",
    "topic": "string",
    "position": "number"
}
```

**Responses:**

-   `200`: Channel updated successfully
-   `403`: Insufficient permissions
-   `404`: Channel not found

### Delete Channel

**DELETE** `/.p2/chat/v1/channels/{channel_id}`

Delete a channel.

**Parameters:**

-   `channel_id` (path, required): The ID of the channel

**Authorization:** Guild Admin

**Responses:**

-   `204`: Channel deleted successfully
-   `403`: Insufficient permissions
-   `404`: Channel not found

## Message Management

### Get Channel Messages

**GET** `/.p2/chat/v1/channels/{channel_id}/messages`

Retrieve messages from a channel with optional pagination.

**Parameters:**

-   `channel_id` (path, required): The ID of the channel
-   `limit` (query, optional): Maximum number of messages to return (default: 50, max: 100)
-   `before` (query, optional): Get messages before this message ID
-   `after` (query, optional): Get messages after this message ID

**Authorization:** Guild Member

**Responses:**

-   `200`: Array of message objects
-   `403`: Access forbidden
-   `404`: Channel not found

### Send Message

**POST** `/.p2/chat/v1/channels/{channel_id}/messages`

Send a message to a channel. Messages must be signed with the actor's private key.

**Parameters:**

-   `channel_id` (path, required): The ID of the channel

**Authorization:** Guild Member

**Request Body:**

```json
{
    "content": "string",
    "signature": "string",
    "id_cert": "string",
    "attachments": []
}
```

**Responses:**

-   `201`: Message sent successfully
-   `400`: Invalid message content or signature
-   `403`: Insufficient permissions
-   `404`: Channel not found

### Edit Message

**PATCH** `/.p2/chat/v1/channels/{channel_id}/messages/{message_id}`

Edit a previously sent message. Only the message author can edit their messages.

**Parameters:**

-   `channel_id` (path, required): The ID of the channel
-   `message_id` (path, required): The ID of the message

**Authorization:** Message Author

**Request Body:**

```json
{
    "content": "string",
    "signature": "string"
}
```

**Responses:**

-   `200`: Message edited successfully
-   `400`: Invalid content or signature
-   `403`: Insufficient permissions
-   `404`: Message not found

### Delete Message

**DELETE** `/.p2/chat/v1/channels/{channel_id}/messages/{message_id}`

Delete a message. Authors can delete their own messages, administrators can delete any message.

**Parameters:**

-   `channel_id` (path, required): The ID of the channel
-   `message_id` (path, required): The ID of the message

**Authorization:** Message Author or Guild Admin

**Responses:**

-   `204`: Message deleted successfully
-   `403`: Insufficient permissions
-   `404`: Message not found

## Guild Membership

### Get Guild Members

**GET** `/.p2/chat/v1/guilds/{guild_id}/members`

Retrieve guild member list with optional pagination.

**Parameters:**

-   `guild_id` (path, required): The ID of the guild
-   `limit` (query, optional): Maximum number of members to return (default: 100)
-   `after` (query, optional): Get members after this user ID

**Authorization:** Guild Member

**Responses:**

-   `200`: Array of member objects
-   `403`: Access forbidden
-   `404`: Guild not found

### Join Guild

**POST** `/.p2/chat/v1/guilds/{guild_id}/members`

Join a guild using an invite code or if the guild is public.

**Parameters:**

-   `guild_id` (path, required): The ID of the guild

**Authorization:** Authenticated

**Request Body:**

```json
{
    "invite_code": "string"
}
```

**Responses:**

-   `201`: Successfully joined guild
-   `400`: Invalid invite code
-   `403`: Cannot join guild
-   `404`: Guild not found

### Leave Guild

**DELETE** `/.p2/chat/v1/guilds/{guild_id}/members/@me`

Leave a guild.

**Parameters:**

-   `guild_id` (path, required): The ID of the guild

**Authorization:** Guild Member

**Responses:**

-   `204`: Successfully left guild
-   `404`: Guild not found or not a member

### Kick Member

**DELETE** `/.p2/chat/v1/guilds/{guild_id}/members/{user_id}`

Remove a member from the guild.

**Parameters:**

-   `guild_id` (path, required): The ID of the guild
-   `user_id` (path, required): The federation ID of the user to kick

**Authorization:** Guild Admin

**Responses:**

-   `204`: Member kicked successfully
-   `403`: Insufficient permissions
-   `404`: Guild or member not found

## Direct Messages

### Create DM Channel

**POST** `/.p2/chat/v1/users/@me/channels`

Create or retrieve a direct message channel with another user.

**Authorization:** Authenticated

**Request Body:**

```json
{
    "recipient_id": "string"
}
```

**Responses:**

-   `200`: Existing DM channel
-   `201`: New DM channel created
-   `400`: Invalid recipient
-   `404`: User not found

### Get DM Channels

**GET** `/.p2/chat/v1/users/@me/channels`

Retrieve all direct message channels for the authenticated user.

**Authorization:** Authenticated

**Responses:**

-   `200`: Array of DM channel objects

## File Attachments

### Upload Attachment

**POST** `/.p2/chat/v1/attachments`

Upload a file attachment using the RawR resource system.

**Authorization:** Authenticated

**Headers:**

-   `Content-Length` (required): Size of the file in bytes

**Request Body:** Binary file data

**Responses:**

-   `201`: File uploaded successfully with resource ID
-   `413`: File too large
-   `415`: Unsupported file type

### Get Attachment

**GET** `/.p2/chat/v1/attachments/{resource_id}`

Retrieve a file attachment by resource ID.

**Parameters:**

-   `resource_id` (path, required): The resource ID of the attachment

**Authorization:** Context-dependent based on message permissions

**Responses:**

-   `200`: File data
-   `403`: Access forbidden
-   `404`: Attachment not found

## Guild Invites

### Create Invite

**POST** `/.p2/chat/v1/channels/{channel_id}/invites`

Create an invite for a guild channel.

**Parameters:**

-   `channel_id` (path, required): The ID of the channel

**Authorization:** Guild Member with invite permissions

**Request Body:**

```json
{
    "max_age": "number",
    "max_uses": "number",
    "temporary": "boolean"
}
```

**Responses:**

-   `201`: Invite created successfully
-   `403`: Insufficient permissions
-   `404`: Channel not found

### Get Guild Invites

**GET** `/.p2/chat/v1/guilds/{guild_id}/invites`

Retrieve all active invites for a guild.

**Parameters:**

-   `guild_id` (path, required): The ID of the guild

**Authorization:** Guild Admin

**Responses:**

-   `200`: Array of invite objects
-   `403`: Insufficient permissions
-   `404`: Guild not found

### Delete Invite

**DELETE** `/.p2/chat/v1/invites/{invite_code}`

Delete/revoke an invite.

**Parameters:**

-   `invite_code` (path, required): The invite code to revoke

**Authorization:** Guild Admin or Invite Creator

**Responses:**

-   `204`: Invite deleted successfully
-   `403`: Insufficient permissions
-   `404`: Invite not found

## WebSocket Events

polyproto-chat extends the core WebSocket protocol with chat-specific events. Clients must subscribe to the `chat` service channel to receive these events.

### Chat Opcodes

| Opcode | Name                | Description                     |
| :----- | :------------------ | :------------------------------ |
| `0`    | Message Create      | New message sent in a channel   |
| `1`    | Message Update      | Message was edited              |
| `2`    | Message Delete      | Message was deleted             |
| `3`    | Channel Create      | New channel created             |
| `4`    | Channel Update      | Channel was updated             |
| `5`    | Channel Delete      | Channel was deleted             |
| `6`    | Guild Member Add    | User joined guild               |
| `7`    | Guild Member Remove | User left/was kicked from guild |
| `8`    | Guild Update        | Guild settings updated          |
| `9`    | Typing Start        | User started typing             |

## Error Handling

All endpoints follow standard HTTP status codes and return error objects in the following format:

```json
{
    "error": "string",
    "message": "string",
    "code": "number"
}
```

## Rate Limiting

Rate limits are applied per authenticated user and follow Discord-like patterns:

-   Message sending: 5 messages per 5 seconds per channel
-   Channel creation: 5 channels per 5 minutes per guild
-   Guild operations: 5 operations per minute

Rate limit headers are included in responses:

-   `X-RateLimit-Limit`: Request limit for the endpoint
-   `X-RateLimit-Remaining`: Remaining requests in current window
-   `X-RateLimit-Reset`: Time when rate limit resets
