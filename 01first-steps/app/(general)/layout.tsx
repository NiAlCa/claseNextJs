
import styles from './layout.module.css'
import { Navbar } from '@/components';

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <Navbar/>
    <div className={styles.principal}>
      <h1>Hello Root Layout Root About</h1>
      {children}
    </div>
    </>
  );
}