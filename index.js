const { ApolloServer } = require('apollo-server')

const typeDefs = `
    type Photo {
        id: ID!
        name: String!
        description: String
        postedBy: User
    }
    type User {
        githubLogin: ID!
        name: String
        postedPhotos: [Photo!]!
    }
    type Query {
        totalPhotos: Int!
        allPhotos: [Photo!]!
        totalUsers: Int!
        allUsers: [User!]!
    }
    type Mutation {
        postPhoto(name: String! description: String): Photo!
    }
`
var photos = [
    { "id": "1", "name": "Dropping the Heart Chute", "description": "The heart chute is one of my favorite chutes", "githubLogin": "mParker" },
    { "id": "2", "name": "Enjoying the sunshine", "githubLogin": "eSaugstad" },
    { "id": "3", "name": "Gunbarrel 25", "description": "25 laps on gunbarrel today", "githubLogin": "mParker" }
]

var users = [
    { "name": "Elyse Saugstad", "githubLogin": "eSaugstad" },
    { "name": "Michelle Parker", "githubLogin": "mParker" },
    { "name": "Angel Collinson", "githubLogin": "aCollinson" }
]

var _id = 0

const resolvers = {
    Query: {
        totalPhotos: () => photos.length,
        allPhotos: () => photos,
        totalUsers: () => users.length,
        allUsers: () => users
    },
    Mutation: {
        postPhoto: (parent, args) => {
            var newPhoto = {
                id: _id++,
                ...args
            }
            photos.push(newPhoto)
            return newPhoto
        }
    },
    Photo: {
        postedBy: parent => {
            return users.find(u =>
                u.githubLogin === parent.githubLogin)
        }
    },
    User: {
        postedPhotos: parent => {
            return photos.filter(p =>
                p.githubLogin === parent.githubLogin
            )
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server
    .listen()
    .then(({ url }) => console.log(`GraphQL Service Running on ${url}`))
