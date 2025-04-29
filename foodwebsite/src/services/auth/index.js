import { supabase } from "../../libs/supabase";

export const signUp = async (payload) => {
  const { name, email, password, gender } = payload;

  // Step 1: Sign up user
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (signUpError) {
    throw new Error(signUpError.message);
  }

  // Ensure you have user data after sign-up
  const user = signUpData.user;

  if (!user) {
    throw new Error("User signup failed. Please try again.");
  }

  // Step 2: Insert user profile into 'users' table
  const { data: userData, error: insertError } = await supabase
    .from("users")
    .insert([
      {
        user_id: user.id, // Get the user ID from the 'user' object
        name,
        email,
        gender,
      },
    ])
    .select("*")
    .single();

  if (insertError) {
    throw new Error(insertError.message);
  }

  return userData;
};
