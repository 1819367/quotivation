import React from "react";
import QuoteCard from "./QuoteCard";
import CategoryForm from "./CategoryForm";

function Quotes({ filteredQuotes, category, categories, handleCategoryChange, addToFavorites }) {
    // console.log(filteredQuotes)
    return (
        <section className="all-quotes">
            <div className="quotes wrapper">
                <div className="category-header">
                    <h2 className="category-header">Pick your Favorite Quotes Below</h2>
                    <p>Browse through your collection of quotes.</p>
                    <CategoryForm
                        handleCategoryChange={handleCategoryChange}
                        category={category}
                        categories={categories} />
                </div>
                {filteredQuotes.map((quote) => (
                    <QuoteCard
                        key={quote.id}
                        quote={quote} 
                        addToFavorites={addToFavorites}
                        />
                ))}
            </div>
        </section>
    );
}
export default Quotes;