import "./Column.css"
import { Fragment } from "react";
import Card from "../Card/Card";

const Column = () => {

<Fragment>
  <div  className="ticket ticket__todo">
    <p className="text">To do</p>  
    <Card image="man" subtitle="Christmas Banners" label="todo" description="Label" />  
    <Card image="man" subtitle="Redo Portfolio" label="todo" description="Label" />   
  </div> 

  <div  className="ticket ticket__inprogress">
    <p className="text">In Progress</p>  
    <Card image="female" subtitle="Coffe Break" label="inprogress" description="Always" />  
    <Card image="female" subtitle="Updating Portfolio" label="inprogress" description="Always" />  
 </div> 

 <div  className="ticket ticket__review">
    <p className="text">Review</p>  
    <Card image="man" subtitle="Release To Figma Cummunity" label="review" description="Release" />  
    <Card image="man" subtitle="User Feedback" label="review" description="Feedback" />  
    <Card image="man" subtitle="Background images from humaaans.com" label="review" description="Sourcing" />
 </div> 

 <div  className="ticket ticket__done">
    <p className="text">Done</p>  
    <Card image="female" subtitle="Style Guide" label="done" description="UI" />  
    <Card image="female" subtitle="Component Library" label="done" description="UI" />  
    <Card image="female" subtitle="Sticker Components" label="done" description="UI" />
 </div> 

</Fragment>

}

export default Column
