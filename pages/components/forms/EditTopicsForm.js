import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { updateTopic } from "../../../api/topicApi";

export default function EditTopicForm({ props }) {
    const { register, reset, handleSubmit } = useForm({
        defaultValues: useMemo(() => {
            return props;
        }, [props])
    });

    useEffect(() => {
        reset(props);
    }, [props]);

    const onFormSubmit = (data) => updateTopic(data);
    const onErrors = (errors) => console.error(errors);
    const styling = "border-solid border-gray-300 border px-2 w-full rounded text-gray-700";

    return (
        <form onSubmit={handleSubmit(onFormSubmit, onErrors)} className="w-full max-w-lg m-auto py-5 px-10 border">
            <div>
                <input type="text" name="id" className={styling} {...register('id')} />
                <input type="text" name="documentation" className={styling} {...register('documentation')} />
                <input type="text" name="doc_url" className={styling} {...register('doc_url')} />
                <input type="text" name="tutorial" className={styling} {...register('tutorial')} />
                <input type="text" name="tutorial_url" className={styling} {...register('tutorial_url')} />
                <input type="text" name="launch" className={styling} {...register('launch')} />
                <input type="text" name="launch_url" className={styling} {...register('launch_url')} />
                <br />
                <br />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded">Submit</button>
            </div>
        </form >
    )
}