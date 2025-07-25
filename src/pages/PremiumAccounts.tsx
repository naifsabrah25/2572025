import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Crown, Filter, Search } from 'lucide-react';
import AccountCard from '../components/Account/AccountCard';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { Account } from '../types';

const PremiumAccounts = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('all');

  // Mock data for demonstration
  useEffect(() => {
    const mockAccounts: Account[] = [
      {
        id: '1',
        title: 'حساب كونكرر مع M416 جلايسر',
        price: 250,
        level: 85,
        tier: 'Conqueror',
        type: 'premium',
        images: [
          'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        stats: {
          kills: 15420,
          matches: 3250,
          winRate: 87,
          kd: 4.8,
          damage: 2850000,
          headshots: 3850,
          vehicles: 245,
          assists: 1250,
          revives: 890,
          healing: 15600,
          distance: 125000,
          survivalTime: 850000,
          topTen: 2180,
          weapons: ['M416 Glacier', 'AWM Desert Camo', 'AKM Red Action', 'Kar98k Desert Digital', 'M24 Jungle Digital'],
          skins: ['School Skirt Set', 'Mythic Pharaoh X-Suit', 'Golden Pharaoh Set', 'Glacier M416 Skin'],
          outfits: ['Mythic Pharaoh X-Suit', 'School Skirt Legendary', 'Golden Pharaoh Complete Set'],
          vehicles_skins: ['Golden Mirado', 'Ice UAZ', 'Flame Dacia'],
          achievements: ['Chicken Master', 'Weapon Master', 'Vehicle Destroyer', 'Pacifist'],
          titles: ['Conqueror', 'Ace Master', 'Hot Drop King', 'Chicken Dinner'],
          frames: ['Conqueror Frame', 'Season 20 Frame', 'Mythic Frame'],
          emotes: ['Pharaoh Dance', 'Victory Dance', 'Chicken Dance'],
          parachutes: ['Golden Parachute', 'Mythic Parachute', 'Glacier Parachute'],
          backpacks: ['Level 3 Mythic', 'Golden Military', 'Pharaoh Backpack'],
          helmets: ['Mythic Pharaoh Helmet', 'Golden Combat Helmet'],
          masks: ['Pharaoh Mask', 'Golden Skull Mask'],
          glasses: ['Aviator Gold', 'Combat Tactical'],
          shoes: ['Combat Boots Gold', 'Mythic Pharaoh Boots'],
          gloves: ['Pharaoh Gloves', 'Golden Combat Gloves'],
          pan_skins: ['Golden Pan', 'Mythic Pharaoh Pan'],
          mythic_items: ['Pharaoh X-Suit', 'Golden Mirado', 'Mythic M416'],
          legendary_items: ['School Skirt Set', 'Desert Camo AWM', 'Red Action AKM'],
          epic_items: ['Combat Helmet', 'Military Vest', 'Tactical Boots']
        },
        created_at: '2025-01-01'
      },
      {
        id: '2',
        title: 'حساب إيس ماستر مع أسلحة نادرة',
        price: 180,
        level: 72,
        tier: 'Ace Master',
        type: 'premium',
        images: [
          'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?auto=compress&cs=tinysrgb&w=800'
        ],
        stats: {
          kills: 12800,
          matches: 2850,
          winRate: 82,
          kd: 4.2,
          damage: 2350000,
          headshots: 3200,
          vehicles: 180,
          assists: 1100,
          revives: 720,
          healing: 12800,
          distance: 98000,
          survivalTime: 680000,
          topTen: 1850,
          weapons: ['AKM Red Action', 'M416 Fool', 'AWM Magma', 'Kar98k Antique', 'Vector Neon Punk'],
          skins: ['Red Action Set', 'Neon Punk Collection', 'Antique Weapon Set'],
          outfits: ['Cyberpunk Set', 'Military Commander', 'Street Fighter'],
          vehicles_skins: ['Neon Buggy', 'Military UAZ', 'Racing Dacia'],
          achievements: ['Weapon Expert', 'Survival Master', 'Combat Veteran'],
          titles: ['Ace Master', 'Weapon Master', 'Squad Leader'],
          frames: ['Ace Frame', 'Season 19 Frame', 'Military Frame'],
          emotes: ['Victory Pose', 'Military Salute', 'Champion Dance'],
          parachutes: ['Military Parachute', 'Neon Parachute'],
          backpacks: ['Level 3 Military', 'Cyberpunk Backpack'],
          helmets: ['Military Combat Helmet', 'Cyberpunk Helmet'],
          masks: ['Military Mask', 'Cyberpunk Face Guard'],
          glasses: ['Tactical Goggles', 'Cyberpunk Visor'],
          shoes: ['Military Combat Boots', 'Street Fighter Shoes'],
          gloves: ['Military Gloves', 'Cyberpunk Gloves'],
          pan_skins: ['Military Pan', 'Neon Pan'],
          mythic_items: [],
          legendary_items: ['Red Action AKM', 'Fool M416', 'Magma AWM'],
          epic_items: ['Military Set', 'Cyberpunk Collection', 'Street Fighter Outfit']
        },
        created_at: '2025-01-02'
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
      (filterBy === 'high-level' && account.level >= 70) ||
      (filterBy === 'mythic' && account.stats.mythic_items.length > 0) ||
      (filterBy === 'legendary' && account.stats.legendary_items.length > 0);
    
    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center space-x-4 rtl:space-x-reverse mb-4"
          >
            <Crown className="h-12 w-12 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold">الحسابات المميزة</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl opacity-90 max-w-3xl mx-auto"
          >
            اكتشف مجموعتنا الحصرية من حسابات PUBG Mobile المميزة بأعلى المستويات وأندر الأسلحة
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
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
                className="appearance-none pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-white"
              >
                <option value="all">جميع الحسابات</option>
                <option value="high-level">مستوى عالي (70+)</option>
                <option value="mythic">يحتوي على أسلحة أسطورية</option>
                <option value="legendary">يحتوي على أسلحة نادرة</option>
              </select>
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
            <Crown className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-600 mb-2">لا توجد حسابات مطابقة</h3>
            <p className="text-gray-500">جرب تغيير معايير البحث أو التصفية</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PremiumAccounts;