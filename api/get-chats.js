export default function handler(req, res) {
  const chats = [
    {
      phone: "972544475112",
      name: "מנהל ראשי",
      lastMessage: "האם יש עדכון על הלקוח?",
      lastMessageTime: new Date(Date.now() - 1 * 60 * 1000).toISOString()
    },
    {
      phone: "972506078353",
      name: "בוט ראשי",
      lastMessage: "שלחתי את הקוד: 4821",
      lastMessageTime: new Date(Date.now() - 3 * 60 * 1000).toISOString()
    },
    {
      phone: "972552532301",
      name: "מנהל צוות",
      lastMessage: "תודה רבה, טופל ✔️",
      lastMessageTime: new Date(Date.now() - 5 * 60 * 1000).toISOString()
    }
  ];

  res.status(200).json(chats);
}
