import React from 'react'
import Button from '@material-ui/core/Button';

export default function StartTrivia() {
    return (
        <div>
            <div>
                    <Button variant="contained" color="secondary">
                        Start
                    </Button>
                    <Button variant="contained" color="secondary">
                        Cancel
                    </Button>
                </div>
        </div>
    )
}
