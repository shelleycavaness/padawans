
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetchModules, fetchSkills} from '../store/tree'

// import api from '../utils/api'

const Home = () => {
    const dispatch = useDispatch()
    const moduleIsLoading = useSelector(state => state.tree.modules.isLoading)
    const modulesCollection = useSelector(state => state.tree.modules.collection)
    const skillCollection = useSelector(state => state.tree.skills.collection)

    useEffect(() => {
        dispatch(fetchModules()),
        dispatch(fetchSkills())
    }, [])

    if (moduleIsLoading) return <span>Modules are loading</span>

    return (
        <section>
            <h1>Home</h1>
            { 
                modulesCollection && modulesCollection.map(item => <p key={item.id_modules}>{item.module_name}</p>)
            }
            <br/>
            <button onClick={() => dispatch({ type: 'CLEAR_MODULES' })}> Clear modules </button>

        { 
            skillCollection && skillCollection.map(item => <p>{ item.skill_name } </p>)  
        }
        </section>
    )
}

export default Home


 // useEffect(() => {
    //     dispatch({ type: 'FETCH_MODULES' });
    //     api
    //         .get('/modules/')
    //         .then(response => {
    //             let result = response.data.data
    //             dispatch({ type: 'SET_MODULES', payload: result });
    //         })
    // }, [])