
import React, { useState, useEffect, useRef } from 'react';
import { ProgressBar } from 'primereact/progressbar';
// import { Toast } from 'primereact/toast';

const ProgressBarDemo = () => {
    // const [value1, setValue1] = useState(0);
    // const toast = useRef(null);
    // const interval = useRef(null);

    // const displayValueTemplate = (value) => {
    //     return (
    //         <React.Fragment>
    //             {value}/<b>100</b>
    //         </React.Fragment>
    //     );
    // }

    // useEffect(() => {
    //     let val = value1;
    //     interval.current = setInterval(() => {
    //         val += Math.floor(Math.random() * 10) + 1;

    //         if (val >= 100) {
    //             val = 100;
    //             toast.current.show({ severity: 'info', summary: 'Success', detail: 'Process Completed' });
    //             clearInterval(interval.current);
    //         }

    //         setValue1(val);
    //     }, 2000);

    //     return () => {
    //         if (interval.current) {
    //             clearInterval(interval.current);
    //             interval.current = null;
    //         }
    //     }
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            {/* <Toast ref={toast}></Toast> */}

            <div className="card">
                <h5>Indeterminate</h5>
                <ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar>
            </div>
        </div>
    );
}

export default  ProgressBarDemo
                 