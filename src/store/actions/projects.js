export const FETCH_PROJECTS = "FETCH_PROJECTS";


export const fetchProjects = () => {
    return async (dispatch) => {
        try {
            const response = await fetch("https://digitalportofolio-ce6ab.firebaseio.com/projects.json",
                {
                    method: 'GET'
                }
            );
            if (response.status !== 200) {
                throw new Error('Something went wrong')
            }
            const resData = await response.json();
            const projects = Object.keys(resData).map(i => resData[i]);

            dispatch({
                type: FETCH_PROJECTS,
                projects: projects
            })
        } catch (err) {
            return err
        }


    }
}
