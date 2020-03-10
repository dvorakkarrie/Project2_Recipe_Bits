import React from 'react'

// Imported components
import NewSearch from './NewSearch'
import Search from './Search'

// Set up home page component to bring user back to home after search for a recipe.
const Home = (props) => {

    return (
        <div style={{ width: props.isOpen ? '75%' : '100%' }}>
            {props.showList ? props.recipeList : null}
            <div className='main-section'>
                <div className='sidebar' style={{ width: props.isOpen ? '25%' : '10%' }} >
                    <NewSearch reset={props.reset} isOpen={props.isOpen} />
                    <div className='search-section' style={{ visibility: props.isOpen ? 'visible' : 'hidden' }}>
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
                <div className='recipe-section'
                    style={{ width: props.isOpen ? '75%' : '100%' }} >
                        {props.recipeList}
                </div>
            </div>
        </div>    
    )
}

export default Home;