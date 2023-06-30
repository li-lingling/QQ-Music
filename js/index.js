(function () {
  //  1. 请求数据
  let xhr = new XMLHttpRequest;
  xhr.open("get", "index.json", false);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      data = JSON.parse(xhr.response)
    };
  };
  xhr.send();

  // 2. 渲染数据
  function read(data) {
    let SwiperOne = document.querySelector('.mySwiperOne .swiper-wrapper');
    let SwiperTwo = document.querySelector('.mySwiperTwo .swiper-wrapper');
    let SwiperThree = document.querySelector('.mySwiperThree .swiper-wrapper');
    let SwiperFour = document.querySelector('.mySwiperFour .swiper-wrapper');
    let List = document.querySelector('.ranking-list-tab');

     let swiper1 = data[0].swiper1;
     let str1 = ``;
     swiper1.forEach(item => {
       let { pic, title, p } = item;
       str1 += `
       <div class="swiper-slide">
         <div class="sing-connter-item">
           <a href="" class="imageBox"><img src="" data-src="${pic}" alt=""><em></em></a>
           <a href="">
             <p>${title}</p>
           </a>
           <p>${p}</p>
         </div>
       </div>
       `;
     });
     SwiperOne.innerHTML = str1;

    let swiper2 = data[1].swiper2;
    let str2 = ``;
    swiper2.forEach(item => {
      let { pic, title, author, time } = item;
      str2 += `
      <div class="swiper-slide">
                <div class="debutlist-item">
                  <div class="debutlist-item-box">
                    <img src="" data-src="${pic}" alt="">
                    
                  </div>
                  <div class="debutlist-item-box1">
                    <p>${title}</p>
                    <p>${author}</p>
                  </div>
                  <span class="debutlist-item-time">${time}</span>
                </div>
              </div>
      `
    })
    SwiperTwo.innerHTML = str2;

    let swiper3 = data[2].swiper3;
    let str3 = ``;
    swiper3.forEach(item => {
      let { pic } = item;
      str3 += `
      <div class="swiper-slide">
        <div class="recommend-sing-item">
          <img  src="" data-src="${pic}" alt="">
         
        </div>
      </div>
      `;
    })
    SwiperThree.innerHTML = str3

    let swiper4 = data[3].swiper4;
    let str4 = ``;
    swiper4.forEach(item => {
      let { pic, title, p } = item;
      str4 += `
      <div class="swiper-slide">
      <div class="sing-connter-item">
        <a href=""><img  src="" data-src="${pic}" alt=""></a>
        <a href="">
          <p>${title}</p>
        </a>
        <p>${p}</p>
      </div>
    </div>
      `
    })
    SwiperFour.innerHTML = str4

    let list = data[4].list;
    let str5 = ``;
    list.forEach(item => {
      let { id, title, p, number1, songname1, artist1, number2, songname2, artist2, number3, songname3, artist3 } = item;
      str5 += `
      <ul class="ranking-list-item item${id}">
      <li>
        <p>${title}</p>
        <h2><a href=""></a>${p}</h2>
        <p>———</p>
        <ul class="toplist-songlist">
          <li class="toplist-song">
            <div class="toplist-number">${number1}</div>
            <div class="toplist-songname">${songname1}</div>
            <div class="toplist-artist">${artist1}</div>
          </li>
          <li class="toplist-song">
            <div class="toplist-number">${number2}</div>
            <div class="toplist-songname">${songname2}</div>
            <div class="toplist-artist">${artist2}</div>
          </li>
          <li class="toplist-song">
            <div class="toplist-number">${number3}</div>
            <div class="toplist-songname">${songname3}</div>
            <div class="toplist-artist">${artist3}</div>
          </li>
        </ul>
      </li>
    </ul>
      `
    })
    List.innerHTML = str5
  }
  read(data)
})()

