# Test exercises.

## Exercise 1: Manual testing. 

The 5 tests created and defined for the first exercise can be found in doc/PR00001_PRO_QACodeTest.pdf

## Exercise 2: Automation testing. 

The first three tests can be found in cypress/integration/FUN001PresentationManagement.spec.js
The other two test can be found in cypress/integration/FUN002AccountManagement.spec.js

In the folder cypress/fixtures we can found all the variable data, like users or images.

In the folder cypress/config we can found the static data, like the web URL.

In the folder cypress/support/pages we can found the Page Objetcs that define the behaviour
of the aplication

To run the Tests you have to write on the terminal:
" npm i " (It install all the dependencies)

then you can choose between " npm run runTests " or " node_modules\.bin\cypress open "
the first option run the tests headless and show you the result in the terminal
the second option opens Cypress so you can run the tests manually

I used the plugin "cypress-real-events" https://github.com/dmtrKovalenko/cypress-real-events because I needed
the behaviour of hover. I managed it in the MainPage.js to use the method realHover

I used too "cypress-file-upload" https://www.npmjs.com/package/cypress-file-upload to upload the profile
image. I managed it in the AccountSettingsPage.js to use the method uploadProfileImage

I would be glad for any suggestion or issue to improve the code, thank you for your time!