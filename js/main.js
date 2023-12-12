var quotearr = [
  `<p class="fs-3" >“A room without books is like a body without a soul.”
    </p> <p class="fs-3" >― Marcus Tullius Cicero
    </p>`,
  `<p class="fs-3">“You only live once, but if you do it right, once is enough.”
    </p> 
    <p class="fs-3">― Mae West
    </p>`,
  `<p class="fs-3">“Be the change that you wish to see in the world.”
    </p> 
    <p class="fs-3"> ― Mahatma Gandhi
    </p>`,
  `<p class="fs-3">“In three words I can sum up everything I've learned about life: it goes on.”
    </p> <p class="fs-3">― Robert Frost
    </p>`,
  `<p class="fs-3">“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”
   
    </p> <p class="fs-3">― J.K. Rowling, Harry Potter and the Goblet of Fire</p>`,
  `<p class="fs-3">“Don’t walk in front of me… I may not follow
    Don’t walk behind me… I may not lead
    Walk beside me… just be my friend”</p> 
    <p class="fs-3">― Albert Camus
    </p>`,
];

// Comment
function quo() {
  document.getElementById("demo").innerHTML =
    quotearr[Math.floor(Math.random() * quotearr.length)];
}

// console.log((Math.random() * quotearr.length));
// quotearr[Math.floor(Math.random() * quotearr.length)
