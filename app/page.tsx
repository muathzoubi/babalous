'use client'

import { useState } from 'react'
import { Cairo } from 'next/font/google'
import { Menu, X ,Hop} from 'lucide-react'

const cairo = Cairo({ subsets: ['arabic'] })

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className={`${cairo.className} rtl`}>
      <header className="bg-green-500 text-white py-4 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="flex  flex-row font-bold"> <span> <img src='/bsb-logo-2.png'  className='w-30 h-10 ' alt='logo'/></span>            </h1>
                        <button
              className="lg:hidden"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
              <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 lg:space-x-reverse mt-4 lg:mt-0">
                <li><a href="#" className="block py-2 hover:text-emerald-200 transition duration-300">الرئيسية</a></li>
                <li><a href="#products" className="block py-2 hover:text-emerald-200 transition duration-300">منتجاتنا</a></li>
                <li><a href="#benefits" className="block py-2 hover:text-emerald-200 transition duration-300">الفوائد الصحية</a></li>
                <li><a href="#testimonials" className="block py-2 hover:text-emerald-200 transition duration-300">آراء العملاء</a></li>
                <li><a href="#faq" className="block py-2 hover:text-emerald-200 transition duration-300">الأسئلة الشائعة</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>

        <section className="bg-gradient-to-b from-green-500 to-blue-600 text-white py-16 md:py-24">

          <div className="container mx-auto px-4 text-center z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">اكتشف طعم الصحة الحقيقي</h2>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">منتجاتنا مصنوعة من أجود أنواع الفواكه الطازجة، لنقدم لك تجربة صحية فريدة ولذيذة</p>
            <button className="bg-white text-emerald-600 px-6 md:px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-100 transition duration-300 shadow-lg">جربة الآن</button>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16">لماذا منتجاتنا مميزة؟</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="text-center">
                <div className="bg-emerald-100 rounded-full p-6 w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
                  <img src="/3.png" alt="طبيعي 100%" width={48} height={48} />
                </div>
                <h4 className="text-xl font-semibold mb-4">طبيعي 100%</h4>
                <p className="text-gray-600">منتجاتنا خالية من أي إضافات صناعية، نقدم لك الطبيعة في أنقى صورها</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 rounded-full p-6 w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
                  <img src="/2.png" alt="غني بالفيتامينات" width={48} height={48} />
                </div>
                <h4 className="text-xl font-semibold mb-4">غني بالفيتامينات</h4>
                <p className="text-gray-600">مصدر ممتاز للفيتامينات والمعادن الأساسية لدعم صحتك اليومية</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 rounded-full p-6 w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 flex items-center justify-center">
                  <img src="/4.png" alt="طعم رائع" width={48} height={48} />
                </div>
                <h4 className="text-xl font-semibold mb-4">طعم رائع</h4>
                <p className="text-gray-600">مذاق لذيذ يرضي جميع الأذواق، الصحة لا تتعارض مع المتعة</p>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="bg-gray-100 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16">منتجاتنا</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
                <img src="/2.png" alt="عصير التفاح" width={300} height={300} className="mx-auto mb-6 rounded-lg" />
                <h4 className="text-xl font-semibold mb-4">عصير التفاح الطبيعي</h4>
                <p className="text-gray-600 mb-6">عصير تفاح طازج 100% بدون إضافات، مليء بالنكهة والفوائد الصحية</p>
                <button className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition duration-300">أضف إلى السلة</button>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
                <img src="/3.png" alt="سموثي الموز" width={300} height={300} className="mx-auto mb-6 rounded-lg" />
                <h4 className="text-xl font-semibold mb-4">سموثي الموز والفراولة</h4>
                <p className="text-gray-600 mb-6">مزيج لذيذ من الموز والفراولة الطازجة، غني بالفيتامينات والألياف</p>
                <button className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition duration-300">أضف إلى السلة</button>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
                <img src="/4.png" alt="سلطة فواكه" width={300} height={300} className="mx-auto mb-6 rounded-lg" />
                <h4 className="text-xl font-semibold mb-4">سلطة الفواكه الاستوائية</h4>
                <p className="text-gray-600 mb-6">مزيج من الفواكه الاستوائية الطازجة، وجبة خفيفة مثالية ومغذية</p>
                <button className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition duration-300">أضف إلى السلة</button>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16">الفوائد الصحية</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-4">تعزيز جهاز المناعة</h4>
                <p className="text-gray-600">تحتوي منتجاتنا على فيتامين C وغيره من مضادات الأكسدة التي تساعد في تقوية جهاز المناعة وحماية الجسم من الأمراض.</p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-4">تحسين صحة القلب</h4>
                <p className="text-gray-600">الفواكه غنية بالألياف والبوتاسيوم، مما يساعد في الحفاظ على صحة القلب والأوعية الدموية وتنظيم ضغط الدم.</p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-4">دعم الهضم</h4>
                <p className="text-gray-600">الألياف الموجودة في منتجاتنا تساعد في تحسين عملية الهضم وتعزيز صحة الجهاز الهضمي، مما يساهم في الشعور بالراحة والنشاط.</p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-4">مكافحة الشيخوخة</h4>
                <p className="text-gray-600">مضادات الأكسدة في الفواكه تساعد في مكافحة الجذور الحرة وتأخير علامات الشيخوخة، مما يساهم في الحفاظ على نضارة البشرة وحيوية الجسم.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-emerald-50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16">ماذا يقول عملاؤنا</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <p className="mb-6 text-gray-600">"منتجات رائعة وطبيعية بالكامل. أشعر بتحسن كبير في صحتي منذ أن بدأت في تناولها. أنصح الجميع بتجربتها!"</p>
                <p className="font-semibold">- أحمد محمد</p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <p className="mb-6 text-gray-600">"طعم رائع وجودة عالية. أنا سعيد جدًا بأنني اكتشفت هذه المنتجات! أصبحت جزءًا أساسيًا من نظامي الغذائي اليومي."</p>
                <p className="font-semibold">ام الشذب - سارة أحمد</p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <p className="mb-6 text-gray-600">"أطفالي يحبون هذه المنتجات، وأنا سعيدة لأنها صحية وطبيعية. طريقة رائعة لجعلهم يتناولون الفواكه بشكل منتظم."</p>
                <p className="font-semibold">- فاطمة علي</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16">الأسئلة الشائعة</h3>
            <div className="space-y-8 md:space-y-12">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-4">هل منتجاتكم خالية من المواد الحافظة؟</h4>
                <p className="text-gray-600">نعم، جميع منتجاتنا طبيعية 100% وخالية من أي مواد حافظة أو إضافات صناعية. نحن نفخر بتقديم منتجات صحية وطازجة لعملائنا.</p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-4">كيف يتم شحن المنتجات؟</h4>
                <p className="text-gray-600">نقوم بشحن منتجاتنا في عبوات مبردة خاصة لضمان وصولها إليك طازجة وبأفضل جودة. نستخدم خدمات شحن سريعة وموثوقة لضمان وصول المنتجات في الوقت المحدد.</p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-4">هل يمكنني إلغاء طلبي؟</h4>
                <p className="text-gray-600">يمكنك إلغاء طلبك في غضون ساعة من تقديمه دون أي رسوم. بعد ذلك، يرجى الاتصال بخدمة العملاء للمساعدة. سنبذل قصارى جهدنا لتلبية طلبك، ولكن قد تطبق بعض الرسوم على الإلغاءات المتأخرة.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-emerald-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h5 className="text-xl font-semibold mb-4">فاكهتي الصحية</h5>
              <p className="text-emerald-200">نقدم لكم أجود أنواع الفواكه الطازجة والمنتجات الصحية الطبيعية.</p>
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-4">روابط سريعة</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-emerald-200 hover:text-white transition duration-300">الرئيسية</a></li>
                <li><a href="#products" className="text-emerald-200 hover:text-white transition duration-300">منتجاتنا</a></li>
                <li><a href="#benefits" className="text-emerald-200 hover:text-white transition duration-300">الفوائد الصحية</a></li>
                <li><a href="#faq" className="text-emerald-200 hover:text-white transition duration-300">الأسئلة الشائعة</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-4">تواصل معنا</h5>
              <p className="text-emerald-200 mb-2">البريد الإلكتروني: info@babalous.com</p>
              <p className="text-emerald-200 mb-2">الهاتف: 123-456-7890</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-emerald-200 hover:text-white transition duration-300">
                  <span className="sr-only">فيسبوك</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-emerald-200 hover:text-white transition duration-300">
                  <span className="sr-only">انستغرام</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-emerald-200 hover:text-white transition duration-300">
                  <span className="sr-only">تويتر</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-emerald-700 text-center">
            <p className="text-emerald-200">   جميع الحقوق محفوظة  -  BAbalous &copy; 2025</p>
            <span>برمجة وتصميم <a className='text-blue-300' href='https://muathalzoubi.netlify.app/'>Muath A. Alzoubi</a></span>
          </div>
        </div>
      </footer>
    </div>
  )
}

