FROM node:18.3.0-alpine3.16 as shtl_ink
RUN mkdir -p /opt/shtl_ink/pages/short_codes
RUN mkdir /opt/shtl_ink/fonts
RUN mkdir /opt/shtl_ink/components
RUN mkdir /opt/shtl_ink/public
RUN mkdir /opt/shtl_ink/styles
COPY components/* /opt/shtl_ink/components/
COPY fonts/* /opt/shtl_ink/fonts/
COPY pages/short_codes/* /opt/shtl_ink/pages/short_codes/
COPY pages/*.js /opt/shtl_ink/pages/
COPY public/* /opt/shtl_ink/public/
COPY styles/* /opt/shtl_ink/styles/
COPY *.js* /opt/shtl_ink/
COPY entrypoint.sh /opt/shtl_ink/entrypoint.sh
WORKDIR /opt/shtl_ink
RUN npm ci
EXPOSE 3000
ENTRYPOINT [ "sh", "entrypoint.sh" ]
