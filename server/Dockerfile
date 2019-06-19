FROM node
WORKDIR /app

# bundle app source
COPY . .
RUN npm ci --only production

ENV PORT 8080
EXPOSE $PORT
CMD ["bin/www"]
