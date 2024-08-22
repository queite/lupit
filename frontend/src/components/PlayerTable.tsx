"use client"
import React, { useEffect, useState } from 'react';

interface Player {
  id: number;
  name: string;
  teams: { name: string};
  createdAt: string;
}

const PlayerTable: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await fetch('http://localhost:3333/players');
      const data = await response.json();
      console.log(data)
      setPlayers(data);
    };

    fetchPlayers();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Time</th>
          <th>Data de Criação</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <tr key={player.id}>
            <td>{player.id}</td>
            <td>{player.name}</td>
            <td>{player.teams.name}</td>
            <td>{new Date(player.createdAt).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlayerTable;
