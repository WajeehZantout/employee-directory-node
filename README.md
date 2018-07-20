# employee-directory-node

A basic employee directory application using Node.js, GraphQL and Prisma.

## Usage

### 1. Clone repository & install dependencies

```sh
git clone https://github.com/WajeehZantout/employee-directory-node
```

Then run:

```sh
cd employee-directory-node
yarn install
```

### 2. Add Prisma config

Create a `.env` file in the root directory of the project and fill in the following:

```sh
PRISMA_ENDPOINT=https://eu1.prisma.sh/wajeeh-zantout/employee-directory/dev
PRISMA_SECRET=mysecret123
```

### 3. Start the server & open GraphQL Playground

```sh
yarn start
```

Go to http://localhost:4000 to access GraphQL Playground.
