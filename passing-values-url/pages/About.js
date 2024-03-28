import { useRouter } from "next/router";

export default function About() {
    const router = useRouter();
    const { name } = router.query;

    return(
        <>
            {name}
        </>
    )
}