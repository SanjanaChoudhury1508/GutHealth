import { useNavigate } from "react-router-dom"
import { slugify } from "../utils/slugify"

export default function HomePage() {
  const navigate = useNavigate()

  const sections = [
    { label: "Brain & Mental Health", icon: "🧠" },
    { label: "Eyes", icon: "👁️" },
    { label: "Ears", icon: "👂" },
    { label: "Mouth & Teeth", icon: "🦷" },
    { label: "Digestive System", icon: "🍽️" },
    { label: "Heart & Circulation", icon: "❤️" },
    { label: "Lungs & Breathing", icon: "🫁" },
    { label: "Bones, Back & Muscles", icon: "💪" },
    { label: "Skin & Hair", icon: "🧴" },
    { label: "Reproductive Health", icon: "⚕️" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {sections.map((sec) => (
        <div
          key={sec.label}
          onClick={() => navigate(`/remedies/${slugify(sec.label)}`)}
          className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-lg p-4 flex flex-col items-center transition"
        >
          <span className="text-5xl mb-3">{sec.icon}</span>
          <h2 className="font-semibold text-center">{sec.label}</h2>
        </div>
      ))}
    </div>
  )
}
