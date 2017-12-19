import { Query } from './Query'
import { auth } from './Mutation/auth'
import { post } from './Mutation/post'
import { AuthPayload } from './AuthPayload'
import { scalars } from 'graphcool-binding'

export default {
  Query,
  Mutation: {
    ...auth,
    ...post,
  },
  AuthPayload,
  DateTime: scalars.DateTime,
}
