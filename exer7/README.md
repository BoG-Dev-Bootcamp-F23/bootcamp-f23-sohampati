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

In `Home.js` you can create a simple MARTA homescreen page up to your own design or follow the Figma Page below that will have the form of a navbar that takes you to the `LinesPage.js` for each line with the display for `LinesPage.js` being the line that was clicked on in the navbar. There will also be a link to an About page at the top right of the home screen.

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

When we want to route to a page without stating the element we can use the `useNavigate()` hook! First, you will need to import it using `import { useNavigate } from "react-router-dom";`. Then, inside your function but above the return add `const navigate = useNavigate();`. When you want to link to a page, say inside a button, insert `navigate("/path");`.

Incorporate some form of links between the three pages using React-Router-Dom and ensure that the home screen links to the `LinesPage.js` four separate times with four separate props representing the lines.

**Requirements:**
- Create a `Home.js` and `About.js`.
- Use React routing to link between `LinesPage.js`, `Home.js`, and `About.js`.
- When routing from `Home.js` to `LinesPage.js` there needs to be four separate links titled by line and linking to `LinesPage.js` with each line's props.
- Create a 0.5-2 minute demo video to showcase your project's functionality (this is again just so that we don't have to go through and install dependencies/deal with versioning errors for every exercise)

## Display Example

**Homescreen Figma:**

<img width="604" alt="Screenshot 2023-10-19 at 12 15 00 PM" src="https://github.com/BoG-Dev-Bootcamp-F23/bootcamp-f23/assets/113480497/6f0ba248-c593-4934-b593-09d01008cbe8">
