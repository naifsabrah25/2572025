import React from 'react';
import { motion } from 'framer-motion';
import { Shield, MessageCircle, CheckCircle, AlertTriangle, DollarSign, Clock } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center space-x-4 rtl:space-x-reverse mb-4"
          >
            <Shield className="h-12 w-12 text-orange-500" />
            <h1 className="text-4xl md:text-5xl font-bold">شروط المتجر</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl opacity-90 max-w-3xl mx-auto"
          >
            اقرأ شروط وأحكام الشراء والبيع بعناية لضمان تجربة آمنة وموثوقة
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-8 mb-8 text-center"
        >
          <MessageCircle className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">تواصل معنا</h2>
          <p className="text-lg mb-4">للاستفسارات والدعم الفني</p>
          <a
            href="https://wa.me/967777826667"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            <span>+967 777 826 667</span>
          </a>
        </motion.div>

        {/* Selling Terms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
            <div className="bg-orange-100 p-3 rounded-full">
              <DollarSign className="h-8 w-8 text-orange-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">شروط بيعك لحسابك</h2>
          </div>

          <div className="space-y-6">
            <div className="border-r-4 border-orange-500 bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center space-x-2 rtl:space-x-reverse">
                <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <span>تصفير حسابك من كل الارتباطات</span>
              </h3>
              
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p><strong>إزالة كل بريد إلكتروني في اللعبة:</strong> تأكد من حذف جميع عناوين البريد الإلكتروني المرتبطة بالحساب</p>
                </div>
                
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p><strong>إزالة حسابات التواصل الاجتماعي:</strong> احذف ارتباط منصة X (تويتر)، فيسبوك، وأي منصات أخرى مرتبطة باللعبة</p>
                </div>
                
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p><strong>الاحتفاظ برقم الهاتف فقط:</strong> اجعل ارتباط رقم هاتفك هو الوحيد المتبقي في اللعبة</p>
                </div>
                
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <p><strong>إجراء نهائي:</strong> تواصل معنا وعند الاتفاق سنقوم بعمل إيميل جديد لحسابك وسنرسله لك لتضيف الإيميل الجديد وتقوم بحذف رقم هاتفك</p>
                </div>
              </div>
            </div>

            <div className="border-r-4 border-green-500 bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center space-x-2 rtl:space-x-reverse">
                <Clock className="h-6 w-6" />
                <span>سياسة الدفع</span>
              </h3>
              <div className="flex items-start space-x-3 rtl:space-x-reverse text-gray-700">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
                <p><strong>مدة التحويل:</strong> سنرسل أموالك خلال 21 يوم لسياسة شركة ببجي للاسترجاع وضمان عدم وجود مشاكل</p>
              </div>
            </div>

            <div className="border-r-4 border-blue-500 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center space-x-2 rtl:space-x-reverse">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <span>التواصل والمتابعة</span>
              </h3>
              <div className="flex items-start space-x-3 rtl:space-x-reverse text-gray-700">
                <MessageCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <p>تواصل معنا على الواتساب <a href="https://wa.me/967777826667" className="text-blue-600 font-semibold hover:underline">+967 777 826 667</a> لبدء عملية البيع</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Buying Terms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
            <div className="bg-blue-100 p-3 rounded-full">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">شروط شراء حساب</h2>
          </div>

          <div className="space-y-6">
            <div className="border-r-4 border-blue-500 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center space-x-2 rtl:space-x-reverse">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <span>عملية الاختيار والطلب</span>
              </h3>
              
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p><strong>اختر الحساب المناسب:</strong> تصفح مجموعتنا من الحسابات المميزة والمتنوعة</p>
                </div>
                
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p><strong>أضف معلوماتك:</strong> قم بإدخال اسمك ورقم هاتفك وأي ملاحظات إضافية</p>
                </div>
                
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p><strong>اضغط "إرسال إلى الواتساب":</strong> سيتم توجيهك تلقائياً مع جميع التفاصيل</p>
                </div>
              </div>
            </div>

            <div className="border-r-4 border-green-500 bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center space-x-2 rtl:space-x-reverse">
                <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <span>التسليم التلقائي</span>
              </h3>
              
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                  <MessageCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p><strong>التوجه التلقائي للواتساب:</strong> سيتم إرسالك إلى الواتساب تلقائياً مع:</p>
                </div>
                
                <div className="ml-8 space-y-2">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>اسمك ورقم هاتفك</span>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>معلومات الحساب المطلوب</span>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>السعر والتفاصيل الكاملة</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-lg border-2 border-orange-200">
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                <Shield className="h-6 w-6 text-orange-600" />
                <h3 className="text-lg font-bold text-orange-800">ضمانات الأمان</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2 rtl:space-x-reverse">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>جميع الحسابات محققة ومضمونة 100%</span>
                </li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>دعم فني متاح 24/7</span>
                </li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>ضمان استرداد الأموال في حالة وجود مشكلة</span>
                </li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>تسليم فوري بمجرد تأكيد الدفع</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;