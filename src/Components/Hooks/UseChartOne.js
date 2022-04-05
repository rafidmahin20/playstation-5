import { useEffect, useState } from 'react';

const UseChartOne = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('charts.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    return [data, setData];
};

export default UseChartOne;