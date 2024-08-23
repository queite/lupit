"use client"
import React, { useEffect, useState } from 'react';
import Link from '../../../node_modules/next/link';

export interface Player {
  id: number
  name: string
  age: number
  teams: { name: string}
  createdAt: string
  updatedAt: string
}

const PlayerTable: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await fetch('http://localhost:3333/players');
      const data = await response.json();

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
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player) => (
          <tr key={player.id}>
            <td>{player.id}</td>
            <td>{player.name}</td>
            <td>{player.teams.name}</td>
            <td>{new Date(player.createdAt).toLocaleDateString()}</td>
            <td>
              <Link href={`/jogador/${player.id}`}>
                <button >
                  <i className="fas fa-pencil-alt"></i>
                </button>
              </Link>
              <button>
                <i className="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlayerTable;
