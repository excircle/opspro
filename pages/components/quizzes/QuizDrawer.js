import Quiz from "./Quiz";

export default function QuizDrawer({ title, header, quizList, footer }) {

    return (
        <div>
            <details className="px-4">
                <summary>{title}</summary>
                < br />
                <div className="align-middle flex justify-center space-x-4">
                    {quizList.map((quiz) => (
                        <Quiz question={quiz} />
                    ))}
                </div>
            </details>
        </div>
    )
}