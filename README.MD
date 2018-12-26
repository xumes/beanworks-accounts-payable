[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Beanworks Accounts Payable module

Challenge project created during a job interview (code test phase)

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

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
