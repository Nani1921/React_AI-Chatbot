// Message object structure
// id: string - Unique identifier for the message
// content: string - The content of the message
// role: 'user' | 'assistant' - Role of the message sender
// timestamp: number - The time when the message was created (in milliseconds)
export class Message {
    constructor(id, content, role, timestamp) {
      this.id = id;             // Unique identifier
      this.content = content;   // Message content
      this.role = role;         // Role ('user' or 'assistant')
      this.timestamp = timestamp; // Timestamp
    }
  }
  
  // Chat object structure
  // id: string - Unique identifier for the chat
  // title: string - Title of the chat
  // messages: Message[] - Array of messages in the chat
  // createdAt: number - The time when the chat was created (in milliseconds)
  export class Chat {
    constructor(id, title, messages = [], createdAt) {
      this.id = id;               // Unique identifier
      this.title = title;         // Chat title
      this.messages = messages;   // Array of Message objects
      this.createdAt = createdAt; // Timestamp
    }
  }
  
  // User object structure
  // id: string - Unique identifier for the user
  // name: string - Name of the user
  // email: string - Email of the user
  // avatar: string - URL to the user's avatar image
  export class User {
    constructor(id, name, email, avatar) {
      this.id = id;           // Unique identifier
      this.name = name;       // User's name
      this.email = email;     // User's email
      this.avatar = avatar;   // Avatar image URL
    }
  }
  