import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ])

    const onAddCategory = (newCategory) => {

      if(categories.includes(newCategory)) return;
      
        //categories.push(newCategory);
       setCategories( [newCategory,...categories] )
       // setCategories( cat => ['Valorant',...cat] )
    }

  return (
    
    <>

        <h1>GifExpert MarvinRiv_Dev 🚀</h1>
              <AddCategory 
              onNewCategory={event => onAddCategory(event)}           
              />  
            { categories.map( (category ) => (  <GifGrid 
            key={category} 
            category={category}/>
                )) }
    </>
  )
}

