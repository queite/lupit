import React from 'react';

interface PlayerFormProps {
  title: string;
}

export function PlayerForm({ title }: PlayerFormProps) {
  async function handleCreatePlayer(form: FormData) {
    "use server"

    const name = form.get('name');
    const age = form.get('age');
    const team = form.get('team');

    if (!name || !age || !team) {
      return;
    }

    await fetch("http://localhost:3333/player", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        age,
        team
      })
    });
  }

  return (
    <div>
      <p>{title}</p>
      <form action={handleCreatePlayer}>
        <input type="text" name="name" placeholder="Nome" />
        <input type="number" name="age" placeholder="Idade" />
        <input type="text" name="team" placeholder="Time" />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
