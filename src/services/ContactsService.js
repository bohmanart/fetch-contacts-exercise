// import CONTACTS from './DATA/CONTACTS.json';

const TOKEN = 'd3ef07cd3fb17859a874b7854c84f0ec';

const getContacts = (page = 1, per = 50) => {
    // return Promise.resolve(CONTACTS);
    return fetch(`https://stage.skipio.com/api/v2/contacts?token=${TOKEN}&page=${page}&per=${per}`)
        .then(response => response.json());
}

export default {
    getContacts
}