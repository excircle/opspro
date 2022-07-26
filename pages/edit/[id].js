import { useRouter } from 'next/router';
import EditTopicsForm from '../components/forms/EditTopicsForm';

export default function Edit() {
    const router = useRouter();
    const props = router.query;

    return (
        <div>
            <EditTopicsForm props={props} />
        </div>
    )
}