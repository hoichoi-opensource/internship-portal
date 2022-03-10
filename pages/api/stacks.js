
export default function handler(req, res) {
    const stack = [
        {
            icon: "kotlin",
            name: "Kotlin"
        },
        {
            icon: "swift",
            name: "Swift"
        },
        {
            icon: "react",
            name: "React"
        },
        {
            icon: "node",
            name: "Node.js"
        },
        {
            icon: "firebase",
            name: "Firebase"
        },
        {
            icon: "redis",
            name: "Redis"
        },
        {
            icon: "amazon",
            name: "Amazon"
        },
        {
            icon: "stripe",
            name: "Stripe"
        },
        {
            icon: "git",
            name: "Git"
        },
        {
            icon: "docker",
            name: "Docker"
        },
    ];
    res.status(200).json({stack})
  }