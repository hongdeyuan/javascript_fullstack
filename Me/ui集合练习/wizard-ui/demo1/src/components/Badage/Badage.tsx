import React from 'react';
import { Badge } from 'wizard-ui';

function BadgeS() {
    return (
        <>
        success: <Badge status="success" count={ 22 } dot={true} />
        info: <Badge status="info" count={ 22 } dot={true}  />
        critical: <Badge status="critical"  count={ 22 } dot={true} />
        warning: <Badge status="warning"   count={ 22 } dot={true} />
        danger: <Badge status="danger"  count={ 22 } dot={true}  />
        </>
    )
}

export default BadgeS