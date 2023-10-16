import data from '../data/data.json'
import Card from './Card'
import React, { useState } from 'react';


function CardList() {
  const [selectedCategory, setSelectedCategory] = useState('');
  
    return (
    <figure  className='list'>    
<select 
    className='buttonFilter' 
    value={selectedCategory} 
    onChange={(e) => setSelectedCategory(e.target.value)}
>
    <option value="">Tous</option>
    <option value="Matériel informatique">Matériel informatique</option>
    <option value="Objet Useless">Objet Useless</option>
    <option value="Relique de Wilder">Relique de Wilder</option>
</select>
        <div className='container'>
          
        {data.articles.filter(article => !selectedCategory || article.category === selectedCategory).map((article, index) => (
    <div key={index}>
        <Card article={article}/>
    </div>
            ))}
        </div>
    </figure>
    );
}

export default CardList;