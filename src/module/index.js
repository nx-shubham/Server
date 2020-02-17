import { Query } from './validateUser';
import Mutation from './validateUser/mutation';

export default {
  Query: {
    ...Query,
  },
  Mutation: {
     ...Mutation
  }
};