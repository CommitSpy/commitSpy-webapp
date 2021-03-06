import React from 'react';
import { useState } from 'react';



import { Redirect } from "react-router-dom";


const ListRepos = ({ reponame, id, fullname, token, onTee }) => {


    const [done, setDone] = useState(false)


    const testid = () => {
        let project = {
            git_id: String(id),
            title: fullname,
        }
        const axios = require('axios');
        axios.post(`https://commitspy.herokuapp.com/api/project/`, { project }, {
            headers: { 'authorization': `Bearer ${token}` },

        }).then(function (response) {
            console.log(response);
            onTee(response)

            setDone(true)


        }).catch(function (error) {
            console.log(error);
        });
    }





    if (done) {


        return <Redirect to="/home" />;
    }
    return (
        <div onClick={testid} className='listrepos'>
            <h1>{reponame}</h1>

        </div>
    );
};

export default ListRepos;