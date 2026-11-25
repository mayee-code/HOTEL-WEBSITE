// Mobile Navigation
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  siteNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));
}

// Live Open Status (10:00 AM – 11:30 PM)
const liveStatus = document.getElementById('liveStatus');
if (liveStatus) {
  const now = new Date();
  const mins = now.getHours() * 60 + now.getMinutes();
  const isOpen = mins >= 600 && mins < 1410;
  liveStatus.textContent = isOpen ? '● Open right now' : '● Opens daily at 10:00 AM';
}

// Organised Menu Book Data (8 Cuisine Groups)
const MENU_GROUPS = [
  {
    id: 'sadguru-special',
    name: 'Sadguru Special',
    tagline: 'House-signature gravies, ghee roasts & special biryani crafted by our chefs.',
    image: '4.png',
    sections: [
      {
        title: 'Chef’s Signature Dishes',
        note: 'All Jain items preparation ₹20 extra.',
        items: [
          ['Special Veg.', 314], ['Veg. Tiranga', 352], ['Veg. Patiyala', 314],
          ['Paneer Lababdar', 286], ['Paneer Lapeta', 286], ['Paneer Ghee Roast', 300],
          ['Paneer Cheese Tawa', 300], ['Sadguru Special Biryani', 314]
        ]
      }
    ]
  },
  {
    id: 'south-indian',
    name: 'South Indian & Snacks',
    tagline: 'Crisp ghee-roasted dosas, uttappams, steaming idlis, medu vadas & fasting specials.',
    image: '2.png',
    sections: [
      {
        title: 'Dosa & Uttappam',
        note: 'Prepared in pure Ghee. Butter extra ₹10 · Cheese extra ₹15.',
        items: [
          ['Sada Dosa', 105], ['Masala Dosa', 124], ['Mysore Sada Dosa', 162],
          ['Mysore Masala Dosa', 171], ['Paper Sada Dosa', 162], ['Paper Masala Dosa', 171],
          ['Rava Sada Dosa', 162], ['Rava Masala Dosa', 171], ['Onion Rava Sada Dosa', 181],
          ['Onion Rava Masala Dosa', 191], ['Uttappam', 105], ['Onion Uttappam', 124],
          ['Tomato Uttappam', 124], ['Tomato Onion Uttappam', 124], ['Masala Uttappam', 133],
          ['Schezwan Sada Dosa', 143], ['Schezwan Masala Dosa', 152],
          ['Spl. Spring Dosa', 171], ['Spring Dosa', 152]
        ]
      },
      {
        title: 'Snacks & Fasting',
        items: [
          ['Misal Pav', 115], ['Dahi Misal Pav', 124], ['Steam Idli', 95],
          ['Medu Vada', 124], ['Idli Medu Vada', 115], ['Dahi Vada', 124],
          ['Idli Fry', 124], ['Plain Pav (1pc)', 6],
          ['Sabudana Wada (Fasting)', 124], ['Sabudana Khichdi (Fasting)', 124],
          ['Finger Chips (Fasting)', 124]
        ]
      }
    ]
  },
  {
    id: 'pav-bhaji',
    name: 'Pav Bhaji & Fast Food',
    tagline: 'Mumbai-style butter pav bhaji, toasted & grilled sandwiches, and cheesy veg pizzas.',
    image: '1.png',
    sections: [
      {
        title: 'Pav Bhaji',
        items: [
          ['Pav Bhaji', 162], ['Jain Pav Bhaji', 200], ['Spl. Pav Bhaji', 200],
          ['Cheese Pav Bhaji', 200], ['Only Bhaji', 143], ['Masala Pav', 133],
          ['Butter Pav (1pc)', 12], ['Extra Butter', 20]
        ]
      },
      {
        title: 'Sandwiches',
        items: [
          ['Veg. Sandwich', 114], ['Veg. Toast Sandwich', 124], ['Veg. Cheese Sandwich', 133],
          ['Veg. Cheese Toast S/W', 143], ['Cheese Sandwich', 133], ['Cheese Toast Sandwich', 143],
          ['Bread Butter', 57], ['Toast Butter', 76], ['Grilled Sandwich', 152],
          ['Cheese Grilled Sandwich', 162], ['Veg. Cheese Grilled S/W', 171]
        ]
      },
      {
        title: 'Pizzas',
        items: [
          ['Veg. Pizza', 210], ['Mushroom Veg. Pizza', 257], ['Only Capsicum Pizza', 257],
          ['Only Cheese Pizza', 257], ['Tomato Cheese Pizza', 257], ['Paneer Veg. Pizza', 257],
          ['Only Paneer Pizza', 286], ['Sadguru Special Pizza', 286], ['Extra Cheese', 60]
        ]
      }
    ]
  },
  {
    id: 'punjabi-paneer',
    name: 'Punjabi & Paneer',
    tagline: 'Rich North Indian curries, pure paneer delicacies, royal white gravies & dry starters.',
    image: '5.png',
    sections: [
      {
        title: 'Punjabi Dishes',
        items: [
          ['Veg. Chilly Milly', 229], ['Veg. Kurma (sweet)', 229], ['Veg. Kadai', 229],
          ['Veg. Makhanwala (sweet)', 229], ['Veg. Maharaja', 314], ['Veg. Kolhapuri', 229],
          ['Veg. Handi', 267], ['Veg. Buna Masala', 229], ['Mix Veg', 229],
          ['Veg. Hyderabadi Masala', 238], ['Veg. Maratha', 248], ['Veg. Tawa Masala', 248],
          ['Plain Palak', 181], ['Aloo Palak', 181], ['Aloo Methi', 181],
          ['Methi Mutter', 200], ['Methi Masala', 200], ['Lasooni Methi', 200],
          ['Aloo Mutter', 200], ['Aloo Gobi', 200], ['Green Peas Masala', 200],
          ['Bhendi Masala', 200], ['Bhendi-Do-Pyaza', 200], ['Tomato Bharta', 229],
          ['Baigan Bharta', 229], ['Baigan Masala', 219], ['Dal Fry', 152],
          ['Dal Tadka', 162], ['Kolhapuri Dal Fry', 200], ['Kolhapuri Dal Tadka', 210],
          ['Channa Masala', 229]
        ]
      },
      {
        title: 'Paneer, Mushroom & Kaju Dishes',
        note: 'We use only pure paneer in our restaurant — never cheese analogue.',
        items: [
          ['Paneer Kolhapuri', 248], ['Paneer Jalfreji', 248], ['Paneer Kadai', 248],
          ['Paneer Palak', 248], ['Paneer Tikka Masala', 267], ['Paneer Makhanwala (sweet)', 248],
          ['Paneer Butter Masala', 248], ['Paneer Mutter', 248], ['Paneer Bhurji', 248],
          ['Paneer Chana', 248], ['Paneer Handi', 300], ['Paneer Tawa Masala', 300],
          ['Paneer Masala', 248], ['Mushroom Handi', 300], ['Mushroom Kadai', 248],
          ['Mushroom Paneer', 248], ['Mushroom Tikka Masala', 267], ['Mushroom Baby Corn', 248],
          ['Mushroom Kaju Masala', 300], ['Mushroom Tawa Masala', 300], ['Mushroom Masala', 248],
          ['Mushroom Mutter', 248], ['Kaju Masala', 314], ['Kaju Mawa Masala (sweet)', 314]
        ]
      },
      {
        title: 'White Gravy & Kofta Special',
        items: [
          ['Navratna Kurma (White Gravy)', 229], ['Methi Malai Mutter (White Gravy)', 229],
          ['Shahi Paneer (White Gravy)', 229], ['Paneer Pasanda (White Gravy)', 248],
          ['Veg. Kofta (spicy)', 229], ['Kashmiri Kofta', 248],
          ['Malai Kofta (white gravy)', 248], ['Cheese Kofta (white gravy)', 248]
        ]
      },
      {
        title: 'Dry Dishes',
        items: [
          ['Veg. Hara Bhara', 229], ['Alu Jeera', 200], ['Alu Gobi', 200],
          ['Alu Baigan', 200], ['Alu Bhendi', 200], ['Bhendi Fry', 200],
          ['Paneer Tikka Dry', 267], ['Veg. Spring Roll', 238],
          ['Paneer Spring Roll', 267], ['Mushroom Spring Roll', 267]
        ]
      }
    ]
  },
  {
    id: 'thali-tandoori',
    name: 'Thali & Tandoori',
    tagline: 'Wholesome pure-veg Mini Thali alongside hot tandoori rotis, naans & stuffed parathas.',
    image: '3.png',
    sections: [
      {
        title: 'Thali',
        items: [
          ['Mini Thali (2 bhaji, 3 chapati, dal, rice, papad, pickle & sweet)', 210]
        ]
      },
      {
        title: 'Tandoori Breads & Parathas',
        items: [
          ['Roti', 24], ['Butter Roti', 29], ['Naan', 48], ['Butter Naan', 57],
          ['Garlic Naan', 77], ['Butter Garlic Naan', 100], ['Kulcha', 48],
          ['Butter Kulcha', 52], ['Paneer Kulcha', 110], ['Tawa Chapati', 12],
          ['Butter Chapati', 16], ['Roti ki Tokri', 300],
          ['Paratha', 52], ['Butter Paratha', 62], ['Aloo Paratha', 119],
          ['Stuff Paratha', 119], ['Gobi Paratha', 119], ['Paneer Paratha', 152]
        ]
      }
    ]
  },
  {
    id: 'biryani-rice',
    name: 'Biryani & Rice',
    tagline: 'Fragrant dum biryanis, 1 KG party pots, tawa pulavs, khichadi & fresh raitas.',
    image: '6.png',
    sections: [
      {
        title: 'Biryani & 1 KG Party Biryani',
        items: [
          ['Veg. Biryani', 210], ['Paneer Biryani', 229], ['Cheese Biryani', 229],
          ['Paneer Tikka Biryani', 248], ['Kashmiri Biryani (sweet)', 229],
          ['Mushroom Biryani', 229], ['Hyderabadi Biryani', 219], ['Dum Biryani', 257],
          ['1 KG Veg. Biryani', 1200], ['1 KG Paneer Biryani', 1300],
          ['1 KG Mushroom Biryani', 1300], ['1 KG Paneer Tikka Biryani', 1400]
        ]
      },
      {
        title: 'Pulav',
        items: [
          ['Special Pulav', 238], ['Veg. Pulav', 210], ['Green Peas Pulav', 210],
          ['Paneer Pulav', 229], ['Mushroom Pulav', 229], ['Cheese Pulav', 229],
          ['Kashmiri Pulav', 229], ['Tawa Pulav', 210], ['Tawa Paneer Pulav', 229],
          ['Tawa Cheese Pulav', 229], ['Tawa Mushroom Pulav', 229]
        ]
      },
      {
        title: 'Rice, Papad, Salad & Raita',
        items: [
          ['Tomato Rice', 200], ['Jeera Rice', 133], ['Jeera Rice (half)', 76],
          ['Steam Rice', 95], ['Steam Rice (half)', 67], ['Lemon Rice', 200],
          ['Masala Rice', 200], ['Curd Rice', 200], ['Dal Rice', 143],
          ['Dal Khichadi', 219], ['Palak Khichadi', 219], ['Dal Khichadi Tadka', 238],
          ['Papad Fry (big)', 19], ['Papad Roasted (big)', 19], ['Masala Papad', 43],
          ['Green Salad', 86], ['Veg. Raita', 76], ['Boondi Raita', 105],
          ['Pineapple Raita (sweet)', 115], ['Curd', 57]
        ]
      }
    ]
  },
  {
    id: 'chinese',
    name: 'Chinese',
    tagline: 'Wok-tossed soups, crispy manchurians, chilli paneer, fried rice & schezwan noodles.',
    image: '7.png',
    sections: [
      {
        title: 'Chinese Soups & Starters',
        items: [
          ['Clear Soup', 143], ['Manchow Soup', 162], ['Tomato Soup (sweet)', 162],
          ['Hot & Sour Soup (sweet)', 162], ['Mushroom Soup', 162], ['Noodles Soup', 162],
          ['Palak Soup', 162], ['Extra Schezwan Sauce', 48], ['Extra Fried Noodles', 48],
          ['Veg. Lollipop', 229], ['Veg. 65', 229], ['Veg. Baby Corn Chilly', 229],
          ['Veg. Hongkong', 229], ['Veg. Manchurian Dry', 229], ['Veg. Chilly', 229],
          ['Veg. Crispy', 229], ['Veg. Finger Schezwan', 248], ['Manchurian Chilly', 229],
          ['Gobi Manchurian', 229], ['Paneer Chilly', 238], ['Paneer Crispy', 257],
          ['Paneer Schezwan', 238], ['Paneer Manchurian', 238], ['Paneer Satay', 238],
          ['Mushroom Chilly', 238], ['Mushroom Manchurian', 238], ['Chinese Bhel', 200]
        ]
      },
      {
        title: 'Chinese Fried Rice & Noodles',
        items: [
          ['Veg. Fried Rice', 219], ['Veg. Singapore F/R', 229], ['Veg. Schezwan F/R', 229],
          ['Veg. Combination F/R', 248], ['Schezwan Triple F/R', 286], ['Mix Veg. Fried Rice', 238],
          ['Mix Veg. Schz. F/R', 248], ['Mushroom Fried Rice', 238], ['Mushroom Schz. F/R', 248],
          ['Paneer Fried Rice', 238], ['Paneer Schz. F/R', 248], ['Manchurian Fried Rice', 286],
          ['Veg. Hongkong F/R', 229], ['Veg. Ginger Fried Rice', 229],
          ['Hakka Noodles', 219], ['Veg. Schezwan Noodles', 229], ['Veg. Singapore Noodles', 229],
          ['Veg. Chilly Noodles', 286], ['Paneer Noodles', 238], ['Mushroom Noodles', 238],
          ['Triple Schz. Noodles', 286], ['Paneer Schz. Noodles', 248], ['Manchurian Noodles', 286],
          ['Hongkong Noodles', 229], ['Veg. Chopsuey', 238], ['Veg. Chowmein', 238]
        ]
      }
    ]
  },
  {
    id: 'drinks-desserts',
    name: 'Drinks & Desserts',
    tagline: 'Royal faloodas, thick fruit milkshakes, fresh juices, creamy lassi & hot beverages.',
    image: '8.png',
    sections: [
      {
        title: 'Milkshakes, Fruit Salad & Falooda',
        items: [
          ['Chikoo Milkshake', 133], ['Mango Milkshake', 133], ['Sitafal Milkshake', 133],
          ['Strawberry Milkshake', 133], ['Apple Milkshake', 143], ['Rose Milkshake', 143],
          ['Kesar Milkshake', 143], ['Cold Coffee', 114], ['Chocolate Milkshake', 133],
          ['Vanilla Milkshake', 124], ['Dry Fruit Milkshake', 229],
          ['Fruit Salad', 124], ['Fruit Salad with Ice-cream', 143], ['Fruit Salad with Jelly', 152],
          ['Fruit Salad Jelly with I/C', 161], ['Plain Jelly', 76], ['Jelly with Ice-cream', 124],
          ['Royal Falooda', 143], ['Kesar Falooda', 143], ['Rose Falooda', 143],
          ['Special Falooda', 162], ['Kulfi Falooda', 143]
        ]
      },
      {
        title: 'Beverages, Fresh Juices & Lassi',
        items: [
          ['Tea', 38], ['Nescafe', 38], ['Hot Milk with Sugar', 48],
          ['Ginger Lemon', 67], ['Sikander Sarbat', 48],
          ['Mosambi Juice', 124], ['Pineapple Juice', 114], ['Maramari Juice', 114],
          ['Cocktail Juice', 143], ['Grapes Juice', 143], ['Apple Juice', 133],
          ['Water Melon Juice', 105], ['Fresh Lime Juice', 48], ['Fresh Lime Soda', 67],
          ['Mango / Sitafal / Strawberry / Orange / Ganga Jamuna', 'Seasonal'],
          ['Sweet Lassi', 95], ['Salted Lassi', 86], ['Mango Lassi', 100], ['Butter Milk', 48]
        ]
      }
    ]
  }
];

