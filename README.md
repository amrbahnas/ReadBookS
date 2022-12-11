# MyReads Project

This is the starter template for the final assessment project for Udacity's React Fundamentals course. The goal of this template is to save you time by providing a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. If you choose to start with this template, your job will be to add interactivity to the app by refactoring the static code in this template.



# Project featuers

- The app will allow users to:
- view thier Books in one page
- Classification of books into three categories
- Add new Books From search page


##  Project breakdown:

- App has three shelves for books (currentRead-WantToRead-Read) at the home page
- The main page shows a control that allows users to move books between shelves
- When the browser is refreshed, the same information is displayed on the page
- Have search page We can add New book to our Shelves
- books that match the query are displayed on the page
- user can search by book titles and authors also
- Search results are not shown when all of the text is deleted out of the search input box
- Invalid queries are handled and prior search results are not shown.
- The search works correctly when a book does not have a thumbnail or an author
- on the search page allow the user to select “Currently Reading”, “Want to Read”, or “Read” to place the book in a certain shelf
- When an item is categorized on the search page and the user navigates to the main page

# Installation:
First for Download project files into your Pc write this command 
1-
```sh
 git clone https://github.com/amrbahnas/ReadBooks.git
```
2- for  enter project path
```
$ cd /readBooks
```
3- for download All package directory i Uses in Project
```
$ npm install
```

# Usage

Use the following command to run the browser:
```
$ npm start
```
The project can be viewed in the browser at:
``
http://localhost:3000
``

# Screenshots of the project running
<img width="1039" alt="Screen Shot 2022-05-02 at 1 51 14 AM" src="https://user-images.githubusercontent.com/73616484/206880888-38ef5eb2-7f7b-426c-ac10-d16b9755eb0d.png">

<img width="1045" alt="Screen Shot 2022-05-02 at 1 50 51 AM" src="https://user-images.githubusercontent.com/73616484/206880919-f992c760-7b40-4697-98c2-89522d8317b8.png">


## Tech
This project represents the concept of React, Redux, Redux Thunk and React Router. The project applies the concept of predictability which was discussed in last part the Nanodegree by improving the application’s state, establishs the rules for listening, getting, and updating the store, identifies which state should live inside of Redux and which state should live inside of React components


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
    │   │   ├──search.js #implementation search output
    │   │   └──useDebounce.js # optimizing the search and implementing Debounce 
    │   └── Shelf-folder # 
    │        └──shelf.js #implementation shelf section which contain title and books
    ├── store-folder # Global store
    │   ├── bookSlice.js # slice file contain APIS Functions And global States value 
    │   └── index.js store #store file containing all slice files of the projects
    
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`booksSlice.js`](store/booksSlice.js) contains the methods you will need to perform necessary operations on the backend:
MyBooks
- [`MyBooks`](#getAll)
- [`insertBook`](#addbook)
- [`updateBook`](#update)
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
dispatch(updateBook(book, shelf));
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
dispatch(search(query));
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
