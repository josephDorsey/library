## Node List issue

So I was encountering an issue with the `let message = document.querySelectorAll(".card-read-message");` nodeList array that was returned.

It was returning the array reversed so when I would click on the read button that on click would console.log the index of the message variable but it would not match the index of the card.

Once I converted message into an array and then reversed the order of it now it matches the index of the card! 🥰
