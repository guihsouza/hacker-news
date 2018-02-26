import 'isomorphic-unfetch'

const API_URL = 'https://api.hackerwebapp.com';

export const fetchStories = async (type = 'news', page = 1) => {
    // eslint-disable-next-line no-undef
    const res = await fetch(`${API_URL}/${type}?page=${page}`)
    return await res.json()
}

export const fetchItem = async id => {
    // eslint-disable-next-line no-undef
    const res = await fetch(`${API_URL}/item/${id}`)
    return await res.json()
}

export const fetchUser = async id => {
    // eslint-disable-next-line no-undef
    const res = await fetch(`${API_URL}/user/${id}`)
    return await res.json()
}
