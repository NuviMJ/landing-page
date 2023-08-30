import React from "react";

const YouAreCoach = () => {
  return (
    <div className="section bg-warm-light">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1">
          <p className="red-heading">You’re a coach?</p>
          <h2 className="mt-3 lg:mb-10">
            Join an amazing <br />
            community
          </h2>
        </div>

        <div className="flex-1">
          <p className="mb-8">
            Join a community where you can share with other experts and
            passionate coaches to grow together. Working with Coachello means
            working with leading and inspiring companies. It also means
            flexibility. Decide how many hours you want to work each week. Just
            focus on what you do the best supported by our technology. Also, can
            you find a better mission than bringing coaching to every company to
            create a better workplace and prepare them for the challenges of
            tomorrow?
          </p>
          <a href="mailto:livia@coachello.io">
            <button className="dashboard-button bg-black rounded-full">
              Learn More And Join Our Community
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default YouAreCoach;
