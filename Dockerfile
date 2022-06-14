FROM node:18.3.0-alpine3.16 as shtl_ink
RUN mkdir -p /opt/node-frontend/pages/api
RUN mkdir /opt/node-frontend/pages/short_codes
RUN mkdir /opt/node-frontend/fonts
RUN mkdir /opt/node-frontend/components
RUN mkdir /opt/node-frontend/public
RUN mkdir /opt/node-frontend/styles
COPY components/* /opt/node-frontend/components/
COPY fonts/* /opt/node-frontend/fonts/
COPY pages/api/* /opt/node-frontend/pages/api/
COPY pages/short_codes/* /opt/node-frontend/pages/short_codes/
COPY pages/*.js /opt/node-frontend/pages/
COPY public/* /opt/node-frontend/public/
COPY styles/* /opt/node-frontend/styles/
COPY *.js* /opt/node-frontend/
WORKDIR /opt/node-frontend
RUN npm ci
RUN npm run build
EXPOSE 3000
ENTRYPOINT [ "npm", "run", "start" ]
