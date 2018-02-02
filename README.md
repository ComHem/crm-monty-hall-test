# crm-monty-hall-test

Ett förberett projekt baserat på create-react-app och spring initializr.

#### Systemkrav

[Maven](https://maven.apache.org/)<br>
[Java8](http://www.oracle.com/technetwork/java/javase/overview/index.html)<br>
[NodeJS](https://nodejs.org)<br>
<br>

#### Starta frontend
```
cd frontend
npm install
npm start
```

#### Starta backend
```
cd backend
mvn install
java -jar target/monty-hall-0.0.1-SNAPSHOT.jar   
```

#### Verifikation
React appen har en komponent som pollar spring boot appens health endpoint och skriver ut svaret. Svaret ska vara "UP" om allt funkar som det ska.




