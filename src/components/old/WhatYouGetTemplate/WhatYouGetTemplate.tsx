import React from 'react';
import './WhatYouGetTemplate.scss'

import WhatYouGetCard from "../WhatYouGetCard/WhatYouGetCard";

interface Props {
    title: string;
    cards:  {
        icon: any,
        header: string
    }[] ;
}

const WhatYouGetTemplate = (prop: Props) => {
    return (
        <div className="WhatYouGetTemplate">
            <div>
                < h2>{prop.title}</h2>
                <div>
                    {prop.cards.map(({icon, header}) =>
                        <div>
                            <WhatYouGetCard
                                header={header}

                                icon={icon}/>
                        </div>
                    )

                    }
                </div>

            </div>

        </div>


    )
        ;
};

export default WhatYouGetTemplate;
