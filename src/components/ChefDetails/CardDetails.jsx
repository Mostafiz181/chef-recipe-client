import React, { useState } from "react";
import {  toast } from 'react-toastify';



import { Button, Card, Col } from "react-bootstrap";



const CardDetails = ({ recipe }) => {
    const [deseable,setDeseable]= useState(false)
  console.log(recipe);

  const handleToFav=()=>{
    setDeseable(true)
    return toast('Add to favorite')
    
  }

  const {recipe_name, cooking_method,recipe_img,ingredients,rating } = recipe;

  return (
    <Col lg={4}>
      <Card style={{height: "750px"}}>
        <Card.Img style={{height:"250px"}} variant="top" src={recipe_img} />
        <Card.Body>
          <Card.Title>{recipe_name}</Card.Title>

          <p> Cooking Method: {cooking_method}</p>
          {
            ingredients.map((i,index)=> <li key={index}> {i}</li>)
          }
          <p>{rating}</p>
          <Button  className={`${deseable? "btn btn-primary disabled": ""} `} onClick={handleToFav}  variant="primary">Favorite</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardDetails;
