const fetch = require('node-fetch');
const serverConfig = require('../server')

const authResolver = {
    Mutation: {
        login: async (_, { credentials }, { dataSources }) => {
            return await dataSources.authAPI.loginRequest(credentials);
        },

        signUp: async (_, { signupData }, { dataSources }) => {
            const userData = {
                username: signupData.username,
                email: signupData.email,
                password1: signupData.password1,
                password2: signupData.password2
            }
            return await dataSources.authAPI.createUser(userData);
        }, 

       
    }
}

module.exports = authResolver;