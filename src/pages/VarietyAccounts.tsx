import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Filter, Search } from 'lucide-react';
import AccountCard from '../components/Account/AccountCard';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { Account } from '../types';

const VarietyAccounts = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('all');

  // Mock data for demonstration
  useEffect(() => {
    const mockAccounts: Account[] = [
      {
        id: '3',
        title: 'حساب تايتن مع مجموعة أسلحة متنوعة',
        price: 85,
        level: 45,
        tier: 'Titan',
        type: 'variety',
        images: [
          'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        stats: {
          kills: 8500,
          matches: 1800,
          winRate: 65,
          kd: 3.2,
          damage: 1850000,
          headshots: 2100,
          vehicles: 120,
          assists: 850,
          revives: 450,
          healing: 8500,
          distance: 65000,
          survivalTime: 450000,
          topTen: 1200,
          weapons: ['M416 Classic', 'AKM Thunder', 'AWM Classic', 'Kar98k Wood', 'UMP45 Jungle'],
          skins: ['Thunder Collection', 'Classic Weapon Set', 'Jungle Camo Series'],
          outfits: ['Military Basic', 'Urban Combat', 'Forest Hunter'],
          vehicles_skins: ['Basic Buggy', 'Classic UAZ'],
          achievements: ['Sharp Shooter', 'Survivor', 'Team Player'],
          titles: ['Titan', 'Marksman', 'Squad Support'],
          frames: ['Titan Frame', 'Season 18 Frame'],
          emotes: ['Basic Victory', 'Team Celebration'],
          parachutes: ['Standard Military', 'Forest Camo'],
          backpacks: ['Level 3 Standard', 'Military Issue'],
          helmets: ['Combat Helmet', 'Military Standard'],
          masks: ['Tactical Mask', 'Forest Camo Mask'],
          glasses: ['Standard Tactical', 'Basic Combat'],
          shoes: ['Combat Boots', 'Military Standard'],
          gloves: ['Tactical Gloves', 'Standard Combat'],
          pan_skins: ['Standard Pan', 'Military Pan'],
          mythic_items: [],
          legendary_items: ['Thunder AKM'],
          epic_items: ['Military Outfit', 'Forest Hunter Set', 'Thunder Collection']
        },
        created_at: '2025-01-03'
      },
      {
        id: '4',
        title: 'حساب داياموند للمبتدئين',
        price: 45,
        level: 28,
        tier: 'Diamond',
        type: 'variety',
        images: [
          'https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        stats: {
          kills: 4500,
          matches: 950,
          winRate: 58,
          kd: 2.8,
          damage: 980000,
          headshots: 1200,
          vehicles: 65,
          assists: 450,
          revives: 280,
          healing: 4500,
          distance: 35000,
          survivalTime: 280000,
          topTen: 650,
          weapons: ['M416 Standard', 'AKM Basic', 'SCAR-L Classic', 'Mini14 Wood'],
          skins: ['Basic Collection', 'Standard Series'],
          outfits: ['Casual Wear', 'Basic Military', 'School Outfit'],
          vehicles_skins: ['Standard Buggy'],
          achievements: ['First Winner', 'Headshot Expert'],
          titles: ['Diamond', 'Rookie Killer'],
          frames: ['Diamond Frame', 'Beginner Frame'],
          emotes: ['Basic Wave', 'Simple Dance'],
          parachutes: ['Standard Parachute'],
          backpacks: ['Level 2 Standard'],
          helmets: ['Basic Helmet'],
          masks: ['Simple Mask'],
          glasses: ['Basic Glasses'],
          shoes: ['Standard Shoes'],
          gloves: ['Basic Gloves'],
          pan_skins: ['Basic Pan'],
          mythic_items: [],
          legendary_items: [],
          epic_items: ['Basic Military Set', 'School Outfit']
        },
        created_at: '2025-01-04'
      },
      {
        id: '5',
        title: 'حساب كراون مع إحصائيات متوازنة',
        price: 120,
        level: 58,
        tier: 'Crown',
        type: 'variety',
        images: [
          'https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        stats: {
          kills: 10500,
          matches: 2200,
          winRate: 72,
          kd: 3.8,
          damage: 2150000,
          headshots: 2800,
          vehicles: 150,
          assists: 980,
          revives: 620,
          healing: 11200,
          distance: 85000,
          survivalTime: 580000,
          topTen: 1450,
          weapons: ['M416 Blue Flame', 'AKM Royal', 'AWM Sand Storm', 'Kar98k Silver', 'Vector Pink'],
          skins: ['Royal Collection', 'Blue Flame Series', 'Silver Edition'],
          outfits: ['Royal Guard', 'Elite Military', 'Silver Knight'],
          vehicles_skins: ['Royal Buggy', 'Silver UAZ', 'Elite Dacia'],
          achievements: ['Crown Master', 'Elite Shooter', 'Royal Guardian'],
          titles: ['Crown', 'Elite Marksman', 'Royal Commander'],
          frames: ['Crown Frame', 'Royal Frame', 'Elite Frame'],
          emotes: ['Royal Bow', 'Elite Salute', 'Crown Dance'],
          parachutes: ['Royal Parachute', 'Elite Parachute'],
          backpacks: ['Level 3 Royal', 'Elite Military'],
          helmets: ['Royal Crown Helmet', 'Elite Combat'],
          masks: ['Royal Mask', 'Elite Face Guard'],
          glasses: ['Royal Sunglasses', 'Elite Tactical'],
          shoes: ['Royal Boots', 'Elite Combat Boots'],
          gloves: ['Royal Gloves', 'Elite Tactical'],
          pan_skins: ['Royal Pan', 'Elite Pan'],
          mythic_items: [],
          legendary_items: ['Blue Flame M416', 'Royal AKM', 'Sand Storm AWM'],
          epic_items: ['Royal Collection', 'Elite Military Set', 'Silver Knight Outfit']
        },
        created_at: '2025-01-05'
      }
    ];

    setTimeout(() => {
      setAccounts(mockAccounts);
      setLoading(false);
    }, 1500);
  }, []);

  const filteredAccounts = accounts.filter(account => {
    const matchesSearch = account.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterBy === 'all' || 
      (filterBy === 'budget' && account.price <= 60) ||
      (filterBy === 'mid-range' && account.price > 60 && account.price <= 120) ||
      (filterBy === 'premium' && account.price > 120);
    
    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center space-x-4 rtl:space-x-reverse mb-4"
          >
            <Users className="h-12 w-12 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold">الحسابات المتنوعة</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl opacity-90 max-w-3xl mx-auto"
          >
            مجموعة واسعة من حسابات PUBG Mobile بمستويات وأسعار مختلفة لتناسب جميع اللاعبين
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="ابحث عن حساب..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
                className="appearance-none pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white"
              >
                <option value="all">جميع الحسابات</option>
                <option value="budget">اقتصادية ($60 وأقل)</option>
                <option value="mid-range">متوسطة ($61-$120)</option>
                <option value="premium">متقدمة ($121+)</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Price Range Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">دليل الأسعار</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <div className="text-2xl font-bold text-green-600 mb-2">$25 - $60</div>
              <div className="text-sm text-gray-600">حسابات اقتصادية للمبتدئين</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <div className="text-2xl font-bold text-blue-600 mb-2">$61 - $120</div>
              <div className="text-sm text-gray-600">حسابات متوسطة متوازنة</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <div className="text-2xl font-bold text-purple-600 mb-2">$121+</div>
              <div className="text-sm text-gray-600">حسابات متقدمة عالية الجودة</div>
            </div>
          </div>
        </motion.div>

        {/* Accounts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAccounts.map((account, index) => (
            <motion.div
              key={account.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <AccountCard account={account} />
            </motion.div>
          ))}
        </div>

        {filteredAccounts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-600 mb-2">لا توجد حسابات مطابقة</h3>
            <p className="text-gray-500">جرب تغيير معايير البحث أو التصفية</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default VarietyAccounts;