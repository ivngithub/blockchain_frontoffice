import React from 'react';
import { Button} from 'reactstrap';


export default function Logout() {

    function logout() {
        console.log("I logout!");
        localStorage.removeItem('access_token');
        window.location.reload();
    }

    return (
        <div className="text-right">
            <Button color="link" onClick={ logout }>logout</Button>
        </div>
    );

}
