// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const tabs = ["Frontend", "Backend", "Full Stack", "Android", "iOS", "UI", "UX", "UI/UX", "DevOps", "DevSecOps", "QA", "IT", "Cyber Security", "Networking", "System Administration", "Database", "Analytics", "Cloud Operations", "Project Management", "Tech Content Writer"];
  res.status(200).json({tabs})
}
