#u23524121 Jamean Groenewald

FROM node:20

WORKDIR /app

ENV PORT=3000

COPY . .

RUN npm install

CMD [ "npm", "start" ]

EXPOSE 3000