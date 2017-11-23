/**
 * Filename: /Users/wei/Desktop/otcgo/neo_wallet_analysis/web-server/src/graphql/models/address.ts
 * Path: /Users/wei/Desktop/otcgo/neo_wallet_analysis/web-server
 * Created Date: Thursday, November 23rd 2017, 4:31:49 pm
 * Author: qknow
 *
 * Copyright (c) 2017 otcgo.cn
 */


import * as graphql from 'graphql'

const address = new graphql.GraphQLObjectType({
  name: 'address',
  description: 'This is a address',
  fields: {
    _id: {
      type: graphql.GraphQLString
    },
    txid: {
      type: graphql.GraphQLString
    },
    to: {
      type: graphql.GraphQLString
    },
    from: {
      type: graphql.GraphQLString
    },
    value: {
      type: graphql.GraphQLInt
    },
    blockIndex: {
      type: graphql.GraphQLString
    },
    operation: {
      type: graphql.GraphQLString
    },
    createdAt: {
      type: graphql.GraphQLString
    },
    updatedAt: {
      type: graphql.GraphQLString
    }
  }
})

export { address }