# PowerUwaa generic docker image, made by Powerm1nt <nukaworks@nuka.works>
FROM node:16.15.0
MAINTAINER Powerm1nt, <nukaworks@nuka.works>

#Making application directories
RUN adduser --disabled-password --home /home/container container --gecos ""
WORKDIR /app
COPY . .
RUN mv /app/etc /home/container && ln -svf /home/container/etc /app/etc
RUN chown -R container:container /app && chown -R container:container /home/container

# Installing nodejs dependencies
RUN yarn

# Defining user execution configuration & Application Launch
USER container
ENV  USER=container HOME=/home/container
CMD ["npm", "run", "start"]