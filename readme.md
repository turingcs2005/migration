Step 1: set up DB connection
1. Install sequelize-cli globally (npm i -g sequelize-cli), or install it as dev dependency (npm i -D sequelize-cli)
   Use 'sequelize-cli xxx' (if installed globally) or 'npx sequelize-cli xxx' (if installed as dev dependency)
2. Use 'sequelize-cli' init to create folder structure
3. Define NODE_ENV (development) in .env (file models/index.js defines environment)
5. Define password to database in .env 
6. Change config/config.json to config.js accordingly
7. Update models/index.js file

Step 2: define models, create tables
1. 'sequelize-cli model:generate --name XXXX --attributes XXXX:string,XXXX:string'
   * create model files under ./models/ directory
   * create migration files under ./migrations/ directory
   You can manually create these files without using sequelize-cli. 
   Remember when you manually edit one file, edit the other, too.
2. 'sequelize-cli db:migrate' 
   * create tables in database with all the specified columns
3. 'sequelize-cli db:migrate --to xxxxxxxx-create-xxxx.js'
   * revert to a previous migration