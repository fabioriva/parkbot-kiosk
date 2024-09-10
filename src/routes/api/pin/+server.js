import { PUBLIC_API } from "$env/static/public";
import { json } from "@sveltejs/kit";

export async function POST({ request }) {
  const url = PUBLIC_API + "/pin";
  const { pin } = await request.json();
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ pin }),
  });
  const json_ = await res.json();
  console.log(`submitted ${pin}`, pin.length);
  return json(json_);
}
