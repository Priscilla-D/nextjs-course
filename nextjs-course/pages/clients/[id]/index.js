import { useRouter } from "next/router";

function ClientProjetcsPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The Projects of a given Client</h1>
    </div>
  );
}

export default ClientProjetcsPage;
