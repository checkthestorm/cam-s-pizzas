import supabase from './supabase.js'

export async function getPasta() {    
    const { data, error } = await supabase.from('pastas').select('*')

    if (error) {
        throw new Error(error.message)
    }

    return data
}