 # Course Catalog

**Description**

This project is a course catalog web application built using React.js. It provides information about various courses in fields such as Full Stack Development, Data Science, Cyber Security, and Digital Marketing. Users can navigate through different categories to view course details.

**Table of Contents**
+ Installation
+ Usage
+ Components
+ Credits
+ License

**Installation**

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using npm:

```bash
npm install
```
4. Start the development server:

```bash
npm start
```
5. Open your browser and go to http://localhost:5173 to view the application.

**Usage**
Once the application is running, you can navigate through different courses using the navigation bar. Each course category has its own page displaying relevant courses. Clicking on a course card will show more details about the course.

**Components**

**1. App.jsx**

This is the main component of the application. It sets up the routing using React Router and provides the state for courses data.

**2. Navigation.jsx**

Navigation component provides a navbar with links to different course categories. It is reused across different pages.

**3. AllCourses.jsx**


AllCourses component renders all available courses regardless of category.

**4. FullStackDevelopment.js, DataScience.js, CyberSecurity.js, DigitalMarketing.js**

These components render courses specific to their respective categories.

**5. Card.js**

Card component represents a course card with information such as title, description, and date.

**Credits**

- Course images sourced from Unsplash and Freepik.
- React.js and React Router for frontend development.

**License**

This project is licensed under the MIT License - see the LICENSE file for details.