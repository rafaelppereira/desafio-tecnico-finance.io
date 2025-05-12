export async function getTransactions() {
  const res = await fetch(`/api/transactions`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error('Erro ao buscar transações');

  return res.json();
}
