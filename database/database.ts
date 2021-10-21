
export type LoanStatus = 'open' | 'closed' | 'approved' | 'activated'

export type Loan = {
  id: number,
  name: string,
  amount: number,
  status: LoanStatus,
}

// Simple in-memory "database" of loans.
const loans: Loan[] = [
  { id: 1, name: 'Allison Huynh', status: 'open', amount: 101 },
  { id: 2, name: 'Derek Faulkner', status: 'open', amount: 102 },
  { id: 3, name: 'Evelyn Cordner', status: 'open', amount: 103 },
  { id: 4, name: 'Mark Shaw', status: 'open', amount: 104 },
]

export default loans