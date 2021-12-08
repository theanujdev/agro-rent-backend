# Agro Rent (Backend)

## Overview

This portal allows users to view available agricultural equipments in their area (using pincode) and rent them.

## Tech Stack

**Client :** React, Axios, Bootstrap, React-router v6

**Server :** Express, Prisma, PostgreSQL

## Features

- Simple bootstrap UI
- Area-wise availability using pincode
- Scalable database using Postgres
- Rent and view products

## Run Locally

- Clone the project

```bash
git clone https://github.com/ProdexOne/agro-rent-backend
```

- Go to the project directory

```bash
cd agro-rent-backend
```

- Install dependencies

```bash
yarn install
```

- Create a new file `.env`. Copy all the content from `.env.example` and paste it into `.env`. Change the following environment variables in your `.env` file

  `DATABASE_URL`, `PORT`

- Start the server

```bash
yarn dev
```

> **Note:** Make sure to run **PostgreSQL** server in the background.

You need to run [Agro Rent Frontend](https://github.com/ProdexOne/agro-rent-frontend) to use it.

## Optimizations

Project structure is optimized for scalability. Following the ER diagram, database has 4 tables with relations. Routes, controllers, schema, config are all separated. Few utility classes and functions like http-errors, morgan, etc. have also been used.

## Feedback

If you have any feedback, please reach out at [@AnujS_IN](https://twitter.com/AnujS_IN)

## Authors

- [@ProdexOne](https://www.github.com/ProdexOne)

## License

[MIT](https://choosealicense.com/licenses/mit/)
