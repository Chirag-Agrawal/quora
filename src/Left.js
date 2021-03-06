import { Avatar } from '@material-ui/core'
import React from 'react'
import './Left.css';


function Left() {
    return (
        <div className="left_widget">
            <div className="group">
                <div className="group_logo">
               <Avatar />
                </div>
                <div className="group_name">
                <p>Group Name</p>
                </div>
            </div>
            <div className="group">
                <div className="group_logo">
               <Avatar />
                </div>
                <div className="group_name">
                <p>Group Name</p>
                </div>
            </div>
            <div className="group">
                <div className="group_logo">
               <Avatar />
                </div>
                <div className="group_name">
                <p>Group Name</p>
                </div>
            </div>
            <div className="group">
                <div className="group_logo">
               <Avatar />
                </div>
                <div className="group_name">
                <p>Group Name</p>
                </div>
            </div>
           
        </div>
    )
}

export default Left
