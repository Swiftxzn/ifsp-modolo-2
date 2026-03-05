export default function Card({ title, color }) {
  return (
    <div className="card" style={{ backgroundColor: color }}>
        <img src="../assets/img/"></img>
      <h2>{title}</h2>

      <button style={{ color: color }}>Learn More</button>
    </div>
  );
}
