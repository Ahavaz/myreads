import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { RestLink } from 'apollo-link-rest'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import App from './App'

const authLink = setContext((_, { headers }) => {
  if (!localStorage.token)
    localStorage.token = Math.random()
      .toString(36)
      .substr(-8)

  return {
    headers: {
      ...headers,
      authorization: localStorage.token
    }
  }
})

const restLink = new RestLink({
  uri: 'https://reactnd-books-api.udacity.com',
  credentials: 'same-origin'
})

const client = new ApolloClient({
  link: authLink.concat(restLink),
  cache: new InMemoryCache()
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>,
    div
  )
})
