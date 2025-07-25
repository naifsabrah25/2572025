import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Eye, MessageCircle, Star, Trophy, Target, Zap } from 'lucide-react';
import { Account } from '../../types';

interface AccountCardProps {
  account: Account;
}

const AccountCard: React.FC<AccountCardProps> = ({ account }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const handleWhatsAppShare = () => {
    const message = `
مرحباً، أريد شراء هذا الحساب:

🎯 العنوان: ${account.title}
💰 السعر: ${account.price}$
🏆 المستوى: ${account.level}
⭐ الرتبة: ${account.tier}

📊 الإحصائيات:
• القتلى: ${account.stats.kills}
• المعارك: ${account.stats.matches}
• معدل الفوز: ${account.stats.winRate}%
• K/D: ${account.stats.kd}
• الضرر: ${account.stats.damage}

الرجاء التواصل معي لإتمام الصفقة.
    `;
    
    const whatsappUrl = `https://wa.me/967777826667?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      {/* Image Gallery */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={account.images[currentImageIndex]}
          alt={account.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        
        {/* Image Navigation */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {account.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex ? 'bg-orange-500 w-6' : 'bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Account Type Badge */}
        <div className="absolute top-2 right-2">
          {account.type === 'premium' ? (
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full flex items-center space-x-1 text-sm font-semibold">
              <Crown className="h-4 w-4" />
              <span>مميز</span>
            </div>
          ) : (
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full flex items-center space-x-1 text-sm font-semibold">
              <Star className="h-4 w-4" />
              <span>متنوع</span>
            </div>
          )}
        </div>

        {/* Price Tag */}
        <div className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full font-bold">
          ${account.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{account.title}</h3>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 text-orange-600">
              <Trophy className="h-4 w-4" />
              <span className="font-semibold">{account.level}</span>
            </div>
            <p className="text-xs text-gray-600">المستوى</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 text-purple-600">
              <Target className="h-4 w-4" />
              <span className="font-semibold">{account.tier}</span>
            </div>
            <p className="text-xs text-gray-600">الرتبة</p>
          </div>
        </div>

        {/* Key Stats Preview */}
        <div className="grid grid-cols-3 gap-2 mb-4 text-center">
          <div className="bg-red-50 p-2 rounded-lg">
            <p className="text-red-600 font-bold text-sm">{account.stats.kills}</p>
            <p className="text-xs text-gray-600">قتلى</p>
          </div>
          <div className="bg-blue-50 p-2 rounded-lg">
            <p className="text-blue-600 font-bold text-sm">{account.stats.winRate}%</p>
            <p className="text-xs text-gray-600">فوز</p>
          </div>
          <div className="bg-green-50 p-2 rounded-lg">
            <p className="text-green-600 font-bold text-sm">{account.stats.kd}</p>
            <p className="text-xs text-gray-600">K/D</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 rtl:space-x-reverse">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
          >
            <Eye className="h-4 w-4" />
            <span>عرض التفاصيل</span>
          </button>
          <button
            onClick={handleWhatsAppShare}
            className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-4 rounded-lg hover:from-green-600 hover:to-green-700 transition-all flex items-center justify-center space-x-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span>شراء الآن</span>
          </button>
        </div>
      </div>

      {/* Detailed Stats Modal */}
      {showDetails && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t bg-gray-50 p-6"
        >
          <h4 className="font-bold text-lg mb-4 text-center text-gray-800">إحصائيات مفصلة</h4>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-gray-600">إجمالي المعارك</p>
              <p className="font-bold text-blue-600">{account.stats.matches}</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-gray-600">إجمالي الضرر</p>
              <p className="font-bold text-red-600">{account.stats.damage.toLocaleString()}</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-gray-600">الطلقات الرأسية</p>
              <p className="font-bold text-orange-600">{account.stats.headshots}</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-gray-600">المركبات المدمرة</p>
              <p className="font-bold text-purple-600">{account.stats.vehicles}</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-gray-600">المساعدات</p>
              <p className="font-bold text-green-600">{account.stats.assists}</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-gray-600">الإنعاش</p>
              <p className="font-bold text-teal-600">{account.stats.revives}</p>
            </div>
          </div>

          {/* Items Preview */}
          <div className="mt-4 space-y-3">
            <div>
              <p className="font-semibold text-gray-700 mb-2">الأسلحة المتاحة</p>
              <div className="flex flex-wrap gap-2">
                {account.stats.weapons.slice(0, 5).map((weapon, index) => (
                  <span key={index} className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                    {weapon}
                  </span>
                ))}
                {account.stats.weapons.length > 5 && (
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                    +{account.stats.weapons.length - 5} أخرى
                  </span>
                )}
              </div>
            </div>
            
            <div>
              <p className="font-semibold text-gray-700 mb-2">الأزياء والسكنات</p>
              <div className="flex flex-wrap gap-2">
                {account.stats.skins.slice(0, 4).map((skin, index) => (
                  <span key={index} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                    {skin}
                  </span>
                ))}
                {account.stats.skins.length > 4 && (
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                    +{account.stats.skins.length - 4} أخرى
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default AccountCard;