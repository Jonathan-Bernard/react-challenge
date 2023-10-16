const Card = ({ article }) => {

  if (!article) return null;
    return (
      <figure className="Card">
        <div className="CardContain">
        <h2 className="titleCard">{article.title}</h2>
        <p className="description">{article.description}</p>
        <p className="price">Prix : {article.price} €</p>
        <a href={article.image}><img className="card-img" src={article.image} alt={article.title} /></a>
        <p className="category">Catégorie : {article.category}</p>
        <button className="buttonAdd">Ajouter au panier</button>
        </div>
      </figure>
    );
  }
    

export default Card;