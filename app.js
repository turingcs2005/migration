const { sequelize, Mom, Dad } = require('./models');

sequelize.authenticate()
.then( () => console.log('Database connection successful!'))
.catch( (e) => console.log('Error connecting to database:', e));

(async () => {
    try {
        await sequelize.sync({force: true});
        const Susan = await Mom.create({
            firstName: 'Susan', lastName: 'Boyle'
        });

        const James = await Dad.create({
            firstName: 'James', lastName: 'Boyle'
        });

        await James.setMom(Susan);

        await James.reload({
            include: Mom
        });

        console.log(James.Mom.firstName);  // Susan

    } catch (e) {
        console.log('Error:', e);
    }
})();