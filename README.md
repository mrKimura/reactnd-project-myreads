# MyReads Project

This is a project for [React Nano Degree](https://www.udacity.com/course/react-nanodegree--nd019) from Udacity which lets you organize your books in shelves.

## Installation
- Clone/Download this repo.
- Run `npm install` or `yarn install` in the project directory to install dependencies.
- Run `npm start` or `yarn start` to start the application.
- Navigate to `http://localhost:3000/` to view the application.


## Usage
### Home page:
This app basically let you organize your books between three shelves:
1. Currently reading
2. Want to read
3. Read

The homepage contains all your books.

Each book has a **control** that lets you select the shelf for that book. When you select a different shelf, the book moves there.

### Adding a new book:
To add a new book, click on the plus icon in the right bottom corner, you will go to the search page.

Here you can find new books and putting them in your collection, to do that just type a word in the search box and you will find all the results. you can change the state of any book just like you did in the home page.

**It is important to know** that the search results are fixed and limited to a particular set of search terms, you can find a list of those search terms in [SEARCH_TERMS.md](SEARCH_TERMS.md) .

If the book has already been added to one of the shelves, or you just added it, the color of the control changes.
