import styles from "./page.module.css";
import { notFound } from "next/navigation";

export const revalidate = 10;

export default async function Home() {
  const response = await fetch(`http://localhost:8080`);
  if (response.status === 404) {
    notFound();
  }
  const body = await response.text();
  return <main className={styles.main}>{body}</main>;
}
