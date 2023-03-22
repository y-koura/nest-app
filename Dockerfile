FROM node

WORKDIR /app

COPY package*.json ./

RUN npm i -g @nestjs/cli

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]