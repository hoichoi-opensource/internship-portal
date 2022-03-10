import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SB_PROJECT_URL
const supabaseAnonKey = process.env.SB_API_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default async function handler(req, res) {
  const reqBody = req.body
  const { data, error } = await supabase
  .from(reqBody.experience === 'Working Professional' ? 'professional' : 'internship')
  .insert([
    reqBody,
  ])
  if (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong"})
  }
  console.log(data);
  res.send({ status: "ok"})
}