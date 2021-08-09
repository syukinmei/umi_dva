import styles from './index.less';
import {useEffect} from 'react'
export default function IndexPage() {
  useEffect(()=>{
    fetch('/api/users')
    .then(data=>data.json())
    .then(res=>{
      console.log(res)
    })
  })
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
