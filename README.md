# MyReads Project

This is the starter template for the final assessment project for Udacity's React Fundamentals course. The goal of this template is to save you time by providing a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. If you choose to start with this template, your job will be to add interactivity to the app by refactoring the static code in this template.

Of course, you are free to start this project from scratch if you wish! Just be sure to use [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) to bootstrap the project.

## TL;DR

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## What You're Getting

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── Index.js # root file that contains providers for react router and redux
    ├── Index.css # Global styles. You probably won't need to change anything here.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── App-folder # contain App.js the main component of the react router at path "/"
    ├── component-folder # contains all project components
    │   ├── book-folder # implementation component for book (img,titile,author)
    │   │   └── controls.js # implementation for options book menu
    │   ├── Home-folder # 
    │   │   └── home.js # component for contain all shelfs
    │   ├── Search-folder # 
    │   │   ├──header.js #implementation input text for search
    │   │   └──search.js #implementation search output
    │   └── Shelf-folder # 
    │        └──shelf.js #implementation shelf section which contain title and books
    ├── store-folder # Global store
    │   ├── bookSlice.js # slice file contain APIS Functions And global States value 
    │   └── index.js store #store file containing all slice files of the projects
    
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`booksSlice.js`](store/booksSlice.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#MyBooks)
- [`addBook`](#insertBook)
- [`update`](#updateBook)
- [`search`](#search)

### `getAll`

Method Signature:

```js
dispatch(MyBooks());
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
updateBook(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
