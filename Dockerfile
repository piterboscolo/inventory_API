FROM public.ecr.aws/bitnami/node:latest

WORKDIR /app

COPY package*.json .
RUN npm install --force

COPY . .

EXPOSE 3000

CMD ["npm", "start"]