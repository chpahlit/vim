# Verwenden Sie das offizielle Node.js-Image als Basis
FROM node:20-latest

# Setzen Sie das Arbeitsverzeichnis innerhalb des Containers
WORKDIR /usr/src/app

# Kopieren Sie die Abhängigkeiten
COPY package*.json ./

# Installieren Sie die Abhängigkeiten
RUN npm install

# Kopieren Sie den Rest des Anwendungsquellcodes
COPY . .

# Erstellen Sie das Angular-Projekt
RUN npm run prod

EXPOSE 4100

# Starten Sie Ihre Anwendung
CMD ["npm", "start"]
