[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Beanworks Accounts Payable module

This project was created during a code challenge, when I was asked to implement a system that reads some information from an external api (xero) and let Vendors and Accounts list available for download.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Node.js (version 8.11)
Create a free Xero developer account (xero.com) and load it with their sample data/create a sample company. 
```

### Installing

First and foremost, clone this repository into your local environment

```
git clone git@github.com:xumes/beanworks-accounts-payable.git
```

And then, install the dependencies

```
cd beanworks-accounts-payable
npm install
```

You can replace the Xero credentials using yours at:
```
/config/config.json
```
Make sure you have created a public application, and just replace the ___consumerKey___ and ___consumerSecret___ values.

The application is ready for use. You can run the tests or skip for the next section.

## Running the tests

The application follows the JavaScript Standard Style: [![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
You can validate it running:

```
npm test
```

### Running the application locally

In order to run the application locally, trigger the script dev. It will run in parallel the scripts server (backend) and client (frontend)

```
npm run dev
```

### How does the application works

The application runs on localhost port 3000:
```
http://localhost:3000
```
The landpage welcomes and invites you to connect to the Xero account and give access to the application.

<img align="center" src="/readme/readme-welcome.png">

Next, the application is redirected to the Xero website and asks for your credentials (must be the same where you created the public application described on the prerequisites on this README)

<img align="center" src="/readme/readme-welcome-xero.png">

After insert your credentials and click on Login, select the organisation (It is recommended to use the __Demo Company__).

<img align="center" src="/readme/readme-organisation.png">

You will see the Taking you back to <application name> screen, hold on for a moment.

<img align="center" src="/readme/readme-taking-back.png">

The Home Page application is loaded. A few information about the Demo Company is displayed for reference, like its address, phone number and a few finance information.

<img align="center" src="/readme/readme-home-page.png">

The two cards displayed at the bottom directs you to the subject area where yu can see or download the information: __Vendors__ or __Accounts__

By clicking on __Vendors__ the following page is displayed:
<img align="center" src="/readme/readme-vendors.png">

By clicking on __Accounts__ the following page is displayed:
<img align="center" src="/readme/readme-accounts.png">

On both pages, clicking on Download button the excel file is generated:
<img align="center" src="/readme/readme-account-excel.png">

## Deployment

The application is production ready. In order to start the deployment process, run the beforeInstall process and the minified bundle is created:

```
npm run beforeInstall
```
Check the result on '/dist' folder

## Built With

* [Node.js](https://nodejs.org/) - The web framework used on Backend
* [React](https://reactjs.org/) - The web framework used on Frontend
* [Redux](https://redux.js.org/) - Used for state controlling
* [Redux Promise](https://www.npmjs.com/package/redux-promise/) - Used to work with async flow on Redux
* [Xero](https://developer.xero.com/) - Used to integrate the app with Xero


## Author

* **Reginaldo Marcelo dos Santos** - *developer* 
 - [Personal website](https://reginaldosantos.com.br)
 - [Github Account](https://github.com/xumes)
 - [LinkedIn Account](https://www.linkedin.com/in/reginaldosantos/)
 - [Udemy Account](https://www.udemy.com/user/reginaldo-marcelo-dos-santos-2/)


