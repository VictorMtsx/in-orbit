
FROM node:latest

WORKDIR /server


COPY package*.json ./
COPY . .

# Copiar o wait-for-it.sh para o diretório de trabalho do container


RUN rm -rf node_modules
RUN npm i

EXPOSE 3030

CMD ["./wait-for-it.sh", "pg:5432", "--", "npm", "run", "dev"]