FROM node:12

WORKDIR /opt/site

COPY ./package.json /opt/site
COPY ./babel.config.json /opt/site

RUN npm install

RUN npm install sequelize
RUN npm install mysql2
RUN npm install sequelize-cli
RUN npm install @babel/preset-env

COPY ./src /opt/site/src
COPY ./test /opt/site/test

CMD npm run start:dev