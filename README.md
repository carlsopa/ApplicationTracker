This project is a simple web page that allows you to keep track of any and all job applications that you have submitted.

## Conception
Since I have been applying for jobs, one of the hardest aspects for me is keeping track of who or what I have applied to.  I have tried several different options and ideas such as:
* Specific email folder
* spreadsheet
* list in a document
* good old pen and paper

But, I did not find anything that I really liked.  They all had their own drawbacks.  So, per my usual mentality if I cant find a solution that I like I will make one instead.

## Requirments
* at a glance allow me to see what applications that I have outstanding
* show only the basic information, and then expand into more information about the job
* easily add a new job application
* easily update current applications with status changes and/or notes

### How it works

Application tracker allows you to keep track of your job searches.  At the top of the screen is a button, this button will allow you to add a new job to your list of jobs.

Underneith is a display of all your jobs in a color coded fashion for you to quickly identify them.
* Green- for when you have applied to a job with no further communication
* Blue- for when you have had some positive action on your application
* Red- for when you or the company decide that you are not a good fit.
You update your job search by clicking on each job card.  Here you will be able to see, the company, position, and category of the job that you applied to.  Additionaly, you can add any additional notes, and also change the current status of your application with that company.  Click update to make your changes.  All changes are done updated in real time.

If you get tired of a job being on your screen, you can click the black "X" in the top top right corner to do away with it.  *NOTE: This will permantly get rid of it, without any warning*

## Additional information

This is built using react, as a single page app.  All data is stored in localStorage.  Depending on your system setup this will alter the amount and time of jobs that you can save.  I have included some test data to get you started, it is located at "src/FakeData.json".  Copy this into  your local storage with object name: "My-Application".
*NOTE* The data does not have to be used, but in order to see the monthly tracking and to give you a jump start I felt the need to inlcude it.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.