export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    try {
      if (email !== "Hainam@gmail.com" || password !== "Hainam@123456") {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      res.status(200).json({ message: "Log in successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
