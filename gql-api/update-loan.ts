import { gql, useMutation } from '@apollo/client'
import { GraphQLError } from 'graphql'
import {
  UpdateLoanMutation,
  UpdateLoanMutation_updateLoan,
} from 'gql-api/__generated__/UpdateLoanMutation'
import { LoanStatus } from '../graphql/__generated__/resolvers-types'

const UPDATE_LOAN = gql`
  mutation UpdateLoanMutation($id: Int!, $newStatus: LoanStatus!) {
    updateLoan(id: $id, newStatus: $newStatus) {
      id
      status
    }
  }
`

/**
 * Hook to update the status of a loan
 */
export function useUpdateLoan(): (id: number, newStatus: LoanStatus) => Promise<
  [loan?: UpdateLoanMutation_updateLoan, errors?: readonly GraphQLError[]]
> {
  const [updateLoan] = useMutation<UpdateLoanMutation>(UPDATE_LOAN, {
    errorPolicy: 'all',
  })

  return async (id: number, newStatus: LoanStatus) => {
    const result = await updateLoan({variables: {id, newStatus}})

    if (result.errors) {
      console.error(
        `Failed to open loan, errors: ${JSON.stringify(
          result.errors.map((e) => e.message)
        )}`
      )
      return [undefined, result.errors]
    }

    if (result.data) {
      return [result.data.updateLoan]
    }

    return [undefined, undefined]
  }
}
