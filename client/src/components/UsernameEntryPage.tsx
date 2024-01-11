import { useEffect, useState } from "react";
import styles from "./UsernameEntryPage.module.css";

interface UsernamePageProps {
  setUsername: (username: string) => void;
}

const UsernameEntryPage = ({ setUsername }: UsernamePageProps) => {
  const [tempUsername, setTempUsername] = useState("");
  const [error, setError] = useState(""); 

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (tempUsername.trim().length < 3) { 
      setError("Username must be at least 3 characters long"); 
    } else {
      setUsername(tempUsername);
      setError(""); 
    }
  };

  useEffect(() => {
    const inputElement = document.getElementById("username");
    if (inputElement) inputElement.focus();
  }, []);

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor='username' className={styles.label}>Enter your username:</label>
        <input
          id='username'
          type='text'
          value={tempUsername}
          onChange={(e) => setTempUsername(e.target.value)}
          required
          className={styles.input}
          placeholder="e.g. 'John Doe'"
          maxLength={20}
        />
        {error && <p className={styles.error}>{error}</p>} 
        <button type='submit' className={styles.button}>
          Join Chat
        </button>
      </form>
    </div>
  );
};

export default UsernameEntryPage;