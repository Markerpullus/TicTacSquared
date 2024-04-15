FROM node:21.7.2-alpine
WORKDIR /usr/src/app
COPY . .
RUN yarn
RUN yarn run build
RUN yarn global add serve
CMD ["serve", "-s", "build", "-l", "tcp://0.0.0.0:3000"]
EXPOSE 3000