export const FETCH_SKILLS = "FETCH_SKILLS";


export const fetchSkills = () => {
    return async (dispatch) => {
        try {
            const response = await fetch("https://digitalportofolio-ce6ab.firebaseio.com/skills.json",
                {
                    method: 'GET'
                }
            );
            if (response.status !== 200) {
                throw new Error('Something went wrong')
            }
            const resData = await response.json();
            const skills = Object.keys(resData).map(i => resData[i]);

            dispatch({
                type: FETCH_SKILLS,
                skills: skills
            })
        } catch (err) {
            throw new Error(err.message)
        }


    }
}
