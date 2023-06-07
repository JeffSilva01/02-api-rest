// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Table {
    transactions: {
      id: number
      title: string
      amount: string
      session_id?: string
      created_at: string
    }
  }
}
