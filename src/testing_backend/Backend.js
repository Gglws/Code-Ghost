import { useState, useEffect } from "react";

const Backend = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
            fetch("/api/member")
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
                            {member["name"]}
                            <p>{member["email"]}</p>
                            <p>{member["subject"]}</p>
                            <p>{member["message"]}</p>
                        </li>
                    </ul>
                    )
                })} 
        </div>

    )
}

export default Backend