import React from 'react'

// Imported components
import Header from './Header'
import NewSearch from './NewSearch'
import Search from './Search'

const Home = (props) => {

        console.log(props)
        return (
            <div>
                <Header reset={props.reset} />  
                <div className='main-section'>
                <div className='sidebar' style={{ width: props.isOpen ? '20%' : '10%' }} >
              <NewSearch 
                reset={props.reset} 
                isOpen={props.isOpen} 
              />
            <div className='search-section' 
              style={{ visibility: props.isOpen ? 'visible' : 'hidden' }}
            >
              <Search
                minCalories={props.minCalories}
                maxCalories={props.maxCalories}
                maxRecipes={props.maxRecipes}
                searchText={props.searchText}
                handleChangeSearch={props.handleChangeSearch} 
                handleChangeMinCalories={props.handleChangeMinCalories}
                handleChangeMaxCalories={props.handleChangeMaxCalories}
                handleSubmitSearch={props.handleSubmitSearch}
              />
            </div>
          </div>
            </div>
            </div>
  
        )

}

export default Home;