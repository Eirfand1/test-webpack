FROM node:20-alpine
WORKDIR /app

COPY dist/final.js .
COPY package.json .
RUN npm install

EXPOSE 3000

CMD ["node", "final.js"]
