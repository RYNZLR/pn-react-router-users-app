const BASE_URL = "https://jsonplaceholder.typicode.com/users";

function getUsers(cb){
    fetch(BASE_URL)
        .then(res => res.json())
        .then(json => {
            cb(json);
        });
}

function getUser(id, cb) {
    fetch(`${BASE_URL}/${id}`)
        .then(res => res.json())
        .then(json => {
            cb(json);
        });
}

export default{
    getUsers,
    getUser
}