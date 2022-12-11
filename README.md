# task-api-aws-s3-mongo-redis

# 🚀 A simple task API in Express with OAuth, Caching, API rate limiting feature 🚀

https://github.com/coding-to-music/task-api-aws-s3-mongo-redis

https://task-api-aws-s3-mongo-redis.vercel.app

From / By https://github.com/arifmahmudrana/task-api

## Environment variables:

```java
process.env.PORT
process.env.NODE_ENV === 'development'
process.env.ACCESS_TOKEN_LIFETIME, 10) || 300;
process.env.REFRESH_TOKEN_LIFETIME, 10) || 600;
process.env.ACCESS_KEY_ID,
process.env.SECRET_ACCESS_KEY
const s3 = new aws.S3({ params: { Bucket: process.env.S3_BUCKET } });
process.env.MONGODB_URI
process.env.GMAIL_USER,
process.env.GMAIL_PASSWORD
process.env.EMAIL_FROM,
process.env.SENDGRID_API_KEY
```

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/task-api-aws-s3-mongo-redis.git
git push -u origin main
```

# Task API

## Add env to .env file see example in .env.sample

## Install

```bash
npm i
```

## Create client

```bash
npm run create_client
```

## Import postman collection & variables & set client informations

## To run developement server

```bash
npm run dev
```

## To clear unused tokens

```bash
npm run clear_tokens
```

## To run express production server

```bash
npm start
```

## To run cli

```bash
node_modules/.bin/env-cmd ./.env node bin/cli
```

[demo-live](https://task-api-rana.herokuapp.com/)

```
demo CLIENT_ID - dixDTqxxBsd8x9un
demo CLIENT_SECRET - (D\ZJVeP?%ZdA[dJ=?\h%r*D^=g(,n/Z
```

## Need redis, mongo & node version ^11.0.0

## Todos

- [x] Authentication with OAuth2(Password, access token & refresh token grant in redis store)
- [x] CORS
- [x] Rate limit
- [x] Pagination
- [x] Compression
- [x] Radis caching
- [x] S3 image upload(avatar)
- [x] Database seed
- [x] Transformer
- [x] Mails through Gmail
- [x] CLI for client create, token delete & other features
- [x] Postman
- [ ] Browser caching add(e.g Cache-Control & Last-Modified)
- [ ] User password change to pbkdf2
- [ ] Client credentials grant
- [ ] Authcode grant
- [ ] Use buffer for secret like password or tokens
- [ ] Command autocomplete CLI
- [ ] Confirm before delete CLI
- [ ] Write tests
- [ ] CI/CD
- [ ] Add email option to someother email service as Gmail has limitation

# Contributors

- [arifmahmudrana](https://github.com/arifmahmudrana)

## License

[MIT](LICENSE)
