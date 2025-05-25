# Cypress Automation Testing Project - DemoQA

This repository showcases a structured Cypress test automation framework built for testing the DemoQA website.
It includes automated tests for UI components in the Elements section using best practices such as:

- Page Object Model (POM),
- Test data via fixtures,
- MochaAwesome HTML reporting,
- File upload/download support.

# Recruiter Note

This project demonstrates my ability to:

- Create maintainable and scalable Cypress test frameworks
- Apply good practices like POM and test data management
- Integrate with CI-ready tools like Mochawesome

It is an example of how I write tests in a real-world scenario, aiming for clarity, separation of concerns, and reliability.


# Project Structure

cypress/\
├── downloads/                   # Downloaded files\
├── e2e/\
│   └── alerts/               # E2E test specs   
│   └── elements/                # E2E test specs\
│   └── forms/                # E2E test specs\
│   └── tables/                ## E2E test specs\
│   └── widgets/                # E2E test specs\
├── fixtures/                   # Test data and uploaded files\
├── pages/\
│   └── alerts/                # Page Object Model classes for each UI section\
│   └── elements/                # Page Object Model classes for each UI section\
│   └── forms/                # Page Object Model classes for each UI section\
│   └── tables/                # Page Object Model classes for each UI section\
│   └── widgets/                # Page Object Model classes for each UI section\
├── reports/                    # MochaAwesome report output\
├── screenshots/                # Screenshots on failure (optional)\
├── support/                   # Cypress custom commands and config\
│\
├── cypress.config.js          # Cypress config with mochawesome integration\
├── package.json               # NPM dependencies and scripts\

# Technologies Used

- Cypress (E2E testing framework)
- JavaScript (ES6+ syntax)
- Mochawesome (Test reporting)
- cypress-file-upload (For upload functionality)
- cypress-downloadfile (To validate downloads)

# Covered Tests

Each test file corresponds to a component in the Elements tab of DemoQA:

## 🟩 Elements Section
| Component | Test Cases Implemented |
|-----------|------------------------|
| Text Box | Fill form, validate submitted values |
| Check Box | Toggle check/uncheck Home box |
| Radio Button | Select options and validate state |
| Web Tables | Add, search, and edit user records |
| Buttons | Double click, right click, dynamic click |
| Links | Validate redirection and force click |
| Upload and Download | Validate file download & upload feedback |
| Dynamic Properties | Validate delayed button states and style |
| Broken Links & Images | Check valid/broken links and image visibility |

## 🟦 Forms Section
| Component | Test Cases Implemented |
|-----------|------------------------|
| Practice Form | Fill full form with validation using fixtures, validate confirmation modal |
| Required Fields | Test missing required inputs (negative scenarios) |
| Date Picker | Interact with calendar UI and verify selected date |
| File Upload | Upload profile picture and validate filename |

## 🟥 Alerts, Frame & Windows Section
| Component | Test Cases Implemented |
|-----------|------------------------|
| Alerts | Handle alert, confirm, and prompt popups; handle delayed alerts |
| Browser Windows | Handle new tabs and new windows, assert window content |
| Frames | Validate text content in single and multiple iframes |
| Nested Frames | Navigate through parent and child nested iframe and assert content |
| Modal Dialogs | Open small and large modals, verify modal text and close behavior |

## 🟨 Widgets Section (in progress)
| Component     | Test Cases Implemented         |
|---------------|--------------------------------|
| Accordian     | TBD    |
| Auto Complete | TBD    |
| Date Picker   | TBD    |
| Slider        | TBD    |
| Progress Bar  | TBD    |
| Tabs          | TBD    |
| Tool Tips     | TBD    |
| Menu          | TBD    |
| Selected Menu | TBD    |


# Installation

### Instal Node.js
- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

To check if you have them installed, run:
> node -v \
> npm -v

### Clone the repository
>  git clone https://github.com/your-username/Portfolio-CypressWebTestingDemoQA.git

### Navigate to the folder
>  cd Portfolio-CypressWebTestingDemoQA

### Install dependencies
>  npm install

# Running Tests
Open Cypress GUI
> npm run test

Run headless tests (CLI)
> npx cypress run

# Generating Test Report
This project integrates Mochawesome for rich test reporting:
> Run tests and generate report
> npm run report

# Configuration
cypress.config.js includes:
- Base URL setup
- Spec pattern matching for .cy.js
- MochaAwesome reporter integration
- File download task registration

# Next Enhancements
- Add CI/CD integration (e.g. GitHub Actions)
- Extend test coverage to other tabs: Forms, Widgets, etc.


# Licence
MIT
___
Created by Adam Wudarczyk