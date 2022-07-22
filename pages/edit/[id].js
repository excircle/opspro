import { useRouter } from 'next/router';

export default function Edit() {
    const router = useRouter();
    const props = router.query;
    var values = JSON.parse(props.properties.replace(/'/g, '"'));
    return (
        <div>
            <h1>Topic ID: {props.id}</h1>
            <h1>Topic Launch: {values.name}</h1>
            <h1>Topic Tutorial: {values.name}</h1>
        </div>
    )
}