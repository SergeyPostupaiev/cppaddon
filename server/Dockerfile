FROM ubuntu:18.04
USER root

# software
# node
RUN apt-get update \
    && apt-get install wget git-core apt-utils software-properties-common -y \
    && cd /root/ && wget https://deb.nodesource.com/setup_14.x && chmod +x ./setup_14.x && ./setup_14.x \
    && apt-get install nodejs build-essential curl vim -y 

# python
RUN apt-get update
RUN apt-get install -y software-properties-common
RUN add-apt-repository -y ppa:deadsnakes/ppa \
    && apt-get install -y wget pv python3.8 python3-pip python3.8-venv python3.8-dev build-essential git python3-mediainfodll libopenblas-dev liblapack-dev

RUN python3.8 -m pip install --upgrade pip setuptools wheel cmake

COPY ./server/package*.json /root/server/
RUN cd /root/server && npm install
COPY ./server /root/server

RUN npm i -g node-gyp
RUN cd /root/server && node-gyp configure build

# start
WORKDIR /root/server/
CMD npm start