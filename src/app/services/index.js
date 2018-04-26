const baseUrl = 'https://api.github.com/'

export default {

    getAllUsers () {
        const url = `${baseUrl}users`

        return fetch(url)
            .then(response => response.json())
            .catch(error => error.json())
    },

    getUser (user) {
        const url = `${baseUrl}users/${user}`

        return fetch(url)
            .then(response => response.json())
            .catch(error => error.json())
    },

    getRepositories (user) {
        const url = `${baseUrl}users/${user}/repos`

        return fetch(url)
            .then(response => response.json())
            .catch(error => error.json())
    },

    getInfoRepository (user, repository) {
        const url = `${baseUrl}repos/${user}/${repository}`

        return fetch(url)
            .then(response => response.json())
            .catch(error => error.json())
    }
}