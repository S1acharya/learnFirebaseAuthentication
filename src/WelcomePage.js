import React from 'react';

const WelcomePage = ({handleLogout}) => {
    return (
        <section>
            <nav>
                <h2>welcome</h2>
                <button onClick = {handleLogout}>Logout</button>
            </nav>
        </section>
    );
};

export default WelcomePage;
