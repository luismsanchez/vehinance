# vehinance
Personal vehicle's maintenance platform

## To create python's environment in django project
Run in console next commands: 
1. python -m venv env
2. env\Scripts\activate
3. pip install -r requirements.txt

NOTE: You must create a file named secrets.json then write the django project key, and database credentials.

Finally you can run the aplication with the command:
1. python manage.py runserver

## To connect spring-boot with MongoDB
Change the link and credentials in file application.properties, then you can run with the command:
1. mvn spring-boot:run

## To connect run APIgateway
Open project and run in console next commands:
1. npm install
2. node src/index.js
