import { useRouter } from 'next/router';

export default function Edit() {
    const router = useRouter();
    const props = router.query;

    return (
        <div>
            <h1>Topic ID: {props.id}</h1>
            <h1>Topic Launch: {props.launch}</h1>
        </div>
    )
}