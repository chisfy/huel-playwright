<h1 align="center">Huel Tech Test</h1>

<p align="center">
  Task: To use playwright to test user experience and functionality of Huel site, by visiting the site and adding 2 different items and viewing them in the basket
</p>

👩‍💻 Approach

- First used the website for myself to get familiar with the task set and how the site runs, also inspecting the page to see how the elements are laid out on HTML - this gave an idea of how the site is structured and how elements interact with each other
- Created a plan and user flow according to my experience and how I had done the task manually - I noted what elements reacted with each other when a particular action or event was triggered
- Completed with Playwright, JavaScript in Visual Studio Code

⚙ Challenges
- Brittleness of the tests - particularly as the testing tasks got heavier and larger
- Locating elements that didn't have an identifiable attribute like an id
- Playwright was slightly temperamental with my system, had the occasional crash! 

🏫 Lessons Learnt
- More confidence with playwright
- Understand better how the DOM is structured
- Pauses in test can be beneficial for the running, allowing events to occur and then letting the next action proceed
- More familiarity with the inspection page, understanding accessiblity and property of elements
- Breaking tests down to be more readable and to not overload the testing tool

💭 Reflections

What went well?

- Creating a user flow and plan helped map out the steps required to carry out the test
- Multiple tests ran on my system with all tests passing
- Utilised playwright tools, documentation, inspecting of page to help complete the task

What could be improved?

- Perhaps there are better ways of verifying and asserting elements on a page as I mostly relied on the element being visible on the page
- Could've implemented more error handling - such as using try and catch blocks as that may have helped with some errors
- Was unable to count the number of items in a list, I found it difficult to relate parent and child elements
