import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function EventGenre({ events }) {
    const [data, setData] = useState([]);

    const colors = ['#65A498', '#3D314A', '#684756', '#96705B', '#AB8476'];

    useEffect(() => {
        setData(() => getData());
    }, [events]);

    const getData = () => {
        const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
        const data = genres.map((genre, index) => {
            const number = events.filter((event) =>
                event.summary.includes(genre)
            ).length;
            return { genre, number };
        });
        console.log(data);
        return data;
    };

    return (
        <ResponsiveContainer height={400}>
            <PieChart width={300} height={300}>
                <Pie
                    data={data}
                    cx='50%'
                    cy='50%'
                    labelLine={false}
                    innerRadius={50}
                    outerRadius={100}
                    fill='#D0ABA0'
                    dataKey='number'
                    label={({ genre, percent }) => {
                        if (percent > 0) {
                            return `${(percent * 100).toFixed(0)}% ${genre}`;
                        }
                    }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}