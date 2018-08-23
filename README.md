# MyReads Project

This is a responsive web application that allows users to select and categorize books into a virtual bookshelf. Leveraged React to support a dynamic user interface that uses Apollo and GraphQL to interact with a RESTful API server and client library. The user is able to search and move books to and from three distinct bookshelves: _Read_, _Currently Reading_ and _Want To Read_.

## Extra Features

* Apollo + GraphQL
* Toast notifications
* Shelf switcher
* Book classification
* Debouncing input
* Clear input button
* Loading animation
* Input autofocus
* Responsive background

## Starting the app

To get the application up and running right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Backend Server

The file `BooksAPI.js` has been replaced by [`Queries.graphql.js`](src/utils/Queries.graphql.js) which contains the GraphQL queries that interact with the REST API endpoints.

## Search Terms

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which are listed below. These are the _only_ terms that will work with the backend.

```
'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 
'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 
'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 
'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 
'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 
'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 
'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 
'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 
'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
```

## Tech Stack

||||||
:---:|:---:|:---:|:---:|:---:
<img src="https://cdn.svgporn.com/logos/apollostack.svg" alt="Apollo" title="Apollo" height="50px"/><br>**Apollo**|<img src="https://cdn.svgporn.com/logos/autoprefixer.svg" alt="Autoprefixer" title="Autoprefixer" height="50px"/><br>**Autoprefixer**|<img src="https://cdn.svgporn.com/logos/babel.svg" alt="Babel" title="Babel" height="50px"/><br>**Babel**|<img src="https://cdn.svgporn.com/logos/css-3.svg" alt="CSS3" title="CSS3" height="50px"/><br>**CSS3**|<img src="https://cdn.svgporn.com/logos/eslint.svg" alt="ESlint" title="ESlint" height="50px"/><br>**ESlint**
<img src="https://cdn.svgporn.com/logos/font-awesome.svg" alt="Font Awesome" title="Font Awesome" height="50px"/><br>**Font Awesome**|<img src="https://cdn.svgporn.com/logos/graphql.svg" alt="GraphQL" title="GraphQL" height="50px"/><br>**GraphQL**|<img src="https://cdn.svgporn.com/logos/html-5.svg" alt="HTML5" title="HTML5" height="50px"/><br>**HTML5**|<img src="https://cdn.svgporn.com/logos/javascript.svg" alt="JavaScript" title="JavaScript" height="50px"/><br>**JavaScript**|<img src="https://cdn.svgporn.com/logos/prettier.svg" alt="Prettier" title="Prettier" height="50px"/><br>**Prettier**
<img src="https://cdn.svgporn.com/logos/react.svg" alt="React" title="React" height="50px"/><br>**React**|<img src="https://cdn.svgporn.com/logos/react-router.svg" alt="React Router" title="React Router" height="50px"/><br>**React Router**|<img src="https://cdn.svgporn.com/logos/svg.svg" alt="SVG" title="SVG" height="50px"/><br>**SVG**|<img src="https://cdn.svgporn.com/logos/webpack.svg" alt="Webpack" title="Webpack" height="50px"/><br>**Webpack**|
