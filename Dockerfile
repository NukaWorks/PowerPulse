FROM node:16.15.0
MAINTAINER Powerm1nt, <nukaworks@nuka.works>
RUN adduser --disabled-password --home /home/container container
USER container
ENV  USER=container HOME=/home/container
WORKDIR /home/container
COPY . .
RUN yarn
CMD ["npm", "run", "start"]