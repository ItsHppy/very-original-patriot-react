#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Список замен для черно-красного стиля
const replacements = [
  // 1. bg-accent/20 или bg-accent/10 на bg-gray-900
  [/bg-accent\/20/g, 'bg-gray-900'],
  [/bg-accent\/10/g, 'bg-gray-900'],
  
  // 2. bg-card/80 backdrop-blur-sm border-border на bg-gray-900 border-gray-700
  [/bg-card\/80 backdrop-blur-sm border-border/g, 'bg-gray-900 border-gray-700'],
  
  // 3. bg-card/60 на bg-gray-800 border-gray-700
  [/bg-card\/60(?![0-9])/g, 'bg-gray-800 border-gray-700'],
  
  // 4. text-accent на text-red-400
  [/text-accent/g, 'text-red-400'],
  
  // 5. text-yellow-700, text-yellow-800, text-blue-800 на text-red-300 или text-red-400
  [/text-yellow-700/g, 'text-red-300'],
  [/text-yellow-800/g, 'text-red-400'],
  [/text-blue-800/g, 'text-red-400'],
  [/text-blue-700/g, 'text-red-300'],
  [/text-blue-600/g, 'text-red-400'],
  [/text-green-800/g, 'text-red-400'],
  [/text-green-700/g, 'text-red-300'],
  [/text-green-600/g, 'text-red-400'],
  [/text-purple-800/g, 'text-red-400'],
  [/text-purple-700/g, 'text-red-300'],
  [/text-orange-600/g, 'text-red-400'],
  [/text-orange-700/g, 'text-red-300'],
  
  // 6. text-muted-foreground на text-gray-300
  [/text-muted-foreground/g, 'text-gray-300'],
  
  // 7. border-yellow-500 на border-red-500
  [/border-yellow-500/g, 'border-red-500'],
  [/border-yellow-300/g, 'border-red-400'],
  [/border-blue-500/g, 'border-red-500'],
  [/border-green-500/g, 'border-red-500'],
  [/border-purple-500/g, 'border-red-500'],
  
  // 9. Все цветные bg- классы заменить на gray-
  [/bg-yellow-100/g, 'bg-gray-900'],
  [/bg-green-100/g, 'bg-gray-900'],
  [/bg-blue-100/g, 'bg-gray-900'],
  [/bg-purple-100/g, 'bg-gray-900'],
  [/bg-red-50/g, 'bg-gray-900'],
  [/bg-gradient-to-r from-blue-50 to-green-50/g, 'bg-gray-800'],
  [/bg-gradient-to-r from-gray-50 to-red-50/g, 'bg-gray-800'],
  [/bg-gradient-to-br from-yellow-50 to-green-50/g, 'bg-gray-900'],
  [/bg-gradient-to-br from-green-50 to-blue-50/g, 'bg-gray-900'],
  [/bg-gradient-to-r bg-card\/80 backdrop-blur-sm/g, 'bg-gray-900'],
  
  // Цвета иконок и элементов
  [/text-primary/g, 'text-red-400'],
  [/text-yellow-500/g, 'text-red-400'],
  [/text-blue-500/g, 'text-red-400'],
  [/text-green-500/g, 'text-red-400'],
  [/text-red-500/g, 'text-red-400'],
  
  // Цветные бейджи
  [/bg-yellow-600/g, 'bg-red-600'],
  [/bg-green-600/g, 'bg-red-600'],
  [/bg-blue-600/g, 'bg-gray-600'],
  
  // Полосы прогресса
  [/bg-card\/600/g, 'bg-red-400'],
  [/bg-yellow-500/g, 'bg-red-400'],
  
  // Удаление transition и animation классов
  [/transition-all/g, ''],
  [/transition-shadow/g, ''],
  [/duration-1000/g, ''],
  [/hover:shadow-lg/g, ''],
  
  // Цвета границ hover
  [/hover:border-green-300/g, 'hover:border-red-400'],
  [/hover:border-blue-300/g, 'hover:border-red-400'],
  
  // Цвета для выбранных элементов
  [/border-green-500 bg-accent\/20 text-green-800/g, 'border-red-500 bg-gray-900 text-red-300'],
  [/border-border/g, 'border-gray-600'],
  
  // Цвета для различных состояний
  [/text-gray-600/g, 'text-gray-300'],
  [/text-gray-700/g, 'text-gray-300'],
];

function updateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    replacements.forEach(([search, replace]) => {
      const originalContent = content;
      content = content.replace(search, replace);
      if (content !== originalContent) {
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Обновлен: ${path.basename(filePath)}`);
      return true;
    } else {
      console.log(`⏭️  Пропущен: ${path.basename(filePath)} (изменений не найдено)`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Ошибка при обработке ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  const pagesDir = path.join(__dirname, 'src', 'pages');
  const pageNumbers = [72, 73, 74, 75, 76, 77, 78, 79, 80];
  
  console.log('🎨 Начинаем применение черно-красного стиля...\n');
  
  let totalUpdated = 0;
  
  pageNumbers.forEach(pageNum => {
    const filePath = path.join(pagesDir, `Page${pageNum}.tsx`);
    
    if (fs.existsSync(filePath)) {
      if (updateFile(filePath)) {
        totalUpdated++;
      }
    } else {
      console.log(`⚠️  Файл не найден: Page${pageNum}.tsx`);
    }
  });
  
  console.log(`\n🎉 Завершено! Обновлено файлов: ${totalUpdated}/${pageNumbers.length}`);
  console.log('📋 Примененные изменения:');
  console.log('   • bg-accent/20, bg-accent/10 → bg-gray-900');
  console.log('   • bg-card/80 backdrop-blur-sm border-border → bg-gray-900 border-gray-700');
  console.log('   • bg-card/60 → bg-gray-800 border-gray-700');
  console.log('   • text-accent → text-red-400');
  console.log('   • text-yellow-*, text-blue-*, text-green-* → text-red-*');
  console.log('   • text-muted-foreground → text-gray-300');
  console.log('   • border-*-500 → border-red-500');
  console.log('   • Все цветные bg- классы → gray-');
  console.log('   • Удалены transition и animation классы');
}

if (require.main === module) {
  main();
}