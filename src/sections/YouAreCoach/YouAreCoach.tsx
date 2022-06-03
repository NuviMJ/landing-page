import React from 'react';


import './YouAreCoach.scss'

const YouAreCoach = () => {
    return (
        <div className="YouAreCoach">
            <div>
                <div className="YouAreCoach-leftContainer">
                    <div>
                        <p className="h1-red">You’re a coach?</p>
                        <h2>Join an amazing community</h2>
                    </div>
                </div>
                <div className="YouAreCoach-rightContainer">
                    <p>
                        Join a community where you can share with other experts and passionate coaches to grow together.
                        Working with Coachello means working with leading and inspiring companies. It also means
                        flexibility. Decide how many hours you want to work each week. Just focus on what you do the
                        best supported by our technology.
                        <b>Also, can you find a better mission than bringing coaching to
                            every company for a global better workplace?</b>
                    </p>
                    <button className="YouAreCoach-button">Learn More And Join Our Community</button>

                </div>
            </div>
        </div>
    );
};

export default YouAreCoach;
