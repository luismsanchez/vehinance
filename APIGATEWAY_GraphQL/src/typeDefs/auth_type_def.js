const { gql } = require('apollo-server');


const authTypeDefs = gql`
    input LoginInput {
        username: String!
        password: String!
    }

    input SignupInput{
        username: String!
        email: String
        password1: String!
        password2: String!
    }

    type Token {
        key: String!
    }

    type Mutation{
        login(credentials: LoginInput!): Token!
        signUp(signupData: SignupInput!): Token!
    }
`;

module.exports = authTypeDefs;