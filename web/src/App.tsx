// import { useEffect, useState } from 'react'

import { CreacteGoal } from './components/creacte-goal'
import { Summary } from './components/summary'
import { EmptyGoals } from './components/empty-goals'
import { Dialog } from './components/ui/dialog'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'

export default function App() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 1 min
  })

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreacteGoal />
    </Dialog>
  )
}
