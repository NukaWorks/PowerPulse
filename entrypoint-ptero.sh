#!/bin/bash
cd /app

# Make sure if the /etc directory is here on /home/container
mkdir -p /home/container/etc

MODIFIED_STARTUP=`eval echo $(echo ${STARTUP} | sed -e 's/{{/${/g' -e 's/}}/}/g')`
echo ":/home/container$ ${MODIFIED_STARTUP}"

${MODIFIED_STARTUP}