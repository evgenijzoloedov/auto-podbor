export const convertToRussianDate = (date) => {
    return new Date(date).toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}


export const convertToRussianPointDate = (date) => {
    return new Date(date).toLocaleString('ru', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC'
    })
}
