import React from 'react'


const SearchBox = ({searchChange}) => {
     return(
         <div className="p2">
             <input 
                className="pa3 b3 b--green bg-lightest-blue"
                 type="search" 
                placeholder="Search robots"
                onChange={searchChange} 
         />
         </div>
         
     )
}
export default SearchBox