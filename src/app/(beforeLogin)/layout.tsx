import { ReactNode } from 'react';
import styles from '@/app/(beforeLogin)/_component/main.module.css';

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}

// 주소가 localhost:3000일 때는 children->page.tsx, modal->@modal/default.tsx(page.tsx로 넣어도 되긴하는데 넣을 내용이 없어서 default.tsx로 넣었음)
// 주소가 localhost:3000/i/flow/login일 때는 children->i/flow/login/page.tsx, modal->@modal/i/flow/login/page.tsx
