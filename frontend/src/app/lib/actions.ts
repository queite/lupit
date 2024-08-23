"use server";

export async function createPlayer(formData: FormData) {

  const rawFormData = {
    name: formData.get('name'),
    age: formData.get('age'),
    teamId: formData.get('teamId')
  }
  console.log(rawFormData)
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
