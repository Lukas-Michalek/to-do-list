# **To Do List**

The aim of this project is to build a simple full-stack to-do list app leveraging the the MVC(Model - View - Cotroller) architecture. This web application will allow users to add a new task to their to-do list. Users will also be able to remove tasks from the list once they have completed them by clicking on the list item. 

<br>

**The final application will look like this**



![https://static-assets.codecademy.com/Courses/Connecting-FE-to-BE/mvc/todo.gif](https://static-assets.codecademy.com/Courses/Connecting-FE-to-BE/mvc/todo.gif)

## **Project Goals**


## **Getting Started**

### **Downloading the Source Code**
In order to download this project you will need to 'clone the repository' first.

To clone this repository please navigate on your GIT BASH to which we refer to as Terminal(If it is not installed please download and install it on this [link](https://git-scm.com/downloads))

1. Create folder where you would like to clone this project

```
$ mkdir folder_name
```

2. Navigate to that folder

```
$ cd folder_name
```

3. Clone the project to your folder

```
$ git clone https://github.com/Lukas-Michalek/to-do-list.git
```

After the repository was cloned, before the project can be started you need to install all the packages necessary.

### **Installing necessary packages**

 In order to start this project node.js needs to be installed. It is preferred to have node version 16.19.1 installed as it will allow starting front-end part of the product and thus was deemend to be stable
 
 Please note that we have named our cloned folder to-do-list. In your case please replace to-do-list in file path with the name of the folder where the project is based. For the demonstration purposes we will be using the folder name of to-do-list as stated above.

1. Within the root directory of starting-code, install the dependencies in package.json.

```
$ cd to-do-list
```

```
$ npm install
```

1. Next, set up the application’s view directory by navigating there from your terminal and installing the dependencies.

```
$ cd view
```

```
$ npm install
```

## **Connecting your Database**
After the repository was succesfully cloned and all dependancies in root folder and view folder successfuly installed the next part is to connect your local database. In this project I have used PosgreSQL Database.

### **Create your Database**
You can find information on [Installing and Using PostgreSQL Locally here.](https://www.codecademy.com/article/installing-and-using-postgresql-locally)

In order to create a database in PostreSQL you can either use command line, SQL Shell or an application that enables fast and easy access and management of your PostgreSQL databases, allowing you to run simple SQL queries, save snippets for later use, and customize tables such as [Postbird](https://github.com/Paxa/postbird) or [pgAdmin](https://www.pgadmin.org/).

To connect this app to a PostgreSQL database using Node.js [please refer to this tutorial.](https://www.makeuseof.com/node-postgresql-connect-how/)

During the development I have used this database schema, so I would advise to replicate this schema in order to avoid any unnecessary issues.

```sql
CREATE DATABASE todo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(225) NOT NULL 
);
```

## **Deploying Locally**

After the Database was connected to our application we are ready to deploy it.

Start the project by running **`npm start`** inside the root directory as well as inside the **view** directory. Remember that you’ll need to start your back-end server first for the app to work correctly.

We are using [nodemon](https://www.npmjs.com/package/nodemon) to run the back-end server. **`nodemon`** is a Node package that watches our files and automatically restarts the server each time we save a change. Without it, we’d need to restart the server each time we made a change to see those changes take effect.

## **Technologies used**
 - Javascript
 - Node 
 - HTML
 - CSS
 - PostgreSQL
 - Nodemon

## **Frameworks used**
 - Express 
 - React

## **Acknowledgment**
This project was part of the Full Stack Software Developer Path on [Codecademy](https://www.codecademy.com/)

## **Author**
Lukas Michalek

## **Licence**
This project is licensed under the [MIT](https://mit-license.org/)
