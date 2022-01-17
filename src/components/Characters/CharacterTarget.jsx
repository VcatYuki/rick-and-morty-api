import React from 'react'

export default function CharacterTarget ({results, search, price, addToCart}) {
    function toLowerCase(textToEdit) {
        return textToEdit.toLowerCase();
    }
    return (
        <div className="main-target">
                    {results ? results.map((personaje) =>
                    (<article className="main-character">
                        <div className="main-img">
                            <img src={personaje.image} alt="" />
                        </div>
                        <div className='main-info'>
                            <h2>{personaje.name}</h2>
                            <h4>{price} €</h4>
                            <h3>{personaje.location.name}</h3>
                        </div>                        
                        <div>
                            <p className={toLowerCase(personaje.status)}>{personaje.status}</p>
                        </div>
                        <div>
                            <button className="main-buy">Add to cart</button>
                        </div>
                    </article>)) :
                        (
                            <p>We couldn't find any results for <span className="couldn-find">"{search}"</span></p>
                        )}
                </div>
    )
}
export {CharacterTarget}
