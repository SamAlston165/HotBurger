FROM alpine
RUN apk update && apk add nodejs && apk add git
RUN apk add --update nodejs npm
RUN git clone https://github.com/SamAlston165/HotBurger.git

WORKDIR /HotBurger/CustomerService

RUN npm install

RUN npm install express --save && npm install morgan --save && npm install read-last-lines --save && npm install axios --save

CMD ["node","CustomerService.js"]

