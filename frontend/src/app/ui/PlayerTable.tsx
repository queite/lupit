"use client"
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Link from '../../../node_modules/next/link';
import { deletePlayer } from '../lib/actions';

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

  const handleDelete = async (id: number) => {
    const result = await Swal.fire({
      title: 'Tem certeza?',
      text: 'Remover o jogador é uma ação irreversível',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    });

    if (result.isConfirmed) {
      const success = await deletePlayer(id)
      if (success) {
        setPlayers(players.filter(player => player.id !== id))
        Swal.fire('Removido!', 'O jogador foi removido com sucesso.', 'success')
      } else {
        Swal.fire('Erro!', 'Houve um problema ao remover o jogador.', 'error')
      }
    }
  };

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
              <button onClick={()=>handleDelete(player.id)}>
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
