import React from "react";

export function ListofPlayers({ players }) {
    return (
        <div>
            <ul>
                {players.map((item) => {
                    return (
                        <li key={item.name}>
                            Mr. {item.name} <span>{item.score}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export function Scorebelow70({ players }) {

    let players70 = [];

    players.map((item) => {
        if (item.score <= 70) {
            players70.push(item);
        }
        return null;
    });

    return (
        <div>
            <ul>
                {players70.map((item) => (
                    <li key={item.name}>
                        Mr. {item.name} {item.score}
                    </li>
                ))}
            </ul>
        </div>
    );
}