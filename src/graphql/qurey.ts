import { gql, } from '@apollo/client';

//GET CYPTO PRICE IN EUR
export const PRICE_RATES = gql`
    query price($coinCode:  String!) {
       markets(filter:{ baseSymbol: {_eq:  $coinCode} quoteSymbol: {_in:"EUR"} marketStatus: { _eq: Active }}) {
          marketSymbol
          id
          ticker {
            lastPrice
          }
        }
      }
    `

