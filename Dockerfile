FROM node:lts-stretch-slim
RUN mkdir -p /sc
WORKDIR /sc
COPY ./ ./
RUN npm install
EXPOSE 4000
CMD [ "node", "app.js" ]