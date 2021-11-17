import { routeAge, routeGender, routeNationality } from "../services/apiRest"

export const getApi = async (name) => {

    const age = await (await fetch(`${routeAge}${name}`)).json()
    const nationality = await (await fetch(`${routeNationality}${name}`)).json()
    const gender = await (await fetch(`${routeGender}${name}`)).json()

    try {
        return {
            age,
            nationality,
            gender
        }
    } catch (error) {
        return error
    }
}