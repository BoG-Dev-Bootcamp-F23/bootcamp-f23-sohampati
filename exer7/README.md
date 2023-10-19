# Exercise 7 - Advanced Marta Interface (Continued)

## Description
In this exercise, bootcampers will familiarize themselves with routing.

## Submission
See the submission instructions down below.
- **Due Date**: 10-24-2023

## Instructions

Simple instructions: We are improving our Marta Interface from Exercises 5 and 6!

To begin, please move a copy of your React app folder from Exercise 6 into Exercise 7.

You will need to initialize the React app again as it is not recognized as one after movement, to do this run `npm i` after you `cd` into your folder. Then, run `npm start` in the command line or terminal in that folder to see the app display.

### Two New Pages

Now that we are set up, we want to add two new pages! We will call these `Home.js` and `About.js`. 

In `Home.js` you can create a simple MARTA homescreen page up to your own design or following the Figma Page below that will have a form of a navbar that takes you to the `LinesPage.js` for each line with the display for `LinesPage.js` being the line that was clicked on in the navbar. There will also be a link to an about page at the top right of the homescreen.

In `About.js`, you will create a simple page that displays the MARTA map and some basic information about the MARTA's purpose on the page. This page will include a button somewhere linking back to the home page.

### Routing
Install React Router by entering `npm install react-router-dom` in terminal. At the top of each page import router by doing `import { BrowserRouter, Route, Routes } from 'react-router-dom';`. Now, you can set up routes in the return of your display pages by doing

```
return (
    <BrowserRouter>
        <Routes>
          <Route path={PATH1} element={<COMPONENT1 />} />
          <Route path={PATH2} element={<COMPONENT2 />} />
          <Route path={PATH3} element={<COMPONENT3 />} />
        </Routes>
    </BrowserRouter>
  );
```

Incroporate links between the three pages using this format and make sure that homescreen links to the `LinesPage.js` four separate times with four separate props representing the lines.


**Requirements:**
- Create a `Home.js` and `About.js`.
- Use React routing to link between `LinesPage.js`, `Home.js`, and `About.js`.

## Display Example

**Homescreen Figma:**

<img width="604" alt="Screenshot 2023-10-19 at 12 15 00 PM" src="https://github.com/BoG-Dev-Bootcamp-F23/bootcamp-f23/assets/113480497/6f0ba248-c593-4934-b593-09d01008cbe8">
