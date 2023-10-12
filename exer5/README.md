# Exercise 5 - Simple Marta Interface

## Description
In this exercise, bootcampers will familiarize themselves with UI/JSX, functional components, props, and state.

## Submission
See the submission instructions down below. 
- **Due Date**: 10-17-2023

## Instructions
*HIGHLY RECOMMEND READING THROUGH THE WHOLE README BEFORE BEGINNING*

Simple instructions: We are creating a simple Marta Interface to display train data for each *train line* on a single page. This exercise will be built upon in Exercise 6.

Congrats on making it to your first bootcamp React project!
To create your React app go to the exer5 folder in command *line* or terminal and run `npx create-react-app marta-interface`. After it finishes installing dependencies, go ahead and run `cd marta-interface`; you are now in your React app!

You can ignore all the template files in `src` except `index.js`, `App.js`, and `App.css`.

To get started, create a `pages`, `server`, and `components` folder within `src`. In the `pages` folder, create a page component named `LinesPage.js`, this page will display the entire interface. Also, create a component called `TrainList.js`. This component should have a prop specifying the line color (i.e. blue, gold, red, or green), and would contain the interface for all trains in the given line. The current line that's being displayed should be stored as a state in the `LinesPage` component. Here's some barebones code for some idea of what the structure should look like:
```
// get static data
import stationData from '../server/stationData';
import trainData from '../server/trainData';

export default function LinesPage() {
  // initialize some currColor state

  return (
    <div>
      // YOUR JSX CODE
      <NavBar color={currColor} data={stationData} />
      <TrainList color={currColor} data={trainData} />
      // YOUR JSX CODE
    </div>
  );
}
```
Next, move the `trainData.js` and `stationData.js` file in `exer5` into the `server` folder. It will provide static data that we'll display in our React frontend (we'll fetch the data from an API in exercise 6). The data is formatted identically to the MARTA API's data: consisting of an object that containing an array of train objects, i.e. `{[Train1's data, Train2's data, Train3's data , ...]}`. Within the `TrainList.js` component, the data should be filtered to only return info for trains that are part of the specific line. For example, for the gold line we only want an array of gold trains (i.e. only include objects with the property `"LINE":"GOLD"`).

In the components folder, create a `Train.js` file. In this file you can create the design for an exportable Train component that takes in the data for one train and returns the display for it. To display whether or not a train is *On Time* or *Delayed* check if `DELAY === "T0S"` (if the equality is true, it is on time, and if not, we consider it delayed). Follow the Figma page below for an aesthetic design of a train component or come up with your own design including the same information!

*Sample Train Component*

<img width="339" alt="Screenshot 2023-10-02 at 4 01 22 PM" src="https://github.com/BoG-Dev-Bootcamp-F23/bootcamp-f23/assets/113480497/07c16887-f509-41e0-bbf2-759946143c91">

Display each of the train components for the specified line (first make sure to import the Train component into the file). *Hint: You do not need to display each component manually as the number of trains in a line or subject to change.* Instead you can use the `map` and `spread` functions you learned in Exercise 4 to take in the props at each index and display a component for each train's props.

Once you have reached this step, we will construct UI that will be used in Exercise 6 (this is still a required part of Exercise 5). We ask that you create a non-functional navbar somewhere on the screen. (In Exercise 6 we will display information for each train line so the dropdown for each train line page will change).

We can create a `Navbar.js` file in `components`. This will contain an exportable navbar display component, which we can import into `LinesPage.js`. The `stationData.js` file holds the stations for each line as an object with arrays associated with lines. The navbar component will be displayed with the props for their specific stations, called from `stationData.js`. Reference the Figma design at the bottom to see what this looks like (it's the component with "select your starting station").

Lastly, we want four nonfunctional buttons to be displayed titled 'Arriving', 'Scheduled', 'Northbound', and 'Southbound' on each of the pages. For the green and blue lines, use 'Eastbound' and 'Westbound' instead. These buttons will become operational in Exercise 6.

**Requirements:**
- In `src` create three folders: `pages`, `server`, and `components`.
- Import the static `trainData.js` file to get train data filtered by line.
- Create a `Train.js` component inside the `components` folder that displays the information for each train, and a `TrainList.js` component that displays the train data for a specified line
- In `App.js`, display the `LinesPage.js` page
- For each line's page, display each train's data by feeding each entry in the filtered array into the `Train.js` component as props.
- Include a nonfunctional navbar that calls the `stationData.js` file for each line to get the specific stations.
- Add four nonfunctional buttons titled 'Arriving', 'Scheduled', and 'Northbound'/'Southbound' or  'Eastbound'/'Westbound' depending on the line for each page.

## Overall Figma Design
*Sample Gold Page*

<img width="480" alt="Screenshot 2023-10-02 at 4 01 14 PM" src="https://github.com/BoG-Dev-Bootcamp-F23/bootcamp-f23/assets/113480497/10278e35-c7a6-4480-94ce-9a06a39d6ecd">
