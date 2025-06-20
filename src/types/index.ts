// Global type definitions
export interface User {
  id: string
  email: string
  created_at: string
}

export interface Database {
  public: {
    Tables: Record<string, unknown>
  }
}
