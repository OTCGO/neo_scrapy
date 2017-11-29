"use strict";
/**
 * Filename: /Users/wei/Desktop/otcgo/neo_wallet_analysis/web-server/src/graphql/models/address.ts
 * Path: /Users/wei/Desktop/otcgo/neo_wallet_analysis/web-server
 * Created Date: Thursday, November 23rd 2017, 4:31:49 pm
 * Author: qknow
 *
 * Copyright (c) 2017 otcgo.cn
 */
Object.defineProperty(exports, "__esModule", { value: true });
const graphql = require("graphql");
const transaction = new graphql.GraphQLObjectType({
    name: 'transaction',
    description: 'This is a transaction',
    fields: {
        _id: {
            type: graphql.GraphQLString
        },
        txid: {
            type: graphql.GraphQLString
        },
        to: {
            type: new graphql.GraphQLObjectType({
                name: 'toAddress',
                fields: {
                    value: {
                        type: graphql.GraphQLString
                    },
                    hash: {
                        type: graphql.GraphQLString
                    }
                }
            })
        },
        from: {
            type: new graphql.GraphQLObjectType({
                name: 'fromAddress',
                fields: {
                    value: {
                        type: graphql.GraphQLString
                    },
                    hash: {
                        type: graphql.GraphQLString
                    }
                }
            })
        },
        value: {
            type: graphql.GraphQLString
        },
        blockIndex: {
            type: graphql.GraphQLString
        },
        operation: {
            type: graphql.GraphQLString
        },
        contract: {
            type: graphql.GraphQLString
        },
        createdAt: {
            type: graphql.GraphQLString
        },
        updatedAt: {
            type: graphql.GraphQLString
        }
    }
});
exports.transaction = transaction;
//# sourceMappingURL=transaction.js.map