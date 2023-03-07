import React from 'react';
import './Why.scss'
import WhyCard from "../../components/WhyCard/WhyCard";
// @ts-ignore
import employeeIcon from '../../assets/img/whyNeed/employee.svg'
// @ts-ignore
import increaseIcon from '../../assets/img/whyNeed/increase.svg'
// @ts-ignore
import retentionIcon from '../../assets/img/whyNeed/retention.svg'
// @ts-ignore
import transformIcon from '../../assets/img/whyNeed/transform.svg'
// @ts-ignore
import creatingIcon from '../../assets/img/whyNeed/creating.svg'
// @ts-ignore
import diversityIcon from '../../assets/img/whyNeed/diversity.svg'
// @ts-ignore
import drivingIcon from '../../assets/img/whyNeed/driving.svg'

const Why = () => {
    return (
        <div className="Why">
            <div>
                <div className="Why-headerContainer">
                    <p className="h1-red">Why companies need Coachello?</p>
                    <h2>A personalised approach <br/>
                        for 2023 challenges </h2>
                </div>
                <div className="Why-cardContainer">
                    <div>
                        <WhyCard icon={employeeIcon} title="Employee Wellbeing"/>
                    </div>
                    <div>
                        <WhyCard icon={creatingIcon} title="Creating a Coaching Culture"/>

                    </div>
                    <div>
                        <WhyCard icon={drivingIcon} title=" Driving Leadership"/>

                    </div>
                    <div>
                        <WhyCard icon={retentionIcon} title="Retention & Engagement"/>

                    </div>
                    <div>
                        <WhyCard icon={increaseIcon} title="Increasing Performance"/>

                    </div>
                    <div>
                        <WhyCard icon={transformIcon} title="Transformational Change + The New Workspace "/>

                    </div>
                    <div>
                        <WhyCard icon={diversityIcon} title="Diversity and Inclusion"/>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Why;
