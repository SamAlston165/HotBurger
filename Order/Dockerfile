FROM alpine
RUN apk update && apk add nodejs && apk add git
RUN apk add --update nodejs npm
RUN git clone https://github.com/SamAlston165/HotBurger.git

WORKDIR /HotBurger
VOLUME . /HotBurger

RUN npm install express --save && npm install morgan --save && npm install read-last-lines --save

EXPOSE 80

CMD ["node","HotburgerOrdering.js"]
