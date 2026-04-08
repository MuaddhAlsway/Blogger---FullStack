import { useState } from 'react';
import { assets } from '../assets/assets';

function Header({ initialLang = 'en' }) {
  const [lang, setLang] = useState(initialLang);

  const handleSearch = (e) => {
    e.preventDefault();
    // Add search logic here
  };

  // Text content
  const content = {
    en: {
      announcement: 'New: AI Feature integrated',
      heading: 'Your own <span class="text-primary">blogging</span> <br/> platform',
      description: "This is your space to think out loud, to share what matters, and to write without filters. Whether it's one word or a thousand, your story starts right here.",
      searchPlaceholder: 'Search for blogs',
      searchButton: 'Search',
    },
    ar: {
      announcement: 'جديد: تم دمج ميزة الذكاء الاصطناعي',
      heading: 'منصتك <span class="text-primary">المدونات</span> الخاصة <br/> بك',
      description: 'هذه مساحتك للتعبير بحرية، لمشاركة ما يهمك، والكتابة دون قيود. سواء كانت كلمة واحدة أو ألف كلمة، قصتك تبدأ هنا.',
      searchPlaceholder: 'ابحث عن المدونات',
      searchButton: 'ابحث',
    }
  };

  const texts = content[lang];

  return (
    <div className={`mx-8 sm:mx-16 xl:mx-24 relative ${lang === 'ar' ? 'text-right' : 'text-left'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="text-center mt-20 mb-8">
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary">
          <p>{texts.announcement}</p>
          <img src={assets.star_icon} alt="Star icon" className="w-4 h-4" />
        </div>

        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-tight text-gray-700" dangerouslySetInnerHTML={{ __html: texts.heading }} />

        <p className="my-6 sm:my-8 max-w-2xl mx-auto max-sm:text-xs text-gray-500">
          {texts.description}
        </p>

        <form onSubmit={handleSearch} className="flex justify-between max-w-lg mx-auto max-sm:scale-75 border border-gray-300 bg-white rounded overflow-hidden">
          <input 
            required 
            type="text" 
            placeholder={texts.searchPlaceholder} 
            className="w-full pl-4 outline-none" 
          />

          <button  
            className="bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer" 
            type="submit"
          >
            {texts.searchButton}
          </button>
        </form>

        {/* Language switch button */}
        <div className="mt-4">
          <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} className="text-sm text-primary underline">
            {lang === 'en' ? 'العربية' : 'English'}
          </button>
        </div>
      </div>

      <img 
        src={assets.gradientBackground} 
        alt="Gradient background" 
        className="absolute top-24 -z-10 opacity-50 w-full"
      />
    </div>
  );
}

export default Header;