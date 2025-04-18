
import React from 'react';

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/background.png')" }} // העלה את התמונה בשם הזה
    >
      {/* Overlay שחור-שקוף לריכוך */}
      <div className="bg-black bg-opacity-60 min-h-screen">
        {/* תפריט עליון */}
        <header className="flex justify-between items-center px-6 py-4">
          <div className="text-2xl font-bold text-yellow-400">TRADING BUY+</div>
          <nav className="space-x-4">
            <a href="#" className="hover:text-yellow-400">בית</a>
            <a href="#" className="hover:text-yellow-400">עלינו</a>
            <a href="#" className="hover:text-yellow-400">התחבר</a>
          </nav>
        </header>

        {/* אזור פתיחה */}
        <section className="flex flex-col items-center justify-center text-center mt-24 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            הגבול בין שיגעון לגאונות — מתחיל כאן
          </h1>
          <p className="text-xl md:text-2xl mt-4 text-yellow-300">
            The line between madness and genius begins here
          </p>
          <button className="mt-8 px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black rounded-full shadow-xl text-lg">
            התחל עכשיו
          </button>
        </section>

        {/* אזור מה זה Trading Buy */}
        <section className="mt-32 px-6 md:px-20 text-center">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">מה זה TRADING BUY+</h2>
          <p className="text-lg max-w-2xl mx-auto">
            פלטפורמת מסחר חדשנית עם גרפים חכמים, בינה מלאכותית בזמן אמת, סימוני טריידים, ניתוח רגשי, מחולל תרחישים אוטומטי ועוד.
          </p>
        </section>

        {/* אזור הצטרפות */}
        <section className="mt-24 text-center px-6">
          <h3 className="text-2xl font-semibold mb-2">הצטרפו עכשיו</h3>
          <p className="mb-4">קבלו גישה ל־14 ימי ניסיון מלא בחינם</p>
          <form className="flex flex-col md:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="האימייל שלך"
              className="px-4 py-2 rounded-full text-black"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-full text-black"
            >
              הצטרף עכשיו
            </button>
          </form>
        </section>

        {/* פוטר */}
        <footer className="mt-32 text-center text-sm text-gray-400 pb-6">
          <p>כל הזכויות שמורות © TRADING BUY+</p>
        </footer>
      </div>
    </div>
  );
}
