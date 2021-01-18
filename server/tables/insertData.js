const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://root:1234@localhost/crm_project');

const data = require('./../../data/data.json');

const addCountry = async function(name) {
    const query = `INSERT INTO country VALUES (null, '${name}')`;
    await sequelize.query(query);
}

const addOwner = async function(name) {
    const query = `INSERT INTO owner VALUES (null, '${name}')`;
    await sequelize.query(query);
}

const addEmailType = async function(type) {
    const query = `INSERT INTO email_type VALUES (null, '${type}')`;
    await sequelize.query(query);
}

const addClient = async function(first_name, last_name, email, first_contact, sold, email_type_id, owner_id, country_id) {
    const query = `INSERT INTO client VALUES (null, '${first_name}', '${last_name}', '${email}', '${first_contact}', ${sold}, ${email_type_id}, ${owner_id}, ${country_id})`;
    await sequelize.query(query);
}

const countries = require('./../../data/restcountries.json').map(c => c.name);
// countries.forEach(c => addCountry(c));

const owners = [];
data.forEach(d => {
    const owner = d.owner;
    if(!owners.includes(owner)) {
        owners.push(owner);
    }
})
// owners.forEach(o => addOwner(o));

const emailTypes = ['A', 'B', 'C', 'D'];
// emailTypes.forEach(e => addEmailType(e));
// sequelize.query(`INSERT INTO email_type VALUES (null, null)`);

// data.forEach(async d => {
//     const firstName = d.name.split(' ')[0];
//     const lastName = d.name.split(' ')[1];

//     const countryData = await sequelize.query(`SELECT c_id FROM country WHERE name = '${d.country}'`);
//     const countryId = countryData[0][0] ? countryData[0][0].c_id : null;

//     const ownerData = await sequelize.query(`SELECT o_id FROM owner WHERE name = '${d.owner}'`);
//     const ownerId = ownerData[0][0] ? ownerData[0][0].o_id : null;

//     const emailTypeData = await sequelize.query(`SELECT e_t_id FROM email_type WHERE type = '${d.emailType}' OR type is null`);
//     const emailTypeId = emailTypeData[0][0] ? emailTypeData[0][0].e_t_id : null;

//     await addClient(firstName, lastName, d.email, d.firstContact, d.sold, emailTypeId, ownerId, countryId);
// });


