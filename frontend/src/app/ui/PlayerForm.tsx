"use client"

import React, { useEffect, useState } from 'react'
import { createPlayer } from '../lib/actions'

interface PlayerFormProps {
  title: string
}

interface Team {
  id: string
  name: string
}

export function PlayerForm({ title }: PlayerFormProps) {
  const [teams, setTeams] = useState<Team[]>([])

  useEffect(() => {
    async function fetchTeams() {
      const response = await fetch("http://localhost:3333/teams")
      const data = await response.json()
      setTeams(data)
    }

    fetchTeams()
  }, [])


  return (
    <div>
      <p>{title}</p>
      <form action={createPlayer}>
        <input type="text" name="name" placeholder="Nome" />
        <input type="number" name="age" placeholder="Idade" />
        <select name="teamId">
          <option value="">Selecione um time</option>
          {teams.map((team) => (
            <option key={team.id} value={team.id}>
              {team.name}
            </option>
          ))}
        </select>
        <button type='submit'>Salvar</button>
      </form>
    </div>
  )
}
