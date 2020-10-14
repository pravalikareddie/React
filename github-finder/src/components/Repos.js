import React from 'react'
import RepoItem from './RepoItem'

function Repos(props) {
    return (
        <div>
            {
                props.repos.map((repo)=>
                (<RepoItem repo={repo}></RepoItem>)
                )
            }
        </div>
    )
}

export default Repos
