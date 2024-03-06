> **GETTING STARTED:** You should likely start with the `/mock` folder from your solution code for the mock gearup.

# Project Details

This project s a frontend only mockup of what a csvhandler would look like to a user. It takes in commands though a command
input box and displays the appropirate response back to the user. The commands currently implemented are listed below:

- "load" takes in a filepath and returns either a success or failure message
- "view" displays the loaded data as an HTML table
- "search" takes in a column header (either index or name) and a value and returns the appropirate row(s)
- "mode" allows the user to switch between brief or verbose output displays

# Design Choices

Since this project only deals with mocked data and does not connect with backend functionality yet, we only have two methods created with backe: load and view. Load is called when the user inputs the load command and view is used to both display the data and return a random row for search in the meantime. Our methods package also has a class where a commandDictionary is created. We used a dictionary where the key is the command and the value is a call to the appropriate method as our way of sorting and storing command calls. This dictionary has an update function where other developer can call and add new commands without having to adjust our code.

Our application mocks backend csv parsing functionality, so it does not contain actual csv files that are parsed into jsons. Instead, our mocked csv files are stored in the data folder as an array of arrays, where each nested array represents a single row of a csv file. Our searching function is also mocked, and always returns the first row of the data for testing purposes. Once the ba
si dnek

We created a state in REPLInput to keep track of which mode the page should display outputs in. This is updated only if the user calls the "mode" command. This state is passed into REPLHistory and is used to determine how to display outputs. In REPLHistory, a call to a the helper getOutputType is made. It takes in the command string and verbose state boolean and makes a call to commandDictionary. This is how our outputs are created with a strategy pattern.

In order to protect the sensitivity of files, a user may only make command calls if they are logged in. This is currently done with a "login"/"sign out" button.

# Errors/Bugs

As of right now the user ust pass in the filepath everytime a csv command is called ("mode" ddoes not require a filepath). We have been unable to have the outputs stored properly in states. When we tried storing the filepath in a state, the filepath would need to be included only when load is called, but it would then override all previous outputs if the file was switched. When we tried to store the output as a state instead where the previous calls would not ver overridden, only load worked. View would not display the table meaning search would not work either, and mode would display outputs opposite to what the actual mode would have been. We do not know why this happens as all we did was move the called to getOutputType from REPLHistory to REPLInput. We spent ~5-6 hours trying to fix this issue, but nothing seemed to work. Though inconvenient, we thought the original state of the code that has proper functionality was the best option to revert to since we were running out of time. This however means that a user is able to view and search without loading first since the output/filepath is never saved in a state.

Some of our tests are not passing because the locator "getByText" is not recognizing certain elements and "getByLabel" would not recognize our viewTable. This is primarily for our view tests. Our functionality has exhibited successful behavior when interacted with on our local computers, but the Playwright simulations for these behaviors are stalling then timing out. However, the actual functionality of our program appears to be correct.

# Tests

The application is tested with end-to-end tests executed by the Playwright library, which simulates user interaction with the server. These tests launch the website and then test that the desired elements are visible and that our commands (load, view, search, and mode) generate the expected output.

- "load" is tested for properly displaying either a success or error message depending on whether it was given a filepath present in our mocked data.
- "view" is tested for generating an HTML table with the desired fields for the inputted mocked csv file.
- "search" is tested for always returning the first row of the loaded csv, or returning an error message if the csv is empty.
- "mode" is tested for displaying "Command: " before output in verbose mode, and only displaying the output in brief mode.
- invalid commands are tested for displaying an error message.

# How to

First press the login button to make the command input box appear. Type in "load" followed by a valid filepath to the csv you want to load. Press submit and a corresponding message should display. If you are informed of an error, please check that your filepath is valid and spelled correctly.

Next, enter "view" followed by the same filepath to display an HTML table of the mocked data.

Or, enter "search" followed by a column header (either a string name or number index) and the value you want to search as well as the filepath. The first row of the csv should be returned.

In order to switched between brief and verbose display modes, simply enter "mode" and click submit.

Note: each part of the inputs must be separated by a space (e.g. "load data/exampleHouses.csv)
Note: be sure to press submit after entering a command

# Collaboration

- edstem post #310 was used to help set the isVerbose state
- stackoverflow was used to learn how to generate an HTML table from a 2D array
- mdn webdocs for css styling

_(state all of your sources of collaboration past your project partner. Please refer to the course's collaboration policy for any further questions.)_
