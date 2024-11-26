import React from 'react'

const Watches = () => {

    const watchData = [
        {id:1, name:'Rolex', price: 12000,description:'Luxury watch', image:'/rolex.jpg'},
        {id:2, name:'Omega', price: 8000,description:'Sporty design', image: './omega.jpeg'},
        {id:3, name:'Patek Philipi', price: 12000,description:'Elegent timepiece', image:'/patek.jpeg'},
        {id:4, name:'Tag Hever', price: 12000,description:'Sporty and stylish', image:'/tag heuer.jpg'},
        {id:5, name:'Breitling', price: 12000,description:'Bold and rugged', image:'/Breitling.jpeg'},
        {id:6, name:'Seiko', price: 12000,description:'Reliable', image:'/seiko.webp'},
    ]
  return (
    <div>
        <div className="watches">
            {watchData.map((watch) =>(
                <div key={watch.id} className="watch-card">
                    <img src={watch.image}alt={watch.name}/>
                    <h3>{watch.name}</h3>
                    <p>{watch.description}</p>
                    <div >${watch.price}</div>
                    <button>Add to Cart</button>


                </div>

            
            ))}
        </div>

    </div>
  )
}

export default Watches