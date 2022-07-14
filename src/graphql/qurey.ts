import { gql, } from '@apollo/client';


export const GET_TRANSACTION = gql`
    query {
      allTransactions{
        id
        created_at
        TransactGroups{
          id
          name
          status
          type
          date
          transaction_id
        }
      } 
      }
    `


// export const GET_TRANSACTION_BY_FILTER = gql`
//   query  TransactGroup($type: String!) {
//     allTransactGroups(filter:{type: $type}){
//       id
//       date
//       name
//       status
//       type
//     }
//   }
// `



