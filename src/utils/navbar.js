import Generic from '../components/Generic/Component';
import Home from '../components/Home';
import flower1 from '../assets/imgs/m1.png'
import flower2 from '../assets/imgs/m2.png'
import flower3 from '../assets/imgs/m3.png'
import flower4 from '../assets/imgs/m4.png'
import flower5 from '../assets/imgs/m5.png'
import flower6 from '../assets/imgs/m6.png'
import flower7 from '../assets/imgs/m7.png'
import flower8 from '../assets/imgs/m8.png'
import flower9 from '../assets/imgs/m9.png'

export const navbar = [
  { id: 1, title: 'Home', path: '/home', Element: Home, hidden: false },
  { id: 2, title: 'Shop', path: '/shop', Element: Generic, hidden: false },
  { id: 3, title: 'Plant Care', path: '/plantcare', Element: Generic, hidden: false,},
  { id: 4, title: 'Blogs', path: '/blogs', Element: Generic, hidden: false },
];

// ------------------------- Array for Main -------------------

export const flowers=[
  { id: 1, title:'Barberton Daisy', path:'/shop', src:flower1, price:'$119.00',size:'small', Category:'House Plants',},
  { id: 2, title:'Angel Wing Begonia', path:'/shop', src:flower2, price:'$169.00',size:'medium', Category:'Potter Plants',},
  { id: 3, title:'African Violet', path:'/shop', src:flower3, price:'$199.00',size:'large', discount:'$229.00', Category:'Seeds',},
  { id: 4, title:'Beach Spider Lily', path:'/shop', src:flower4, price:'$129.00',size:'small', Category:'Small Plants',},
  { id: 5, title:'Blushing Bromeliad', path:'/shop', src:flower5, price:'$139.00',size:'medium', Category:'Big Plants',},
  { id: 6, title:'Aluminum Plant', path:'/shop', src:flower6, price:'$139.00',size:'large', Category:'Succulents',},
  { id: 7, title:"Bird's Nest Fern", path:'/shop', src:flower7, price:'$99.00',size:'small', Category:'Trettariums',},
  { id: 8, title:'Broadleaf Lady Palm', path:'/shop', src:flower8, price:'$59.00',size:'medium', Category:'Gardenings',},
  { id: 9, title:'Chinese Evergreen', path:'/shop', src:flower9, price:'$39.00',size:'small', Category:'Accessories',},

  // ---------------------------- duplicated for pagination ------------------------------------

  { id: 1, title:'Barberton Daisy', path:'/shop', src:flower1, price:'$119.00',size:'small', Category:'House Plants',},
  { id: 4, title:'Beach Spider Lily', path:'/shop', src:flower4, price:'$129.00',size:'small', Category:'Small Plants',},
  { id: 8, title:'Broadleaf Lady Palm', path:'/shop', src:flower8, price:'$59.00',size:'medium', Category:'Gardenings',},
  { id: 5, title:'Blushing Bromeliad', path:'/shop', src:flower5, price:'$139.00',size:'medium', Category:'Big Plants',},
  { id: 3, title:'African Violet', path:'/shop', src:flower3, price:'$199.00',size:'large', discount:'$229.00', Category:'Seeds',},
  { id: 6, title:'Aluminum Plant', path:'/shop', src:flower6, price:'$139.00',size:'large', Category:'Succulents',},
  { id: 2, title:'Angel Wing Begonia', path:'/shop', src:flower2, price:'$169.00',size:'medium', Category:'Potter Plants',},
  { id: 7, title:"Bird's Nest Fern", path:'/shop', src:flower7, price:'$99.00',size:'small', Category:'Trettariums',},
  { id: 9, title:'Chinese Evergreen', path:'/shop', src:flower9, price:'$39.00',size:'small', Category:'Accessories',},
  
  { id: 1, title:'Barberton Daisy', path:'/shop', src:flower1, price:'$119.00',size:'small', Category:'House Plants',},
  { id: 8, title:'Broadleaf Lady Palm', path:'/shop', src:flower8, price:'$59.00',size:'medium', Category:'Gardenings',},
  { id: 2, title:'Angel Wing Begonia', path:'/shop', src:flower2, price:'$169.00',size:'medium', Category:'Potter Plants',},
  { id: 4, title:'Beach Spider Lily', path:'/shop', src:flower4, price:'$129.00',size:'small', Category:'Small Plants',},
  { id: 5, title:'Blushing Bromeliad', path:'/shop', src:flower5, price:'$139.00',size:'medium', Category:'Big Plants',},
  { id: 6, title:'Aluminum Plant', path:'/shop', src:flower6, price:'$139.00',size:'large', Category:'Succulents',},
  { id: 7, title:"Bird's Nest Fern", path:'/shop', src:flower7, price:'$99.00',size:'small', Category:'Trettariums',},
  { id: 3, title:'African Violet', path:'/shop', src:flower3, price:'$199.00',size:'large', discount:'$229.00', Category:'Seeds',},
  { id: 9, title:'Chinese Evergreen', path:'/shop', src:flower9, price:'$39.00',size:'small', Category:'Accessories',}
]