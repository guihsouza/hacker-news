import 'isomorphic-unfetch'

const API_URL = 'https://api.hackerwebapp.com';

export const fetchStories = async (type = 'news', page = 1) => {
    try {
        const res = await fetch(`${API_URL}/${type}?page=${page}`)
        return await res.json()
    } catch (e) {
        return []
    }
}

export const fetchItem = async id => {
    try {
        const res = await fetch(`${API_URL}/item/${id}`)
        return await res.json()
    } catch (e) {
        return {}
    }
}

export const fetchUser = async id => {
    try {
        const res = await fetch(`${API_URL}/user/${id}`)
        return await res.json()
    } catch (e) {
        return {}
    }
}
