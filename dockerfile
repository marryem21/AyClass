FROM node:14-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile --network-timeout 100000
#RUN yarn install react-scripts@5.0.0 -g --silent

# add app
COPY . ./
EXPOSE 3000
# start app
CMD ["yarn", "start"]
