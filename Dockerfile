# Usa una imagen base que incluya Node.js
FROM node:14

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos necesarios al contenedor
COPY package.json package-lock.json /app/
COPY DraMask/js/server.js /app/

# Instala las dependencias
RUN npm install

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "server.js"]
