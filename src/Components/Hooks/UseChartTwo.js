import { useEffect, useState } from 'react';

const UseChartTwo = () => {
    const [data2, setData2] = useState([])
    useEffect(() => {
        fetch('charts.json')
        .then(res => res.json())
        .then(data => setData2(data))
    }, [])
    return [data2, setData2];
};

export default UseChartTwo;