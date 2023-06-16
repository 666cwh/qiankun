import React from 'react'
import './index.css'
import './styles/index.scss'
import Button, { ButtonType, ButtonSize } from './components/Button/button'
const ProjectApp = () => {
    return <div className='project_box'>
        <h1>button</h1>
        <Button autoFocus className='custom' onClick={(e) => { e.preventDefault(); alert('123') }}>hello</Button>

        <Button disabled>hello</Button>

        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>hello</Button>

        <Button btnType={ButtonType.Link} href='http://www.baidu.com'>百度 link</Button>
        <hr />

    </div>
}

export default ProjectApp
