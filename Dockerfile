FROM alpine
RUN apk update && apk add nodejs && apk add git
RUN apk add --update nodejs npm
RUN git clone https://08d57d2f85d980b4434ea9f9de4d94f45e61c685@github.com/SamAlston165/repo

COPY . /app
WORKDIR /app

RUN npm install express --save
RUN npm install morgan --save

EXPOSE 80

CMD ["node","app.js"]
