import { useParams, Link } from "react-router-dom"
import { slugify } from "../utils/slugify"
import { useState } from "react"

export default function Remedies() {
  const { categorySlug } = useParams()
  const [openIssue, setOpenIssue] = useState(null)

  const categories = [
    {
      title: "Brain & Mental Health",
      issues: ["Stress, anxiety, depression", "Headaches & migraines", "Sleep disorders"],
    },
    { title: "Eyes", issues: ["Eye strain", "Dry eyes, irritation, blurred vision"] },
    { title: "Ears", issues: ["Ear infections", "Hearing strain"] },
    { title: "Mouth & Teeth", issues: ["Tooth decay", "Mouth ulcers"] },
    { title: "Digestive System", issues: ["Indigestion", "Constipation", "Food poisoning"] },
    { title: "Heart & Circulation", issues: ["High blood pressure", "Palpitations"] },
    { title: "Lungs & Breathing", issues: ["Respiratory infections", "Asthma flare-ups", "Smoking-related"] },
    { title: "Bones, Back & Muscles", issues: ["Back pain", "Shoulder strain", "Sports injuries"] },
    { title: "Skin & Hair", issues: ["Acne", "Fungal infections", "Hair fall"] },
    { title: "Reproductive Health", issues: ["Irregular periods", "STIs", "Menstrual cramps"] },
  ]

  const category = categories.find((c) => slugify(c.title) === categorySlug)

  if (!category) {
    return <h2 className="text-center mt-10 text-red-600">Category not found!</h2>
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        {category.title}
      </h1>

      <div className="space-y-4">
        {category.issues.map((issue, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-4">
            <button
              onClick={() => setOpenIssue(openIssue === i ? null : i)}
              className="w-full flex justify-between items-center"
            >
              <span className="font-medium">{issue}</span>
              <span className="text-blue-600">
                {openIssue === i ? "▲ Hide" : "▼ Read More"}
              </span>
            </button>

            {openIssue === i && (
              <div className="mt-2 bg-gray-100 p-3 rounded-lg text-gray-700">
                <p>
                  Remedies for <strong>{issue}</strong> will be listed here.
                </p>
                <ul className="list-disc list-inside mt-2">
                  <li>Remedy 1</li>
                  <li>Remedy 2</li>
                  <li>Remedy 3</li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  )
}
