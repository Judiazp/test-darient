
export const getApi = async (name) => {
    
    const routeAge = process.env.REACT_APP_AGE
    const routeNationality = process.env.REACT_APP_NATIONALIZE
    const routeGender = process.env.REACT_APP_GENDER

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
        console.log(error);
    }
}