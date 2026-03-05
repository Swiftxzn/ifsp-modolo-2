export default function Footer() {
    const Ano = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {Ano} MyApp</p>
    </footer>
  );
}