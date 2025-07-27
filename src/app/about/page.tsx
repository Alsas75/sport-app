export default async function About() {
  const url = process.env.BASE_URL;
  const res = await fetch(url+ "/api/hello");
  const { message } = await res.json();
  return (
    <div className="px-28 py-20">
      <h2>О проекте</h2>
      <p>Платформа для онлайн-обучения различным видам спорта</p>
      <p>{message}</p>
    </div>
  );
}
