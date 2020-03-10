 - ![Let's Taco About It](https://res.cloudinary.com/ditj5hmta/image/upload/v1583798213/taco_gif_qaslme.gif)

# Project Overview

## Project Description
Create a web page for users to view recipes related to food specified in a search bar.  The user can select a recipe and view the ingredient list and nutrition summary link to view further details.

- [api link](https://www.edamam.com/)

## Project Links

- [github repo](https://dvorakkarrie.github.io/Project2_Recipe_Bits/)
- [deployment](http://recipebits.surge.sh/)

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

- ![wireframes](https://res.cloudinary.com/ditj5hmta/image/upload/v1583347510/04Mar20_Recipe-Bits_Wireframes_wdahj2.jpg)

Define the the React components and the architectural design of your app.
- ![react architecture](https://cloudinary.com/console/c-0f8a4fdacf2146fd4c181123542405/media_library/folders/%2F/asset/699b9f50e65b10fa6a73e3e8ce4aca1c/manage)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP - Bronze
- Find and use external recipe api 
- Render recipe array data on page based upon the search criteria specified
- Render selected recipe ingredient listing
- Render selected recipe image

### MBP - Silver
- Find and use external nutrition api
- Render nutrition graph and summary data for the selected recipe
- Render nutrition details for the selected recipe

#### PostMVP - Gold
- Add localStorage or firebase for users to store viewed recipes
- add storage functionality to the search history
- sliding search sidebar

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include Axios and React Router| 
| Header | This will render the background picture and title in the header section |
| Home | This will bring the user back to the home page of the application and import the NewSearch and Search components |
| NewSearch | This will reset the search input data and toggle with the Search input boxes and Submit button |
| RecipeDetails | This will render the details and image for the selected recipe |
| RecipeList | This will render the list of recipes per the search criteria |
| RecipeURL | This will render the list of recipes the user can individually select |
| Search | This will render the food search bar and additonal criteria | 


## Time Frames

Time frames are also key in the development cycle.  You have limited time to code all phases of the application (app).  Your estimates can then be used to evalute app possibilities based on time needed and the actual time you have before app must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 8hrs| 16hrs | 16hrs |
| Working with API | H | 6hrs| 10hrs | 10hrs |
| Creating Components | H | 16hrs| 16hrs | 16hrs |
| Total | H | 30hrs| 42hrs | 42hrs |

## Additional Libraries
 Use this section to list all supporting libraries and their role in the project such as ReactStrap, D3, etc.
  - Axios 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
<ul>{recipe.recipe.digest.map((nutrient, index) => (
    <li key={index}>
        <span className='recipe-details-nutrition-title'>{nutrient.label}:</span>
        {Math.floor(nutrient.total/recipe.recipe.yield)} {nutrient.unit}
    </li>))}
</ul>
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

- Having issue with setting up an external link #8:  Set up a component which opens a new tab with a recipe from an external href link.
- Route path is not rendering #10:  Added code to App component to route data to RecipeDetails component.
- Route to home page is not rendering after rendering the recipe details page #14:  Created Home component and moved logic from App to Home in order to apply Route to homepage.


#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object