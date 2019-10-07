FROM nginx
RUN apk update && apk add nodejs
RUN apk add git
RUN git clone https://SamAlston165:bbe07258ae019a84ba3f40c0fa39d18165b5f337@github.com/SamAlston165/HotBurger.git
WORKDIR /app
RUN npm install 
CMD ["node","app.js"]
