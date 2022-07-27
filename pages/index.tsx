import Head from "next/head";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex justify-center items-center">
        <p className="font-bold text-3xl">Hello world</p>
      </div>
      <button className=" bg-emerald-300 font-bold p-5">Test</button>
    </div>
  );
}
