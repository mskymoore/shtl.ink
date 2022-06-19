FROM node:18.3.0-alpine3.16
RUN mkdir /opt/shtl_ink/
COPY . /opt/shtl_ink/
WORKDIR /opt/shtl_ink
RUN npm ci
RUN npm run build
EXPOSE 3000
ENTRYPOINT [ "npm", "run", "start" ]
