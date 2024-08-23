"use server";

import { revalidatePath } from "../../../node_modules/next/cache";
import { redirect } from "../../../node_modules/next/navigation";

export async function createPlayer(formData: FormData) {

  const rawFormData = {
    name: formData.get('name'),
    age: formData.get('age'),
    teamId: formData.get('teamId')
  }

  if (!rawFormData.name || !rawFormData.age || !rawFormData.teamId) {
    return
  }

  await fetch("http://localhost:3333/player", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(rawFormData)
  })
}

export async function updatePlayer(id: number, formData: FormData) {

  const rawFormData = {
    name: formData.get('name'),
    age: formData.get('age'),
    teamId: formData.get('teamId')
  }
  console.log(rawFormData)
  if (!rawFormData.name || !rawFormData.age || !rawFormData.teamId) {
    return
  }

  await fetch(`http://localhost:3333/player/${id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(rawFormData)
  })

  revalidatePath('/');
  redirect('/');
}
