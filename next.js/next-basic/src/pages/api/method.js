const method = (req, res) => {
  if (req.method === "GET") {
    res.status(200).json({ name: "Nath" })
  } else {
    res.status(200).json({ name: "Nick" })
  }
}
export default method