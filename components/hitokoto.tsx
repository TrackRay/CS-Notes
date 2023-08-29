import { useState, useEffect } from 'react';
import { getHitokoto } from '../api/hitokoto';
import styles from './hitokoto.module.css'

function Hitokoto() {

  const [hitokoto, setHitokoto] = useState<{ hitokoto: string; }>();
  const [from, setFrom] = useState<{ from: string; }>();

  useEffect(() => {
    getHitokoto().then(res => {
      setHitokoto(res.hitokoto);
      setFrom(res.from);
    });
  }, []);

  return (
    <div className={styles.hitokoto}>
    <span style={{fontWeight:'bold', fontStyle:'italic'}} className={styles.hitokotoText}>{hitokoto}</span>  
    <span style={{fontWeight:'bold', fontStyle:'italic'}} className={styles.from}>——{from}</span> 
  </div>
  )

}

export default Hitokoto;