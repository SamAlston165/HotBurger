FROM alpine
RUN apk update && apk add nodejs && apk add git
RUN apk add --update nodejs npm
RUN git clone https://github.com/SamAlston165/HotBurger.git

COPY . /app
WORKDIR /app

RUN npm install simple-node-logger --save

EXPOSE 80

CMD ["node","app.js"]
