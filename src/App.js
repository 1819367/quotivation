import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Loader } from "react-feather";
import Quotes from "./components/quotes/Quotes";
import "./App.css";

function App() {
  //create two states
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("All");
  const [favoriteQuotes, setFavoriteQuotes] = useState([]);

  const quotesUrl =
    "https://gist.githubusercontent.com/skillcrush-curriculum/6365d193df80174943f6664c7c6dbadf/raw/1f1e06df2f4fc3c2ef4c30a3a4010149f270c0e0/quotes.js";

  //create a variable for categories
  const categories = ["All", "Leadership", "Empathy", "Motivation", "Learning", "Success", "Empowerment"];

  //create a new variable called maxFaves
  const maxFaves = 3;

  //create async funciton with try/catch block
  const fetchQuotes = async () => {
    try {
      setLoading(true);
      const response = await fetch(quotesUrl);
      const results = await response.json();
      setQuotes(results);
    } catch (e) {
      console.log("Something went wrong", e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const filteredQuotes = category !== "All" ? quotes.filter((quote) => quote.categories.includes(category)) : quotes;

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const addToFavorites = (quoteId) => {
    const selectedQuote = quotes.find(quote => quote.id === quoteId);
    const alreadyFavorite = favoriteQuotes.find(favorite => favorite.id === selectedQuote.id);
    console.log(alreadyFavorite)

    if (alreadyFavorite) {
      console.log("This quote is already in your favorites!  Choose Another.")
    } else if (favoriteQuotes.length < maxFaves) {
      setFavoriteQuotes([...favoriteQuotes, selectedQuote])
      console.log("Added to favorites!")
    } else {
      console.log("Max number of Favorite Quotes reached. Please delete one to add another!")
    };
  };
  // console.log(quotes);

  return (
    <div className='App'>
      <Header />
      <main>
        <section className="favorite-quotes">
          <div className="wrapper quotes">
            <h3>Top 3 favorite quotes</h3>
            {favoriteQuotes.length > 0 && JSON.stringify(favoriteQuotes)}
          </div>
        </section>
        {loading ? (
          <Loader />
        ) :
          <Quotes
            handleCategoryChange={handleCategoryChange}
            filteredQuotes={filteredQuotes}
            categories={categories}
            category={category}
            addToFavorites={addToFavorites} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;

