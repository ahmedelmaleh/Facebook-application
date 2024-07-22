import { Sequelize } from "sequelize";
export const sequelize = new Sequelize('bu51dcorqmgm44iscfuu', 'u3ygwltyly0pefke', 'bH3H7hHtlqcAUIe1NBZc', {
    host: 'bu51dcorqmgm44iscfuu-mysql.services.clever-cloud.com',
    dialect: 'mysql'
});

export const connectdb = () => {
    sequelize.authenticate().then(() => {
        console.log('db is connected success');
    }).catch((err) => {
        console.log('failed to connect with db');
    });
};
