# Indulge

**Indulge** is a food ordering application for three high-end restaurants around King Street West, which utilizes SMS communication to first notify restaurants of pending orders and then customers once orders are ready to be picked up or delivered.

**Forked from https://github.com/mariahfernnn/midterm.**

## Screenshots

###### Indulge
!["Homepage"](url)

###### Restaurants
!["Restaurants"](url)

###### Menu
!["The menu items of one restaurant."](url)

###### Restaurant Owner Only - Incoming Orders
!["Incoming Orders"](url)

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information 
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`

## Warnings & Tips

- Do not edit the `layout.css` file directly, it is auto-generated by `layout.scss`
- Split routes into their own resource-based file names, as demonstrated with `users.js` and `widgets.js`
- Split database schema (table definitions) and seeds (inserts) into separate files, one per table. See `db` folder for pre-populated examples. 
- Use the `npm run db:reset` command each time there is a change to the database schema or seeds. 
  - It runs through each of the files, in order, and executes them against the database. 
  - Note: you will lose all newly created (test) data each time this is run, since the schema files will tend to `DROP` the tables and recreate them.

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x

## Known Bugs & Future Development
- **Restaurant Login:** Currently, any email and password combination will log you in.
- **Restaurant Incoming Orders:** Only items ordered from the first restaurant(i.e. Baro) are listed in this section.
