import SubtopicsTable from "../components/tables/SubtopicsTable";
import GenericEnginesTable from "../components/tables/GenericEnginesTable";
import QuizDrawer from "../components/quizzes/QuizDrawer";
import Quiz from "../components/quizzes/Quiz";
import Drawer from "../components/common/Drawer";
import { barrierViewData } from "./unit1/ApendixKnowledge";

export default function UnitOne() {
    const trEven = "bg-white content-center";
    const trOdd = "bg-gray-200 content-center";

    const subtopics = [
        { "id": "1", "title": "Enable and Configure Secret Engines" },
        { "id": "2", "title": "Practice Production Hardening" },
        { "id": "3", "title": "Auto-unseal Vault" },
        { "id": "4", "title": "Implement Integrated Storage" },
        { "id": "5", "title": "Enable and configure Authentication Methods" },
        { "id": "6", "title": "Practice Secure Vault Initialization" },
        { "id": "7", "title": "Generate a Root Token" },
        { "id": "8", "title": "Rekey Vault and Rotate Encryption Keys" }
    ];

    const genericEngines = [
        { "id": 1, "engine": "Cubbyhole", "description": "Internal mailbox for delivering messages to Vault users" },
        { "id": 2, "engine": "Identity", "description": "Identity engine" },
        { "id": 3, "engine": "Database", "description": "Allows Vault to control credentials generated on a database" },
        { "id": 4, "engine": "PKI", "description": "PKI engine" },
        { "id": 5, "engine": "KV", "description": "KV engine" },
        { "id": 6, "engine": "Transit", "description": "Transit engine" }
    ]

    const quizes = [
        {
            "question": "Enable KV Version: 1",
            "answer": "vault secrets enable kv"
        },
        {
            "question": "Disable KV Mount at /kv",
            "answer": "vault secrets disable kv"
        },
        {
            "question": "Move Mount kv/ -> mykv/",
            "answer": "vault secrets move kv mykv"
        },
        {
            "question": 'Tune kv/ description="lol"',
            "answer": "vault secrets tune -description=lol kv"
        }
    ];

    const barrierView = {
        "title": "Barrier View",
        "body": barrierViewData
    };

    return (
        <div className="text-center">
            <h1 className="text-2xl">Create Working Vault Server Configuration</h1>
            <p className="py-3">
                This section is comprised of 8 subtopics:
            </p>
            <SubtopicsTable subtopics={subtopics} />
            <hr />
            <h1 className="text-2xl text-left py-3">Enable and Configure Secrets Engines</h1>
            <p className="font-thin text-left px-4">
                While it is generally a good idea to be familiar with Vault secrets engines beyond the generic engines,
                the generic engines are what you will be tested on.
            </p>
            <br></br>
            <p className="font-thin text-left px-4">
                A list of the generic secrets engines are listed below.
            </p>
            <br></br>
            <GenericEnginesTable engines={genericEngines} />
            <h1 className="text-2xl text-left py-3">KV Secrets Engine</h1>
            <h1 className="text-xl text-left py-3">Secrets Engines Lifecycle</h1>
            <p className="font-thin text-left px-4">Most secrets engines can be enabled, disabled, tuned, and moved via the CLI or API. Previous versions of Vault called these "mounts", but that term was overloaded.
                <br />
                <br />
                <b>Enable</b> - This enables a secrets engine at a given path. secrets engines can be enabled at multiple paths. Each secrets engine is isolated to its path. By default, they are enabled at their "type" (e.g. "aws" enables at "aws/").
                <br />
                <b>Disable</b> - This disables an existing secrets engine. When a secrets engine is disabled, all of its secrets are revoked (if they support it), and all of the data stored for that engine in the physical storage layer is deleted.
                <br />
                <b>Move</b> - This moves the path for an existing secrets engine. This process revokes all secrets, since secret leases are tied to the path they were created at. The configuration data stored for the engine persists through the move.
                <br />
                <b>Tune</b> - This tunes global configuration for the secrets engine such as the TTLs.
                <br />
                <br />
            </p>
            <QuizDrawer title="Vault Secret Commands" header="Checking" footer="Checking" quizList={quizes} />
            <br />
            <p className="font-thin text-left px-4">
                Once a secrets engine is enabled, you can interact with it directly at its path according to its own API. Use vault path-help to determine the paths it responds to.

                Note that mount points cannot conflict with each other in Vault. There are two broad implications of this fact. The first is that you cannot have a mount which is prefixed with an existing mount. The second is that you cannot create a mount point that is named as a prefix of an existing mount. As an example, the mounts foo/bar and foo/baz can peacefully coexist with each other whereas foo and foo/baz cannot
            </p>
            <br />
            <Drawer content={barrierView} />
            <br />
            <br />
            <h1 className="text-2xl text-left py-3">Vault Production Hardening</h1>
        </div >
    )
}