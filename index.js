"use strict";

const form = document.querySelector(".form");
const buttonOpenForm = document.querySelector(".button-open-form");
const inputTitle = document.querySelector(".title");
const inputAuthor = document.querySelector(".author");
const inputPages = document.querySelector(".pages");
const inputRead = document.querySelector(".form-select-read");
const booksContainer = document.querySelector(".books-container");
const showBooks = document.querySelector(".button-show-books");

const buttonCloseForm = document.querySelector(".button-close-form");
const buttonSubmitForm = document.querySelector(".button-submit-form");
const overlay = document.querySelector(".overlay");
// const DUMMYLibrary = [
//   {
//     id: 420,
//     title: "The Catcher in the Rye",
//     author: "J.D. Salinger",
//     pages: 224,
//     read: true,
//   },
//   {
//     id: 421,
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     pages: 336,
//     read: false,
//   },
//   {
//     id: 422,
//     title: "1984",
//     author: "George Orwell",
//     pages: 328,
//     read: true,
//   },
//   {
//     id: 423,
//     title: "Pride and Prejudice",
//     author: "Jane Austen",
//     pages: 432,
//     read: false,
//   },
//   // Add more books with random titles, authors, and read values as needed...
// ];
// const myLibrary = DUMMYLibrary.map(
//   (book) => new Books(book.title, book.author, book.pages, book.read)
// );
const myLibrary = [];

function Books(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${
      read ? "has read." : "not read yet."
    }`;
  };
  this.toggleReadBook = function () {
    return (this.read = this.read ? false : true);
  };
}

buttonOpenForm.addEventListener("click", function (e) {
  e.preventDefault();
  form.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

buttonCloseForm.addEventListener("click", function (e) {
  e.preventDefault();
  form.classList.add("hidden");
  overlay.classList.add("hidden");
});

inputRead.addEventListener("change", function (e) {
  e.preventDefault();
});

buttonSubmitForm.addEventListener("click", function (e) {
  e.preventDefault();
  const newBook = new Books(
    inputTitle.value,
    inputAuthor.value,
    inputPages.value,
    inputRead.value
  );
  console.log(`clicked`);
  if (inputRead.value === "yes") newBook.toggleReadBook();
  myLibrary.push(newBook);
  let html = `
    <div class="card" id=${newBook.id}>
    <h4>${newBook.title}</h4>
    <div class="card-content">
      <p>by ${newBook.author}</p>
      <p>Page count: ${newBook.pages}</p>
    </div>
    <div class="button-container">
    <button class=${
      newBook.read ? "book-read" : "book-not-read"
    } name="read-card">Read</button>       
    <button name="delete-card">Delete</button>
     </div>
  </div>
    `;
  booksContainer.insertAdjacentHTML("beforeend", html);
  inputTitle.value = inputAuthor.value = inputPages.value = "";
  inputRead.selectedIndex = 0;
});

booksContainer.addEventListener("click", function (e) {
  if (e.target.name === "delete-card") {
    let firstParent = e.target.parentElement;
    let container = firstParent.parentElement;
    let index = container.dataset.id;
    myLibrary.splice(index, 1);
    console.log(myLibrary);
    booksContainer.removeChild(container);
  }
  if (e.target.name === "read-card") {
    let firstParent = e.target.parentElement;
    let container = firstParent.parentElement;
    let index = container.dataset.id;
    myLibrary[index].toggleReadBook();
    console.log(`I am card index ` + index);
    // let message = document.querySelectorAll(".card-read-message");
    // let messageArr = Array.from(message).reverse();
    // console.log(messageArr);
    // console.log(myLibrary[index]);
    // // console.log(message[index].dataset.id);
    // messageArr[index].textContent = myLibrary[index].read
    //   ? `I have read this book!`
    //   : `I have not read this yet.`;
    e.target.innerHTML = `${myLibrary[index].read ? "Read" : "Not Read"}`;
    if (myLibrary[index].read) {
      e.target.classList.remove("book-not-read");
      e.target.classList.add("book-read");
    } else {
      e.target.classList.add("book-not-read");
      e.target.classList.remove("book-read");
    }

    // console.log(`This is ${myLibrary[index].read}`);
  }
});

// myLibrary.map((newBook, i) => {
//   let html = `
//   <div class="card" data-id=${i}>
//     <h4>${newBook.title}</h4>
//     <div class="card-content">
//       <p class="card-author">by ${newBook.author}</p>
//       <p>Page count: ${newBook.pages}</p>
//     </div>
//     <div class="button-container">
//     <button class=${
//       newBook.read ? "book-read" : "book-not-read"
//     } name="read-card">${newBook.read ? "Read" : "Not Read"}</button>
//       <button name="delete-card">Remove</button>
//     </div>
//   </div>
//   `;
//   booksContainer.insertAdjacentHTML("beforeend", html);
// });