var mySwiper1 = new Swiper('.mySwiperOne', {
  pagination: {
    el: '.swiper-pagination',
  },
  direction: 'horizontal', // 垂直切换选项
  loop: true, // 循环模式选项

  slidesPerView: 5,
  slidesPerGroup: 5,
  spaceBetween: 20,
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // 如果需要滚动条
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

var mySwiper2 = new Swiper('.mySwiperTwo', {
  pagination: {
    el: '.swiper-pagination',
  },
  direction: 'horizontal', // 垂直切换选项
  loop: true, // 循环模式选项
  grid: {
    fill: 'row',
    rows: 3,
  },
  slidesPerView: 3,
  slidesPerGroup: 9,
  spaceBetween: 20,
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // 如果需要滚动条
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

var mySwiper3 = new Swiper('.mySwiperThree', {
  pagination: {
    el: '.swiper-pagination',
  },
  direction: 'horizontal', // 垂直切换选项
  loop: true, // 循环模式选项

  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 20,
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // 如果需要滚动条
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

var mySwiper4 = new Swiper('.mySwiperFour', {
  pagination: {
    el: '.swiper-pagination',
  },
  direction: 'horizontal', // 垂直切换选项
  loop: true, // 循环模式选项
  grid: {
    fill: 'row',
    rows: 2,
  },
  slidesPerView: 5,
  slidesPerGroup: 10,
  spaceBetween: 20,
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // 如果需要滚动条
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})


function tab() {
  let singListTab = document.querySelector('.sing-list-tab'),
    liBox = singListTab.querySelectorAll('li'),
    singConnter = document.querySelectorAll('.sing-connter')
  for (let i = 0; i < liBox.length; i++) {
    liBox[i].addEventListener('click', () => {
      for (var n = 0; n < liBox.length; n++) {
        singConnter[n].classList.remove('current')
        liBox[n].classList.remove('current')
      }
      singConnter[i].classList.add('current')
      
      liBox[i].classList.add('current');
    })
  }
}
tab()

/* 图片懒加载 */
let loadimg = function loadimg() {
  function throttle(fn, delay = 200) {
      let timer = null;
      return function () {
          if (timer) return;
          timer = setTimeout(() => {
              fn.apply(this, arguments);
              timer = null;
          }, delay);
      };
  }
  function lazyLoad() {
      const imgs = document.querySelectorAll('img[data-src]');
      if (!imgs.length) return;
      imgs.forEach(img => {
          const rect = img.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
          }
      })
  }
  window.addEventListener('scroll', throttle(() => {
      lazyLoad();
  }, 500));
  lazyLoad();
}
loadimg()

/* 搜索框 */
//https://www.baidu.com/sugrec?prod=pc&wd=hello&cb=jQuery_1684412625594
      //获取输入框的DOM元素
      const searchInput = document.querySelector("#search-input");
      const suggestList = document.querySelector("#suggest-list");
      //给输入框绑定事件输入事件
      searchInput.addEventListener("input", (event) => {
        //获取输入框的值
        const wd = event.target.value;
        ajax({
          url: `https://www.baidu.com/sugrec`, //指定请求的路径
          dataType: "jsonp", //指定数据类型，或者说请求的方式
          jsonp: "cb", //指定传递请求方法的参数名
          data: {
            prod: "pc", //写死的参数
            wd, //传入关键字
          },
        }).then((response) => {
          let html = response.g.map((item) => `<li>${item.q}</li>`).join("");
          suggestList.innerHTML = html;
        });
      });
      function ajax({ url, jsonp, data }) {
        return new Promise(function (resolve, reject) {
          //创建一个临时的变量
          let callbackName = `jQuery_${Date.now()}`;//jQuery_1684412625594
          //创建一个脚本
          let script = document.createElement('script');
          //给window添加全局变量,值是一个回调函数，等jsonp回调回来之后会执行此函数，会把结果传给result
          window[callbackName] = function (result) {
            delete window[callbackName];
            document.body.removeChild(script);
            resolve(result);
          };
          console.dir(script);
          script.onerror = (error)=>{
            reject(error);
          }
          //拼出查询字符串
          let search = `?`;//?
          for(let key in data){
            search+=`${key}=${data[key]}&`;//prod=pc&wd=hello&
          }
          search+=`${jsonp}=${callbackName}`;//&cb=jQuery_1684412625594
          script.src = `https://www.baidu.com/sugrec${search}`;
          document.body.appendChild(script);
        });
      }



