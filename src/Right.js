import React, {useState, useEffect} from 'react';
import { Avatar } from '@material-ui/core'
import './Right.css'

/*
const groups = [
    {
        name: 'group_name',
        text: '300 Followers'
    },
    {
        name: 'group_name2',
        text: '350 Followers'
    }
]*/



function Right({userId}) {

    const [groups, setGroups] = useState([])

    const fetchGroups =  () => {
         fetch('http://localhost:3000/groupstofollow', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: userId
            })
        })
        .then(response =>  response.json())
        
           .then(groups => {
                setGroups(groups)
            })
        
    }

    useEffect(() => {
        fetchGroups();
       console.log(groups)
    }, [])

    return (
         <div className="right_widget">
            {
                groups.map((group) => {
                    const {group_name} = group;
                    return (
                        <div className="group">
                            <div className="group_logo">
                                <Avatar />
                            </div>
                            <div className="group_name">
                                 <p>{group_name}</p>
                            
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Right
