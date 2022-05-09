import React from 'react';
import "./portfolioList.scss"


function Projects({ id, title, active, setSelected}) {

    return (
        <li className={active ? "portfolioList active" : "portfolioList" } 
        onClick={() => setSelected(id)}>
            {title}
        </li>
    );
}

export default Projects;