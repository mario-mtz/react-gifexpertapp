import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGigs = ( categoty ) => {

    const [state, setState] = useState({
        data:[],
        loading: true
    })

    useEffect(() => {
        getGifs (categoty)
            .then( imgs => {                
                setState({
                    data:imgs,
                    loading: false
                })                
            });
    }, [ categoty ])

    return state;
}