# BUILD ENVIRONMENT
FROM node:10-alpine AS build-env

# Installs latest Chromium package
RUN echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories \
    && echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories \
    && apk add --no-cache chromium@edge harfbuzz@edge nss@edge freetype@edge ttf-freefont@edge
ENV CHROME_BIN=/usr/bin/chromium-browser CHROME_PATH=/usr/lib/chromium/

# Create app directory
WORKDIR /app

# Copy all files
COPY ./src/ ./src/
COPY ./angular.json ./
COPY ./browserslist ./
COPY ./karma.conf.js ./
COPY ./package.json ./
COPY ./package-lock.json ./
COPY ./tsconfig.* ./
COPY ./tslint.json ./

# Build app
RUN npm install
RUN npm run build

# Expose volume
VOLUME /app

# RUN ENVIRONMENT
FROM nginx:1.16-alpine

COPY --from=build-env /app/dist/moro-projekt /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/conf.d/nginx.conf.template
COPY ./docker/nginx-start.sh /bin/nginx-start

RUN chmod 700 /bin/nginx-start

EXPOSE 80

CMD ["nginx-start"]
