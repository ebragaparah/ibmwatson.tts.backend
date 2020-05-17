FROM node:12

WORKDIR /opt/site

COPY ./package.json /opt/site
COPY ./babel.config.json /opt/site
COPY ./.sequelizerc /opt/site

RUN npm install

RUN npm install -g sequelize
RUN npm install -g mysql2
RUN npm install -g sequelize-cli
RUN npm install -g @babel/preset-env

COPY ./src /opt/site/src
COPY ./test /opt/site/test

CMD npm run start:dev