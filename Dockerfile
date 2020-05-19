FROM node:12

WORKDIR /opt/site

COPY ./package.json /opt/site
COPY ./babel.config.json /opt/site
COPY ./.sequelizerc /opt/site

RUN npm install

RUN npm install -g sequelize --silent
RUN npm install -g mysql2 --silent
RUN npm install -g sequelize-cli --silent
RUN npm install -g @babel/preset-env --silent
RUN npm install -g ibm-watson@^5.5.0 --silent

COPY ./src /opt/site/src
COPY ./test /opt/site/test
COPY ./public /opt/site/public

CMD npm run start:dev