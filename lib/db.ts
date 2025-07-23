// Mock database connection
interface User {
  id: string
  name: string
  email: string
}

interface Session {
  id: string
  title: string
  date: string
  attendees: number
}

class Database {
  users: User[] = []
  sessions: Session[] = []

  async getUser(id: string): Promise<User | null> {
    return this.users.find((user) => user.id === id) || null
  }

  async getSessions(): Promise<Session[]> {
    return this.sessions
  }

  async createSession(session: Omit<Session, "id">): Promise<Session> {
    const newSession = {
      ...session,
      id: Math.random().toString(36).substr(2, 9),
    }
    this.sessions.push(newSession)
    return newSession
  }
}

export const db = new Database()
