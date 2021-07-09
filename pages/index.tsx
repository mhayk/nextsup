import { supabase } from "../services/supabase";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(session);
    });
  });

  async function login() {
    const { error, data } = await supabase.auth.signIn({
      provider: "github",
    });

    if (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
}
