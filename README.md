## Slingshot verification challenge

**Link to finished website:** [https://slingshot-challenge.vercel.app](https://slingshot-challenge.vercel.app)

**Link to the demo video:** *to be finished*

For my Slingshot verification challenge I made a landing page for the YC Startup Coinbase, it falls in the category of Single-Page Applications (SPA), as it uses the `wouter` module to display components dinamically with the help of a header and footer for navigation. I used modern web techologies such as React, Vite and Tailwind CSS for the development of the website, which helped me out not only in the design of the project, but also on a better result overall.

The app consists of five major components that the user can interact with. These are:

1. **Header**

   I used the header so users can easily navigate through the app's components.

2. **Footer**

   The footer contains also a simple navigation bar that can be used once again to change between one and other component. It also contains some legally required copyright information.

3. **Home**

   The home component briefly introduces the startup to the user. It has a section for the live price of Bitcoin (updates every 5 seconds using Coinbase's API) related to the startup's goal, which in this case is the cryptocurrency market, and lastly, it has another section with the Google Play and Apple App Store badges so the user can easily download the startup's app. It automatically detects the device the user is visiting the site from so it displays the correct badge; when user visits from a computer or a device that can't fall in the category of Android/iOS it displays both badges.

4. **About**

   The about component introduces the Coinbase startup more deeply to the user, with information of the company's foundation and goal.

5. **Contact**

   The contact component uses a form so the user can easily make inquiries to the startup and be contacted back using the contact details the written down in the form.

## Set up website locally

First `git clone` the repository using the following command on your terminal:

`git clone https://github.com/ulisesvina/slingshot-challenge.git`

Then, cd to the cloned directory using `cd slingshot-challenge`

**For building using yarn (recommended):**

1. Install the dependencies using the `yarn` command.
2. Run the `yarn build` command, and wait for it to finish building.
3. Set up a web server using any of your preferred software (e.g.: Apache, Nginx, Express.js) and configure it to serve the files in the `dist` directory.

**For building using npm:**

1. Install the dependencies using `npm i` on your terminal.
2. Run the command `npm run build` and wait for it to finish building.
3. Set up a web server using any of your preferred software (e.g.: Apache, Nginx, Express.js) and configure it to serve the files in the `dist` directory.