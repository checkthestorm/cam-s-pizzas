import { getUserID } from "./supa_users"
import supabase from "./supabase"

export async function sendOrders (contact, pizzas, price) {
    const ID = await getUserID()
    console.log(ID)
    const { data, error } = await supabase
  .from('orders')
  .insert([
    { user_id: ID, pizzas: pizzas, total_price: price, contact: contact},
  ])
  .select()

  if (error) {
    console.error(error)
    return null
}

    console.log(data)
  return data
}