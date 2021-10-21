import {
  MutationResolvers,
  QueryResolvers,
  Resolvers,
} from 'graphql/__generated__/resolvers-types'
import loans from '../database/database'

const queryResolvers: QueryResolvers = {
  loans: (parent, args) => {
    return loans
  },
}

const mutationResolvers: MutationResolvers = {
  updateLoan: (parent, args) => {
    throw new Error("unimplemented")
  },
}

const loanResolvers: Resolvers = {
  Query: queryResolvers,
  Mutation: mutationResolvers,
}

const resolvers = [loanResolvers]

export default resolvers
