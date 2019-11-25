FROM alpine
RUN apk update && apk add nodejs && apk add git
RUN apk add --update nodejs npm
RUN git clone https://github.com/SamAlston165/HotBurger.git

WORKDIR /HotBurger/Inventory

RUN npm install

RUN npm install express --save && npm install morgan --save && npm install read-last-lines --save && npm install morgan-json --save

EXPOSE 8082

CMD ["node","Inventory.js"]

