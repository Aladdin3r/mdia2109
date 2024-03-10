import Head from "next/head";

export default function HeadArea({
    title="default",
    description="default description"
}) {
    
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="author" content="Rawan Aladdin" />
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    )
}