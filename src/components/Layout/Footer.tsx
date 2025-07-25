import React from 'react';
import { Target, MessageCircle, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="bg-orange-600 p-2 rounded-full">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">PUBG Store</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              متجرك الموثوق لشراء وبيع حسابات PUBG Mobile المميزة بأفضل الأسعار وأعلى مستوى من الأمان.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-500">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-orange-500 transition-colors">الرئيسية</a></li>
              <li><a href="/premium" className="text-gray-400 hover:text-orange-500 transition-colors">حسابات مميزة</a></li>
              <li><a href="/variety" className="text-gray-400 hover:text-orange-500 transition-colors">حسابات متنوعة</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-orange-500 transition-colors">شروط المتجر</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-orange-500">تواصل معنا</h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/967777826667" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 rtl:space-x-reverse text-gray-400 hover:text-green-500 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>+967 777 826 667</span>
              </a>
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-400">
                <Mail className="h-5 w-5" />
                <span>support@pubgstore.com</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse text-gray-400">
                <Phone className="h-5 w-5" />
                <span>متاح 24/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 PUBG Store. جميع الحقوق محفوظة. | تم التطوير بـ ❤️ للعبة PUBG Mobile
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;