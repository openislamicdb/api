# OpenIslamicDB API

An API server for managing the Open Islamic Database written in [Node.js](https://nodejs.org).

## Installation

Pre-requisites:

- [Node.js](https://nodejs.org) v4.0+ installed in order to run the server
- An [OrientDB](orientdb.com) server to host the database

Once you have those packages installed, we need to configure

### Configuration

The OrientDB database connection is configurable through the environment
variables listed in `/.env`.

Once you have OrientDB set up, you need to import the public Open Islamic database into your server. Retrieve the latest nightly snapshot (TODO) and
import it into your server to start.

Now, you are ready to start the server:

    node ./server.js

The server will be accepting requests at `localhost:3000`.

## Development

Clone the repository to get started. Run `npm install` to get the development 
dependencies installed, then you're ready to start hacking.

To run the tests:

    npm run test

### The development environment

It is possible to override environment variables while developing by
writing to the file `.env.local` (which is never committed to SCM) - it follows
the same syntax rules as `.env` and all keys specified in it will have 
precedence over those defined in `.env`.

## License

OpenIslamicDB API - Copyright (C) 2016 Ahmad Amireh

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
