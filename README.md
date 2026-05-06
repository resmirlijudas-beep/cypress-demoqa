# Cypress Automation Framework – DemoQA

## Overview
This project is an end-to-end test automation framework built using Cypress for testing the DemoQA application.

## Features
- Page Object Model (POM) structure
- Reusable custom commands
- API interception using cy.intercept()
- Environment handling using config
- Test data management
- Cross-browser execution support

## Tech Stack
- Cypress
- JavaScript
- Node.js

## Test Coverage
This automation framework covers the following UI and functional scenarios on DemoQA:

- Alerts handling (simple, confirm, prompt alerts)
- Broken links validation (HTTP status verification)
- Checkbox interactions (select/deselect multiple options)
- Frames handling (switching between iframes)
- File upload functionality
- File download verification
- Form interactions and validations
- Basic UI element validations (buttons, inputs, links)

## How to Run
1. Install dependencies:
   npm install

2. Run tests:
   npx cypress open
   or
   npx cypress run

## Key Highlights
- Reduced flaky tests by replacing static waits with assertions and API intercepts
- Structured framework for scalability and maintainability
- Demonstrates real-time automation practices

## Author
Resmi Lijudas
