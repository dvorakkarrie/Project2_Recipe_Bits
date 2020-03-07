# Project Overview


## Project Description

Create a web page for users to view recipes related to food specified in a search bar.  The user can select a recipe and view the ingredient list and nutrition summary link to view further details.

- [api link](https://www.edamam.com/)

## Project Links

- [github repo](https://dvorakkarrie.github.io/Project2_Recipe_Bits/)
- [deployment]()

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

- [wireframes](https://res.cloudinary.com/ditj5hmta/image/upload/v1583347510/04Mar20_Recipe-Bits_Wireframes_wdahj2.jpg)

Define the the React components and the architectural design of your app.
- [react architecture](https://cloudinary.com/console/c-0f8a4fdacf2146fd4c181123542405/media_library/folders/%2F/asset/699b9f50e65b10fa6a73e3e8ce4aca1c/manage)

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
| Header | This will render the header |
| NewSearch | This will reset the screen to the home page |
| Search | This will render the food search bar and additonal criteria | 
| RecipeList | This will render the list of recipes the user can individually select |

| RecipeDetails | This will render the details and image for the selected recipe |
| Nutrition Summary | This will render the nutrition analysis graph |
| Nutrition Detail | This will render the nutrition detail list |


## Time Frames

Time frames are also key in the development cycle.  You have limited time to code all phases of the application (app).  Your estimates can then be used to evalute app possibilities based on time needed and the actual time you have before app must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 8hrs| 6hrs | 6hrs |
| Working with API | H | 6hrs| 10hrs | 10hrs |
| Creating Components | H | 16hrs| 2hrs | 0hrs |
| Total | H | 30hrs| 0hrs | 0hrs |

## Additional Libraries
 Use this section to list all supporting libraries and their role in the project such as ReactStrap, D3, etc.
  - Axios 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object

<!-- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
 -->
