import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp,
  Crown,
  MessageSquare,
  Image as ImageIcon,
  Settings,
  Plus,
  Edit,
  Trash2
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: 'إجمالي الحسابات',
      value: '1,247',
      change: '+12%',
      icon: ShoppingCart,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'العملاء النشطون',
      value: '584',
      change: '+8%',
      icon: Users,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'المبيعات اليوم',
      value: '$2,847',
      change: '+15%',
      icon: DollarSign,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'معدل النمو',
      value: '23.5%',
      change: '+5%',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const recentAccounts = [
    { id: 1, title: 'حساب كونكرر مع M416 جلايسر', price: '$250', status: 'متاح', type: 'premium' },
    { id: 2, title: 'حساب إيس ماستر متنوع', price: '$120', status: 'مباع', type: 'variety' },
    { id: 3, title: 'حساب تايتن للمبتدئين', price: '$85', status: 'متاح', type: 'variety' },
    { id: 4, title: 'حساب كراون مع سكنات نادرة', price: '$180', status: 'محجوز', type: 'premium' }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-green-400 text-sm font-semibold">{stat.change}</span>
              </div>
              <h3 className="text-gray-400 text-sm">{stat.title}</h3>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Accounts */}
      <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
        <h3 className="text-xl font-bold text-yellow-400 mb-6">الحسابات الأخيرة</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-right py-3 text-gray-400">العنوان</th>
                <th className="text-right py-3 text-gray-400">السعر</th>
                <th className="text-right py-3 text-gray-400">النوع</th>
                <th className="text-right py-3 text-gray-400">الحالة</th>
                <th className="text-right py-3 text-gray-400">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {recentAccounts.map((account) => (
                <tr key={account.id} className="border-b border-gray-800 hover:bg-gray-800/30">
                  <td className="py-4 text-white">{account.title}</td>
                  <td className="py-4 text-yellow-400 font-semibold">{account.price}</td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      account.type === 'premium' 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {account.type === 'premium' ? 'مميز' : 'متنوع'}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      account.status === 'متاح' 
                        ? 'bg-green-100 text-green-800'
                        : account.status === 'مباع'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {account.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-400 hover:text-blue-300">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-red-400 hover:text-red-300">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderAccounts = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-yellow-400">إدارة الحسابات</h2>
        <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 flex items-center space-x-2">
          <Plus className="h-5 w-5" />
          <span>إضافة حساب جديد</span>
        </button>
      </div>
      
      <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
        <p className="text-gray-400">قريباً - نموذج إضافة وتعديل الحسابات مع جميع الخصائص</p>
      </div>
    </div>
  );

  const renderNews = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-yellow-400">إدارة الأخبار</h2>
        <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600">
          إضافة خبر جديد
        </button>
      </div>
      
      <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
        <p className="text-gray-400">قريباً - إدارة الشريط الإخباري المتحرك</p>
      </div>
    </div>
  );

  const renderBanners = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-yellow-400">إدارة البانر</h2>
        <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600">
          إضافة صورة جديدة
        </button>
      </div>
      
      <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
        <p className="text-gray-400">قريباً - إدارة صور البانر المتحرك</p>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', name: 'نظرة عامة', icon: BarChart3 },
    { id: 'accounts', name: 'الحسابات', icon: Crown },
    { id: 'news', name: 'الأخبار', icon: MessageSquare },
    { id: 'banners', name: 'البانر', icon: ImageIcon },
    { id: 'settings', name: 'الإعدادات', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-500 to-black">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-black/90 backdrop-blur-sm min-h-screen border-r border-yellow-500/20">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              لوحة الإدارة
            </h1>
            <p className="text-gray-400 text-sm mt-1">PUBG Store Admin</p>
          </div>
          
          <nav className="px-4 space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-xl transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'accounts' && renderAccounts()}
            {activeTab === 'news' && renderNews()}
            {activeTab === 'banners' && renderBanners()}
            {activeTab === 'settings' && (
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">الإعدادات</h2>
                <p className="text-gray-400">قريباً - إعدادات النظام والتخصيص</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;