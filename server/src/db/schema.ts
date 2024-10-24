import { pgTable, text, integer, timestamp } from 'drizzle-orm/pg-core'
import { createId } from '@paralleldrive/cuid2'

export const goals = pgTable('goals', {
  // aqui estamos usando uma biblioteca para gerar ids unicos [https://github.com/paralleldrive/cuid2]
  id: text('id')
    .primaryKey()
    .$default(() => createId()),
  title: text('title').notNull(),
  desiredWeeklyFrequency: integer('desired_weekly_frequency').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
})

export const goalCompletions = pgTable('goal_completions', {
  // aqui estamos usando uma biblioteca para gerar ids unicos [https://github.com/paralleldrive/cuid2]
  id: text('id')
    .primaryKey()
    .$default(() => createId()),
  goalId: text('goal_id')
    .references(() => goals.id)
    .notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
})
