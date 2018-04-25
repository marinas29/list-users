const baseUrl = 'https://api.github.com/'

export default {

    getAllUsers () {
        const url = `${baseUrl}users`

        return fetch(url)
            .then(response => console.log(response.json()))
            .catch(error => error.json())
    },

    getUser (name) {
        const url = `${baseUrl}users/${name}`

        return fetch(url)
            .then(response => response.json())
            .catch(error => error.json())
    },

    getRepos (user) {
        const url = `${baseUrl}${user.login}/repos`

        return fetch(url)
            .then(response => response.json())
            .catch(error => error.json())
    },

    getInfoRepos (repository) {
        const url = `${baseUrl}repos/${user.login}/${repository}`

        return fetch(url)
            .then(response => response.json())
            .catch(error => error.json())
    }
}