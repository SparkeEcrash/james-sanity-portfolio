import { SpinnerDotted } from "spinners-react";

export default function Loading() {
  return (
    <main className="flex flex-col justify-center items-center">
      <SpinnerDotted color="rgba(255,255,255, 0.7)" size={100} />
      <p className="text-3xl mt-10">Loading</p>
    </main>
  );
}
