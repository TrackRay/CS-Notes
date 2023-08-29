import { useState, useEffect } from 'react';
import { getHitokoto } from '../api/hitokoto';
import styles from './hitokoto.module.css'

function Hitokoto() {
  const [hitokoto, setHitokoto] = useState<string | null>(null);
  const [from, setFrom] = useState<string | null>(null);

  useEffect(() => {
    getHitokoto()
      .then(response => {
        console.log(response);
        if (response) {
          setHitokoto(response.data.hitokoto);
          setFrom(response.data.from);
        }
      })
      .catch(error => {
        console.error('Error fetching hitokoto:', error);
      });
  }, []);

  return (
    <div className={styles.hitokoto}>
    <span style={{fontWeight:'bold', fontStyle:'italic'}} className={styles.hitokotoText}>{hitokoto}</span>  
    <span style={{fontWeight:'bold', fontStyle:'italic'}} className={styles.from}>——{from}</span> 
  </div>
  );
}

export default Hitokoto;
