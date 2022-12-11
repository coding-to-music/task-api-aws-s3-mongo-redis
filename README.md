# task-api-aws-s3-mongo-redis

# 🚀 A simple task API in Express with OAuth, Caching, API rate limiting feature 🚀

https://github.com/coding-to-music/task-api-aws-s3-mongo-redis

https://task-api-aws-s3-mongo-redis.vercel.app

From / By https://github.com/arifmahmudrana/task-api

## Environment variables:

```java
PORT=
MONGODB_URI=
REDIS_URL=
NODE_ENV=
ACCESS_TOKEN_LIFETIME=
REFRESH_TOKEN_LIFETIME=
SENDGRID_API_KEY=
GMAIL_USER=
GMAIL_PASSWORD=
EMAIL_FROM=
ROOT_URL=
ACCESS_KEY_ID=
SECRET_ACCESS_KEY=
S3_BUCKET=
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

## ncu upgrade Node package versions

```
ncu
```

Output

```
Checking /mnt/volume_nyc1_01/task-api-aws-s3-mongo-redis/package.json
[====================] 27/27 100%

 @sendgrid/mail        ^6.3.1  →     ^7.7.0
 aws-sdk             ^2.441.0  →  ^2.1272.0
 bluebird              ^3.5.4  →     ^3.7.2
 cli-table3            ^0.5.1  →     ^0.6.3
 env-cmd               ^8.0.2  →    ^10.1.0
 express              ^4.16.4  →    ^4.18.2
 express-paginate      ^1.0.0  →     ^1.0.2
 express-rate-limit    ^3.5.0  →     ^6.7.0
 faker                 ^4.1.0  →     ^6.6.6
 mongoose              ^5.5.0  →     ^6.8.0
 nodemailer            ^6.1.1  →     ^6.8.0
 nodemon             ^1.18.11  →    ^2.0.20
 pug                   ^2.0.3  →     ^3.0.2
 qs                    ^6.7.0  →    ^6.11.0
 rate-limit-redis      ^1.6.0  →     ^3.0.1
 redis                 ^2.8.0  →     ^4.5.1
 sharp                ^0.22.0  →    ^0.31.2
 validator           ^10.11.0  →    ^13.7.0
 yargs                ^13.2.2  →    ^17.6.2

Run ncu -u to upgrade package.json
```

## Getting error

```
npm run start
```

Output

```
> task-api-aws-s3-mongo-redis@1.0.0 start
> node src/app.js

Listening on port 3000
/mnt/volume_nyc1_01/task-api-aws-s3-mongo-redis/node_modules/rate-limit-redis/dist/index.cjs:44
    const result = await this.sendCommand("SCRIPT", "LOAD", `
                              ^

TypeError: this.sendCommand is not a function
    at RedisStore.loadScript (/mnt/volume_nyc1_01/task-api-aws-s3-mongo-redis/node_modules/rate-limit-redis/dist/index.cjs:44:31)
    at new RedisStore (/mnt/volume_nyc1_01/task-api-aws-s3-mongo-redis/node_modules/rate-limit-redis/dist/index.cjs:41:34)
    at Object.<anonymous> (/mnt/volume_nyc1_01/task-api-aws-s3-mongo-redis/src/app.js:36:10)
    at Module._compile (node:internal/modules/cjs/loader:1103:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1157:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47
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