let activeGroupId = MENU_GROUPS[0].id;
let showAllGroups = false;
let searchTerm = '';

const cuisineGridEl = document.getElementById('cuisineGrid');
const boardEl = document.getElementById('menuBoard');
const searchEl = document.getElementById('menuSearch');
const clearBtn = document.getElementById('clearSearch');
const countEl = document.getElementById('menuCount');
const toggleAllBtn = document.getElementById('toggleAllBtn');

function countGroupItems(group) {
  return group.sections.reduce((sum, s) => sum + s.items.length, 0);
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function formatDishName(rawName, query) {
  let clean = rawName;
  const tags = [];

  if (/\(sweet\)/i.test(clean)) {
    clean = clean.replace(/\s*\(sweet\)/i, '');
    tags.push('<span class="dish-tag tag-sweet">Sweet</span>');
  }
  if (/\(spicy\)/i.test(clean)) {
    clean = clean.replace(/\s*\(spicy\)/i, '');
    tags.push('<span class="dish-tag tag-spicy">Spicy</span>');
  }
  if (/\(fasting\)/i.test(clean)) {
    clean = clean.replace(/\s*\(fasting\)/i, '');
    tags.push('<span class="dish-tag tag-fasting">Fasting</span>');
  }
  if (/\(white gravy\)/i.test(clean)) {
    clean = clean.replace(/\s*\(white gravy\)/i, '');
    tags.push('<span class="dish-tag tag-white">White Gravy</span>');
  }
  if (/^1 KG /i.test(clean)) {
    tags.push('<span class="dish-tag tag-party">Party Pack</span>');
  }

  if (query) {
    const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
    clean = clean.replace(regex, '<mark class="search-mark">$1</mark>');
  }

  return `${clean} ${tags.join('')}`;
}

function formatPrice(val) {
  return typeof val === 'number' ? `₹${val}` : val;
}

function renderCuisineGrid() {
  if (!cuisineGridEl) return;
  const isSearching = searchTerm.trim().length > 0;

  cuisineGridEl.innerHTML = MENU_GROUPS.map(group => {
    const isActive = !showAllGroups && !isSearching && group.id === activeGroupId;
    const total = countGroupItems(group);
    return `
      <button type="button"
              class="cuisine-tile ${isActive ? 'active' : ''}"
              data-group-id="${group.id}"
              role="tab"
              aria-selected="${isActive}">
        <img class="cuisine-thumb" src="${group.image}" alt="${group.name}" loading="lazy">
        <span class="cuisine-meta">
          <strong>${group.name}</strong>
          <span>${total} dishes</span>
        </span>
      </button>
    `;
  }).join('');

  cuisineGridEl.querySelectorAll('.cuisine-tile').forEach(tile => {
    tile.addEventListener('click', () => {
      activeGroupId = tile.dataset.groupId;
      showAllGroups = false;
      searchTerm = '';
      if (searchEl) searchEl.value = '';
      if (clearBtn) clearBtn.hidden = true;
      updateToggleBtn();
      renderCuisineGrid();
      renderMenuBook();
    });
  });
}

function updateToggleBtn() {
  if (!toggleAllBtn) return;
  toggleAllBtn.classList.toggle('active', showAllGroups);
  toggleAllBtn.setAttribute('aria-pressed', String(showAllGroups));
  toggleAllBtn.textContent = showAllGroups ? 'Single Cuisine View' : 'View Full Menu';
}

function renderMenuBook() {
  if (!boardEl) return;
  const q = searchTerm.trim().toLowerCase();
  const isSearching = q.length > 0;

  const groupsToRender = isSearching || showAllGroups
    ? MENU_GROUPS
    : MENU_GROUPS.filter(g => g.id === activeGroupId);

  let visibleDishes = 0;

  const sheetsHtml = groupsToRender.map(group => {
    const matchingSections = group.sections.map((sec, idx) => {
      const items = sec.items.filter(([name]) =>
        !isSearching ||
        name.toLowerCase().includes(q) ||
        sec.title.toLowerCase().includes(q) ||
        group.name.toLowerCase().includes(q)
      );
      return { ...sec, items, anchorId: `${group.id}-sec-${idx}` };
    }).filter(sec => sec.items.length > 0);

    if (!matchingSections.length) return '';

    const groupTotal = matchingSections.reduce((sum, s) => sum + s.items.length, 0);
    visibleDishes += groupTotal;

    const jumpBar = matchingSections.length > 1
      ? `<div class="subcat-jump">
          ${matchingSections.map(s => `<a class="subcat-pill" href="#${s.anchorId}">${s.title} (${s.items.length})</a>`).join('')}
        </div>`
      : '';

    return `
      <article class="menu-sheet">
        <div class="sheet-banner" style="background-image: url('${group.image}')">
          <div class="sheet-banner-content">
            <span class="sheet-kicker">${groupTotal} PURE VEG DISHES</span>
            <h3>${group.name}</h3>
            <p>${group.tagline}</p>
          </div>
        </div>
        ${jumpBar}
        <div class="sheet-body">
          ${matchingSections.map(sec => `
            <div class="menu-subsection" id="${sec.anchorId}">
              <div class="menu-subsection-head">
                <h4>${sec.title}</h4>
                <span>${sec.items.length} items</span>
              </div>
              ${sec.note ? `<p class="menu-cat-note">${sec.note}</p>` : ''}
              <ul class="dish-grid">
                ${sec.items.map(([name, price]) => `
                  <li class="dish-row">
                    <span class="dish-main">
                      <span class="veg-dot" aria-hidden="true"></span>
                      <span>${formatDishName(name, q)}</span>
                    </span>
                    <span class="dish-leader" aria-hidden="true"></span>
                    <span class="dish-price">${formatPrice(price)}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </article>
    `;
  }).filter(Boolean);

  boardEl.innerHTML = sheetsHtml.length
    ? sheetsHtml.join('')
    : `<div class="menu-empty">No dishes matched "<strong>${searchTerm}</strong>". Try another keyword like <em>Paneer</em>, <em>Dosa</em>, or <em>Biryani</em>.</div>`;

  if (countEl) {
    countEl.textContent = isSearching
      ? `${visibleDishes} found`
      : showAllGroups
        ? `${visibleDishes} total dishes`
        : `${visibleDishes} dishes`;
  }
}

if (searchEl) {
  searchEl.addEventListener('input', e => {
    searchTerm = e.target.value;
    if (clearBtn) clearBtn.hidden = searchTerm.trim().length === 0;
    renderCuisineGrid();
    renderMenuBook();
  });
}

if (clearBtn) {
  clearBtn.addEventListener('click', () => {
    searchTerm = '';
    if (searchEl) {
      searchEl.value = '';
      searchEl.focus();
    }
    clearBtn.hidden = true;
    renderCuisineGrid();
    renderMenuBook();
  });
}

if (toggleAllBtn) {
  toggleAllBtn.addEventListener('click', () => {
    showAllGroups = !showAllGroups;
    searchTerm = '';
    if (searchEl) searchEl.value = '';
    if (clearBtn) clearBtn.hidden = true;
    updateToggleBtn();
    renderCuisineGrid();
    renderMenuBook();
  });
}

updateToggleBtn();
renderCuisineGrid();
renderMenuBook();

// Footer Year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
