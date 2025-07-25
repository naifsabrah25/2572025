import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Crown, Users, Shield, Zap, MessageCircle, Star } from 'lucide-react';
import Hero from '../components/Home/Hero';
import NewsBar from '../components/Home/NewsBar';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'أمان مضمون',
      description: 'جميع الحسابات محققة ومضمونة 100%',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Zap,
      title: 'تسليم سريع',
      description: 'استلم حسابك خلال دقائق من الشراء',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: MessageCircle,
      title: 'دعم فوري',
      description: 'خدمة عملاء متاحة 24/7',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Star,
      title: 'جودة عالية',
      description: 'حسابات مختارة بعناية فائقة',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen">
      <NewsBar />
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              لماذا تختار <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">PUBG Store</span>؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نحن نقدم أفضل تجربة شراء لحسابات PUBG Mobile مع ضمان الجودة والأمان
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              اكتشف <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">الحسابات</span>
            </h2>
            <p className="text-xl text-gray-600">اختر من مجموعتنا المميزة من حسابات PUBG Mobile</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Premium Accounts */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <Crown className="h-16 w-16 mb-6 text-yellow-300" />
                <h3 className="text-3xl font-bold mb-4">حسابات مميزة</h3>
                <p className="text-lg mb-6 opacity-90">
                  حسابات بمستويات عالية وإحصائيات استثنائية مع أندر الأسلحة والأزياء
                </p>
                <Link
                  to="/premium"
                  className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors group-hover:scale-110 transform duration-300"
                >
                  <span>استكشف الآن</span>
                  <Crown className="h-5 w-5" />
                </Link>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-white/10 rounded-full"></div>
            </motion.div>

            {/* Variety Accounts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <Users className="h-16 w-16 mb-6 text-blue-200" />
                <h3 className="text-3xl font-bold mb-4">حسابات متنوعة</h3>
                <p className="text-lg mb-6 opacity-90">
                  مجموعة واسعة من الحسابات بمستويات وأسعار مختلفة لتناسب جميع الاحتياجات
                </p>
                <Link
                  to="/variety"
                  className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors group-hover:scale-110 transform duration-300"
                >
                  <span>تصفح المجموعة</span>
                  <Users className="h-5 w-5" />
                </Link>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-white/10 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">1000+</div>
              <div className="text-gray-300">حساب متاح</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-300">عميل راضي</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">24/7</div>
              <div className="text-gray-300">دعم العملاء</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">100%</div>
              <div className="text-gray-300">ضمان الأمان</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;