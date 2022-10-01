# Nossa Matilha

[![NossaMatilha](https://circleci.com/gh/megatroom/nossamatilha.svg?style=svg)](https://circleci.com/gh/megatroom/nossamatilha)

Source code for [nossamatilhadogs.com.br](https://nossamatilhadogs.com.br).

## Development

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

### Setup

Install dependencies:

```bash
yarn
```

### Environment Variables

You can create the `.env.local` file with this example:

```bash
NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER=5511999999999
NEXT_PUBLIC_ANALYTICS_ENABLED=false
NEXT_PUBLIC_FIREBASE_EMULATORS_ENABLED=true
```

### Emulators

This step is optional, but it's recommended to use the emulators to test the application locally.

Install the Emulator:

```bash
curl -sL https://firebase.tools | bash
```

Or see the [Firebase CLI](https://firebase.google.com/docs/cli#install-cli-mac-linux) documentation.

Then make the login:

```bash
firebase login
```

Now you can start the emulators:

```bash
yarn emulators:start
```

The emulator will run in [http://localhost:4000](http://localhost:4000).

### Dev Server

Run the development server with the follow command:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
