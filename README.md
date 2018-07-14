Getting Great with GraphQL - OSCON 2018
===============
This presentation will go over the basics of the GraphQL query language and how to stand up a GraphQL Server using Apollo Server 2.0. 

Send Queries
----
* [Snowtooth Mountain API](http://snowtooth.moonhighway.com): A real GraphQL API for a fake ski resort

PhotoShare Demo Instructions
----
To run the finished project:
1. Run `npm install` or `yarn` to install the dependencies.
2. Run `npm start` and open your browser to `http://localhost:4000`.
3. Try out a test query with GraphQL Playground. Add the following to the left panel and click "Play":

```graphql
query {
  allPhotos {
    name
    description
    postedBy {
      name
    }
  }
}
```
Or remix the project on Glitch!

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/remix/https://glitch.com/edit/#!/eveporcello-oscon)

GraphQL Resources
----
### GraphQL Documentation
* [GraphQL](http://www.graphql.org): The main website for the GraphQL project.
* [GraphQL on GitHub](https://github.com/graphql/): The main GitHub repo for GraphQL's documentation, reference implementation (GraphQL.js), and other related projects
* [GraphQL Spec](http://facebook.github.io/graphql): GraphQL's specification
* [Apollo Docs](https://www.apollographql.com/docs): Apollo's documentation
* [GraphQL Community Resources](https://graphql.org/community/): Links to conference talks, Slack channels, Twitter accounts, blogs, and more, curated by the GraphQL community

### GraphQL APIs
* [GitHub API](https://developer.github.com/v4/): GitHub's public API
* [SWAPI](https://graphql.org/swapi-graphql/): The Star Wars API
* [Public GraphQL APIs](https://graphql.org/community): A list of public APIs that can be queried with GraphQL

### GraphQL Clients
* [Apollo Client](https://www.apollographql.com/docs/react/): The GraphQL client developed by Meteor Development Group
* [Relay](https://facebook.github.io/relay/): Facebook's GraphQL client library
* [urql](https://github.com/FormidableLabs/urql): Formidable Labs minimal React Query Library  

Presenter Info
----
* Eve Porcello: [@eveporcello](https://twitter.com/eveporcello)
* [eve@moonhighway.com](mailto:eve@moonhighway.com)
* [GraphQL Workshop](https://www.graphqlworkshop.com)
* [Moon Highway](https://www.moonhighway.com)