  import React, { useEffect, useState } from 'react';
  import axios from 'axios';
  import { useParams, Link } from 'react-router-dom';
  import './RURD.css';

  const RecipeDetails = () => {
    const [recipe, setRecipe] = useState({});
    const { id } = useParams();

    useEffect(() => {
      axios.get(`http://localhost:8070/recipe/get/${id}`)
        .then((response) => {
          console.log(response.data);
          setRecipe(response.data.recipe);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [id]);

    const handleDelete = () => {
      axios.delete(`http://localhost:8070/recipe/delete/${id}`)
        .then((response) => {
          console.log(response.data);
          window.location.href = "/";
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return (
      <div className='RRURD'>
      <div className="RRURDcontainer">
        <Link to="/RUVA" className="btn btn-secondary mb-2" style={{backgroundColor: "green", color: "white"}}>Back to Home</Link>
        <center><h2 style={{color: 'white'}}>Recipe Details</h2><br /></center>
        <div className="horizontal-barrurd"></div>
        <div className="row">
          <div className="col-md-12 mb-4">
          <div className="card recipecard" style={{ backgroundColor: "#e3f2d4", color: "white" }}>
          <div className="card-body" style={{color: "black"}}>
                <h4 className="card-title">{recipe.recipename}</h4>
                <hr />
                <p className="card-text"><strong>Ingredients:</strong></p>
                <ul className="list-group list-group-flush">
                  {recipe.Ingredients && recipe.Ingredients.map((ingredient) => (
                    <li key={ingredient._id} className="list-group-item ingredientcolor">{ingredient.ingredient}</li>
                  ))}
                </ul>
                <p className="card-text"><strong>Steps:</strong></p>
                <p className="card-text">{recipe.steps}</p>
                <p className="card-text"><strong>Calories:</strong> {recipe.Calories}</p>
                {/* image */}
                <div class="upload-image ml-4 bg-slate-300">
                  <img 
                    className='upload-image'
                    src={recipe.image} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  };

  export default RecipeDetails;