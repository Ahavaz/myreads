import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { RestLink } from 'apollo-link-rest'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import App from './components/App'
import './index.css'

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

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.querySelector('#root')
)
