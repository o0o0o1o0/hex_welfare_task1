const data = [
  {
    img: 'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/p-1.png',
    name: '焦糖馬卡龍',
    price: 450,
    fav: false,
    hot: true
  },
  {
    img: 'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/p-2.png',
    name: '焦糖馬卡龍',
    price: 450,
    fav: false,
    hot: true
  },
  {
    img: 'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/p-3.png',
    name: '焦糖馬卡龍',
    price: 450,
    fav: false,
    hot: true
  },
  {
    img: 'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/p-4.png',
    name: '焦糖馬卡龍',
    price: 450,
    fav: false,
    hot: true
  },
  {
    img: 'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/p-5.png',
    name: '焦糖馬卡龍',
    price: 450,
    fav: false,
    hot: true
  },
  {
    img: 'https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/p-6.png',
    name: '焦糖馬卡龍',
    price: 450,
    fav: false,
    hot: true
  },
];

const cards = document.getElementById('cards');
cards.innerHTML = data.map(item => `
<div class="col-6 p-1">
  <div class="card relative f-c-c-st">
    <div class="cover fz-0"><img src=${item.img} alt="product" class="img"></div>
    <div class="content f-r-c-st">
      <span class="sec-btn bd-secondary flex-1 f-r-c-c">${item.name}</span>
      <span class="sec-btn bd-secondary flex-1 f-r-c-c">NT$ ${item.price}</span>
    </div>
    <button class="btn main-btn bg-secondary">加入購物車</button>
    ${item.hot?`<div class="hot absolute text-column bg-primary p-1 ms-2">本日精選</div>`:``}
    <div class="fav absolute p-2 btn"> <img src="https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/student-week1/favorite_border.png" alt="fav" class="img"></div>
  </div>
</div>
`).join('');