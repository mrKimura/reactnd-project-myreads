# MyReads Project

This is the project for Udacity's React & Redux course.
It shows my skills in developing web applications using framework React.

MyReads is a React application that allows you to you organize your books in shelves.

## Install and run
Follow these simple steps to install and run this application on your machine:

* clone this repository to your machine
* install all project dependencies with `npm install` or `yarn` within the newly created directory
* start the server with `npm start` or `yarn start` 
* navigate to `http://localhost:3000/` to view the application.


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

If the book has already been added to one of the shelves, or you have just added it, the color of the control changes.

### Technologies Used
1. React
