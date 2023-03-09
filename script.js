const author = document.getElementById("author");
const content = document.getElementById("quote");

const generateQuotes = async () => {
  const url = "https://type.fit/api/quotes";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const quoteIndx = Math.floor(Math.random() * data.length);
      const quote = data[quoteIndx].text;
      const auth = data[quoteIndx].author;
      if (auth == null) {
        auth = "--";
      }
      content.innerHTML = quote;
      author.innerHTML = "~ " + auth;
    })
    .catch((err) => console.log(err));
};

setTimeout(generateQuotes(),2000);
