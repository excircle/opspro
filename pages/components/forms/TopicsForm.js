import React from "react";
import { useForm } from "react-hook-form";
import { addTopic } from "../../../api/topicApi";

export default function TopicsForms() {
    const { register, handleSubmit } = useForm();
    const onFormSubmit = (data) => addTopic(data);
    const onErrors = (errors) => console.error(errors);
    const styling = "border-solid border-gray-300 border px-2 w-full rounded text-gray-700";

    return (
        <form onSubmit={handleSubmit(onFormSubmit, onErrors)} className="w-full max-w-lg m-auto py-5 px-10 border">
            <div>
                <input type="text" placeholder="ID" name="ID" className={styling} {...register('ID')} />
                <input type="text" placeholder="Documentation" name="Documentation" className={styling} {...register('Documentation')} />
                <input type="text" placeholder="Doc_URL" name="Doc_URL" className={styling} {...register('Doc_URL')} />
                <input type="text" placeholder="Tutorial" name="Tutorial" className={styling} {...register('Tutorial')} />
                <input type="text" placeholder="Tutorial_URL" name="Tutorial_URL" className={styling} {...register('Tutorial_URL')} />
                <input type="text" placeholder="Launch" name="Launch" className={styling} {...register('Launch')} />
                <input type="text" placeholder="Launch_URL" name="Launch_URL" className={styling} {...register('Launch_URL')} />
                <br />
                <br />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded">Submit</button>
            </div>
        </form >
    )
}