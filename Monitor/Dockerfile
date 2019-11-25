FROM alpine
RUN apk update && apk add nodejs && apk add git
RUN apk add --update nodejs npm
RUN git clone https://github.com/SamAlston165/HotBurger.git

WORKDIR /HotBurger/Monitor

RUN npm install express --save && npm install morgan --save && npm install read-last-lines --save

EXPOSE 8080

CMD ["node","HotburgerMonitoring.js"]

