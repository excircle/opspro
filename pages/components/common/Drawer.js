export default function Drawer({ content }) {
    return (
        <div>
            <details className="text-left px-4">
                <summary>{content.title}</summary>
                <p className="font-thin text-left px-4">{content.body}</p>
            </details>
        </div>
    )
}