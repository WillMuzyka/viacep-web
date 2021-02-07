<h3  align="center">
Project ViaCEP
</h3>

<p  align="center">
<a  href="https://github.com/WillMuzyka">
<img  alt="Made with Love"  src="https://img.shields.io/badge/made%20with-love-%2304D361">
</a>
<a  href="LICENSE">
<img  alt="License"  src="https://img.shields.io/badge/license-MIT-%2304D361">
</a>
</p>

<p  align="center">
<a  href="#joystick-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a  href="#hourglass_flowing_sand-installation">Installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a  href="#book-environment-variables">Environment Variables</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a  href="#whale2-docker">Docker</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a  href="#cop-remarks">Remarks</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a  href="#memo-license">License</a>
</p>

This is an application tho gather the address information using the address CEP (Brazilian ZIP code).

To check the backend repository of this project, please access https://github.com/WillMuzyka/viacep

## :joystick: Technologies

This project used a lot of technologies and concepts. A few of them are listed below.
(Also some languages, libraries and frameworks):

* [TypeScript](https://www.typescriptlang.org/)
* [Node.js](https://nodejs.org/)
* [ReactJS](https://reactjs.org/)
* [NextJS](https://nextjs.org/)
* [Express](https://expressjs.com/)
* [Styled Components](https://styled-components.com/)
* [PostgreSQL](https://www.postgresql.org/)
* [Docker](https://www.docker.com/)
* [JSX](https://reactjs.org/docs/introducing-jsx.html)

## :hourglass_flowing_sand: Installation:

To install and use this application, first be sure that you have node version 12, npm and/or yarn installed (you can run everything with npm, if you prefer, but I recommend yarn). They are essential for running the application.

The whole project was made based on Node.js and docker. If you want to use this library, please clone this repository and check the following steps.

**Steps**

1. Open your computer's terminal and change for the directory that you want to keep this application. Run the code `git clone https://github.com/WillMuzyka/viacep-web.git`.

2. Run the command `yarn` or `npm install` to install all the required packages listed on the file *`package.json`*.

3. Set the environment variables that suits your setup. An example can be found at the root directory of this project and more information can be found on section "Variables".

4. After installing the packages, run the command `yarn dev:server` to start the frontend. This will keep running until you end the application (Ctrl + C) or close the window that is running. It will not run in the background, so you need to keep the window open. This application uses the port `:3000`, so be careful to not have another application trying to run on the same port.

5. Enjoy the application!


## :book: Environment Variables

This project has a .env file that contains all the environment variables. They are required and should not be left with empty values. The list of all variables can be found bellow.

* **NEXT_PUBLIC_API_URL**: The backend address with port. This address will be used for making request to the backend

## :whale2: Docker

This project can be setup all within a container using docker. For this, first be sure to have installed both docker and docker-compose on your machine.
To start the application, run `docker-compose up -d`. It will build (if needed) the containers and start the application in detached mode.
To stop, run `docker-compose stop`.

## :cop: Remarks

Please notice that this project was made to evaluate my knowledge on the concepts of the node.js, typescript, react, postgres and docker.

This is not a deploy version of the application and may not be optimized. The whole purpose of this code is for my own evaluation and I do not have any guaranty if you want to deploy or use it commercially.

## :memo: LICENSE

This project is under the MIT License. For more information, please refer to [LICENSE](LICENSE).
