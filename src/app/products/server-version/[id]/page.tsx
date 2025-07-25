export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  return <div>Id - {id}</div>;
}