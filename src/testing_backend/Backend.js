import { useState, useEffect } from "react";

const Backend = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
            fetch("http://localhost:5000/api/member")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setMembers(data)
            })
        }, [])

    return (
        <div>    
            {members.map(member => {
                return (
                    <ul key={member.id}>
                        <li>
                            {member["member_name"]}
                            <p>{member["member_url"]}</p>
                        </li>
                    </ul>
                    )
                })} 
        </div>

    )
}

export default Backend