const { sequelize, Dad } = require('./models');

sequelize.authenticate()
.then( () => console.log('Database connection successful!'))
.catch( (e) => console.log('Error connecting to database:', e));

(async () => {
    try {
        const James = await Dad.create({
            firstName: 'James'
        });
    } catch (e) {
        console.log('Error:', e);
    }
})();