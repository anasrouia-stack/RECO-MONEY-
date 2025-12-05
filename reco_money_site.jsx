import React from "react";

// موقع شركة احترافي (React + Tailwind CSS)
// مهيأ للتعديل وإضافة محتوى شركتك

export default function CompanyWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900" dir="rtl">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-700">اسم الشركة</h1>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services" className="hover:text-blue-600">خدماتنا</a>
            <a href="#about" className="hover:text-blue-600">من نحن</a>
            <a href="#contact" className="hover:text-blue-600">تواصل</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-4">عنوان رئيسي عن شركتك</h2>
            <p className="text-gray-700 mb-6">وصف مختصر ومهني عن الخدمات التي تقدمها شركتك.</p>
            <a href="#contact" className="px-5 py-3 bg-blue-600 text-white rounded-md">اتصل بنا</a>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600 mb-2">نموذج تواصل</p>
            <form className="flex flex-col gap-3">
              <input placeholder="الاسم" className="border rounded-md p-2" />
              <input placeholder="الهاتف أو الإيميل" className="border rounded-md p-2" />
              <textarea placeholder="الرسالة" className="border rounded-md p-2" rows={4} />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md">إرسال</button>
            </form>
          </div>
        </section>

        <section id="services" className="mt-16">
          <h3 className="text-2xl font-bold mb-4">خدماتنا</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-md shadow">
              <h4 className="font-semibold mb-2">خدمة 1</h4>
              <p className="text-sm text-gray-700">شرح مختصر.</p>
            </div>
            <div className="bg-white p-6 rounded-md shadow">
              <h4 className="font-semibold mb-2">خدمة 2</h4>
              <p className="text-sm text-gray-700">شرح مختصر.</p>
            </div>
            <div className="bg-white p-6 rounded-md shadow">
              <h4 className="font-semibold mb-2">خدمة 3</h4>
              <p className="text-sm text-gray-700">شرح مختصر.</p>
            </div>
          </div>
        </section>

        <section id="about" className="mt-16 bg-white p-6 rounded-md shadow">
          <h3 className="text-2xl font-bold mb-3">من نحن</h3>
          <p className="text-gray-700">نبذة تعريفية احترافية عن شركتك، خبرتك، فريقك، أو تاريخ الشركة.</p>
        </section>

        <section id="contact" className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-md shadow">
            <h4 className="text-xl font-bold mb-3">معلومات التواصل</h4>
            <p>الهاتف: +212 000 000 000</p>
            <p>الإيميل: company@example.com</p>
            <p>العنوان: ضع العنوان هنا</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow">
            <h4 className="text-xl font-bold mb-3">خريطة</h4>
            <div className="w-full h-56 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">Google Maps</div>
          </div>
        </section>

        <footer className="mt-16 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} اسم الشركة - جميع الحقوق محفوظة.
        </footer>