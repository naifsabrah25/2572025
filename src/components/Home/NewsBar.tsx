import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Megaphone } from 'lucide-react';

const NewsBar = () => {
  const [news] = useState([
    'مرحباً بكم في متجر PUBG Mobile الأكثر أماناً وموثوقية',
    'عروض خاصة على الحسابات المميزة - خصم يصل إلى 30%',
    'خدمة عملاء متاحة 24/7 عبر الواتساب',
    'ضمان استرداد الأموال خلال 24 ساعة في حالة وجود مشكلة',
    'جميع الحسابات محققة ومضمونة 100%'
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [news.length]);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="flex items-center space-x-2 rtl:space-x-reverse bg-white/20 px-3 py-1 rounded-full">
            <Megaphone className="h-4 w-4" />
            <span className="text-sm font-medium whitespace-nowrap">أخبار المتجر</span>
          </div>
          
          <div className="flex-1 overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="whitespace-nowrap"
            >
              <span className="text-sm md:text-base font-medium">
                {news[currentIndex]}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBar;