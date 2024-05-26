import React from "react";
import FavoriteQuoteCard from "./FavoriteQuoteCard.js";

const FavoriteQuotes = ({ favoriteQuotes, maxFaves, removeFromFavorites }) => {
    const remainingQuotes = maxFaves - favoriteQuotes.length;
    return (
        <section className="favorite-quotes" >
            <div className="wrapper quotes" >
                <h3>Top 3 favorite quotes </h3>
                {favoriteQuotes.length > 0 &&
                    <ul>
                        {favoriteQuotes.map((quote, index) =>
                            <FavoriteQuoteCard
                                key={quote.id} quote={quote}
                                listPosition={index + 1}
                                removeFromFavorites={removeFromFavorites}
                            />)}
                    </ul>}
            </div>
            {favoriteQuotes.length < maxFaves && (
                <div className="favorite-quotes-description">
                    <p>You can add {remainingQuotes} more {(remainingQuotes) === 1 ? "quote" : "quotes"} to your top three favorites by selecting from the option below.
                    </p>
                    <p>Once you choose, they will update here.</p>
                </div>)
            }

        </section>
    );
};

export default FavoriteQuotes; 