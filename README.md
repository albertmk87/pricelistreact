https://albertmk87.github.io/pricelistreact/

This is the same pricing list project in react but added a dynamic reusable Input component with form validation and added a FIREBASE BACKEND when clicked on the submit info button the info is saved on a firebase database. Next step changing the css to Material-UI.


The pricing list project in react. In the App.js file i'm using BrowserRouter to enable routing. In the MainPage.js file both routes for Container and Form are added. Container file is the stateful file where the pricelist components are shown. Getting the api in the componentDidMount and adding the info to the state. changePeriod is changing the period in the state when there is a change in the dropdown button. changeCurrency is making another call to the api with the currency value of the selected value in the drop down button(i could have passed the value without calling the api, checking the value and then showing the correct sign). SelectedPlan is a function where the selected plan is added to the state to then pass it as an prop to the PlanSummary. A modal that opens up when a plan is selected with the plan summary and two buttons to continue or to go back. In the plan summary the values from selectedPlan are passed as a prop and used to explain the selected plan. By clicking continue the app redirects to /form with the help of react-router-dom where a form is shown. PriceList component is where a single price list element is created with the props passed by the api.

NOTE: THe api worked great locally but when added on github the api shows an error:No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled. I managed to solve the problem by adding a cors unblock extension in chrome. You can pull the files locally or install the extenion.
