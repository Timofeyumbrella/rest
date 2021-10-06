import { useState } from "react";
import { useRouter } from "next/router";
import useAuth from "hooks/useAuth";

function EventPage() {
  const router = useRouter();
  const { id } = router.query;

  return <div></div>;
}

export async function getServerSideProps() {
  return {
    props: { user: await useA },
  };
}

export default EventPage;
