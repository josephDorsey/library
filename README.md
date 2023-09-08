# Issue encountered while building

## Node List issue

The issue occurred in the generated card element that came from a map function for the books array demo to be insertedAdjacently into the DOM. On each card it had a paragraph with the same class.

I encountered the issue with the nodeList array returned from `let message = document.querySelectorAll(".card-read-message");`. When I would get the index of those paragraphs they were based on how they were inserted in the DOM. So while the generated card had an index of 0, on the nodeList it was showing the reverse of 4.

It was returning the array reversed so when I would click on the read button that on click would console.log the index of the message variable but it would not match the index of the card.

Once I converted message into an array and then reversed the order of it now it matches the index of the card!
