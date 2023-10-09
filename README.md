# crm-monty-hall-test

Ett förberett projekt baserat på create-react-app och spring initializr.

#### Systemkrav

[Maven](https://maven.apache.org/)<br>
[Java11](https://openjdk.java.net/projects/jdk/11/)<br>
[NodeJS](https://nodejs.org)<br>
<br>

#### Starta frontend

```
cd frontend
npm install
npm start
```

Try with `NODE_OPTIONS=--openssl-legacy-provider  npm start` if `npm start` fails with _Error: error:0308010C:digital envelope routines::unsupported_

#### Starta backend

```
cd backend
mvn install
java -jar target/monty-hall-0.0.1-SNAPSHOT.jar
```

#### Verifikation

React appen har en komponent som pollar spring boot appens health endpoint och skriver ut svaret. Svaret ska vara "UP" om allt funkar som det ska.
