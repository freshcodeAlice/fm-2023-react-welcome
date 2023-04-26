import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";

function Redirecter (props) {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/timer');
    }, []);

    return (
        <div>Redirect...</div>
    );
}

export default Redirecter;
