import Head from "next/head";
    
export default function HeadTag({ title }) {
  return (
    <Head>
      <title>{title} | تسک فرانت</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
}
