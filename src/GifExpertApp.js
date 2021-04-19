import React, { useState } from 'react'
import { AddCategory } from './componenst/AddCategory';
import { GifGrid } from './componenst/GifGrid';

export const GifExpertApp = (props) => {
    
    const [categories, setCategories] = useState(['Dragon Ball']) ;   

    return (
        <>
         <h2>GifExpertApp</h2>   
         <AddCategory setCategories={setCategories}></AddCategory>
         <hr/>         
         <ol>
            { 
                categories.map(category => (
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                ))
             }
         </ol>
        </>
    )
}

GifExpertApp.propTypes = {

}

