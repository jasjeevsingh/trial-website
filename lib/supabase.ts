import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!



export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type WaitlistType = 'creator' | 'viewer'

export interface WaitlistEntry {
  id: string
  email: string
  type: WaitlistType
  created_at: string
  updated_at?: string
}

export async function addToWaitlist(email: string, type: WaitlistType): Promise<{ 
  success: boolean; 
  error?: string;
  message?: string;
}> {
  try {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return { 
        success: false, 
        error: 'Please enter a valid email address' 
      }
    }

    // Insert into waitlist table (let Supabase handle created_at)

    console.log('SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log('SUPABASE_ANON_KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        {
          email: email.toLowerCase().trim(),
          type
        }
      ])

    if (error) {
      // Handle duplicate email error
      if (error.code === '23505') {
        return { 
          success: false, 
          error: 'This email is already on the waitlist!' 
        }
      }
      
      console.error('Supabase error:', error)
      return { 
        success: false, 
        error: 'Something went wrong. Please try again later.' 
      }
    }

    return { 
      success: true,
      message: `Welcome to the Trial! You've been added to the ${type} waitlist.`
    }

  } catch (error) {
    console.error('Unexpected error:', error)
    return { 
      success: false, 
      error: 'Network error. Please check your connection and try again.' 
    }
  }
}

// Function to get waitlist stats (useful for admin dashboard later)
export async function getWaitlistStats() {
  try {
    const { data, error } = await supabase
      .from('waitlist')
      .select('type')

    if (error) throw error

    const stats = data.reduce((acc, entry) => {
      const entryType = entry.type as WaitlistType
      acc[entryType] = (acc[entryType] || 0) + 1
      return acc
    }, {} as Record<WaitlistType, number>)

    return {
      success: true,
      data: {
        creators: stats.creator || 0,
        viewers: stats.viewer || 0,
        total: data.length
      }
    }
  } catch (error) {
    console.error('Error fetching waitlist stats:', error)
    return { success: false, error: 'Failed to fetch stats' }
  }
}

// Function to check if email already exists
export async function checkEmailExists(email: string): Promise<boolean> {
  try {
    const { data, error } = await supabase
      .from('waitlist')
      .select('id')
      .eq('email', email.toLowerCase().trim())
      .limit(1)

    if (error) {
      console.error('Error checking email:', error)
      return false
    }

    return data.length > 0
  } catch (error) {
    console.error('Error checking email:', error)
    return false
  }
}
