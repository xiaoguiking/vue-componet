var phoneDatacopy = [
  {
    shopId: 1,
    shopName: "京东自营",
    cartlist: [
      {
        id: 1,
        shopId: 1,
        shopName: "京东自营",
        img:
          "https://img30.360buyimg.com/popWareDetail/jfs/t3208/194/7616404169/244198/369625db/58b7d093N03520fb7.jpg",
        productId: 1,
        productName: "三只松鼠_零食大礼包",
        color: "黑色",
        size: "18L",
        price: 20,
        totalMount: 1,
        slogan:
          "Redmi Note 9 5G 天玑800U  18W快充 4800万超清三摄 云墨灰 6GB+128GB 游戏智能"
      },
      {
        id: 2,
        shopId: 1,
        shopName: "京东自营",
        img:
          "https://img14.360buyimg.com/n0/jfs/t2971/15/167732091/93002/204c1016/574d9d9aNe4e6fa7a.jpg",
        productId: 2,
        productName: "小米心跳手环",
        color: "白色",
        size: "20XXL",
        price: 148,
        totalMount: 1,
        slogan:
          "Redmi Note 9 5G 天玑800U  18W快充 4800万超清三摄 云墨灰 6GB+128GB 游戏智能"
      }
    ]
  },
  {
    shopId: 2,
    shopName: "海澜之家",
    cartlist: [
      {
        id: 1,
        shopId: 2,
        shopName: "海澜之家",
        img:
          "https://img30.360buyimg.com/popWaterMark/jfs/t4075/83/1343091204/132469/9034cb9c/5873496bN68020ba8.jpg",
        productId: 1,
        productName: "短袖T恤男 2017夏季新品",
        color: "蓝色",
        size: "30X",
        price: 181,
        totalMount: 1,
        slogan:
          "Redmi Note 9 5G 天玑800U  18W快充 4800万超清三摄 云墨灰 6GB+128GB 游戏智能"
      }
    ]
  },
  {
    shopId: 3,
    shopName: "OPPO官方旗舰店",
    cartlist: [
      {
        id: 1,
        shopId: 3,
        shopName: "OPPO官方旗舰店",
        img:
          "https://img10.360buyimg.com/cms/jfs/t6064/272/2163314583/157700/442d6477/593c1c49N7c63a7d9.jpg",
        productId: 1,
        productName: "OPPO R11 全网通",
        color: "蓝色",
        size: "30X",
        price: 1999,
        totalMount: 1,
        slogan:
          "Redmi Note 9 5G 天玑800U  18W快充 4800万超清三摄 云墨灰 6GB+128GB 游戏智能"
      },
      {
        id: 2,
        shopId: 3,
        shopName: "OPPO官方旗舰店",
        img:
          "https://img14.360buyimg.com/n0/jfs/t3142/194/4953241722/254855/1651c2b1/585b9021Nf653e48a.jpg",
        productId: 1,
        productName: "OPPO R9 全网通",
        color: "蓝色",
        size: "30X",
        price: 999,
        totalMount: 1,
        slogan:
          "Redmi Note 9 5G 天玑800U  18W快充 4800万超清三摄 云墨灰 6GB+128GB 游戏智能"
      }
    ]
  }
];

// console.log(JSON.stringify(phoneData, null, 4));
console.log(phoneDatacopy);
var phoneData = [
  {
    id: 1,
    shopId: 1,
    shopName: "京东自营",
    img:
      "https://img30.360buyimg.com/popWareDetail/jfs/t3208/194/7616404169/244198/369625db/58b7d093N03520fb7.jpg",
    productId: 1,
    productName: "三只松鼠_零食大礼包",
    color: "黑色",
    size: "18L",
    price: 20,
    totalMount: 1,
    slogan:
      "Redmi Note 9 5G 天玑800U  18W快充 4800万超清三摄 云墨灰 6GB+128GB 游戏智能"
  },
  {
    id: 2,
    shopName: "京东自营",
    img:
      "https://img14.360buyimg.com/n0/jfs/t2971/15/167732091/93002/204c1016/574d9d9aNe4e6fa7a.jpg",
    productId: 2,
    productName: "小米心跳手环",
    color: "白色",
    size: "20XXL",
    price: 148,
    totalMount: 1,
    slogan:
      "Redmi Note 9 5G 天玑800U  18W快充 4800万超清三摄 云墨灰 6GB+128GB 游戏智能"
  },
  {
    id: 3,
    shopId: 3,
    shopName: "海澜之家",
    img:
      "https://img30.360buyimg.com/popWaterMark/jfs/t4075/83/1343091204/132469/9034cb9c/5873496bN68020ba8.jpg",
    productId: 1,
    productName: "短袖T恤男 2017夏季新品",
    color: "蓝色",
    size: "30X",
    price: 181,
    totalMount: 1,
    slogan:
      "Redmi Note 9 5G 天玑800U  18W快充 4800万超清三摄 云墨灰 6GB+128GB 游戏智能"
  },
  {
    id: 4,
    shopId: 4,
    shopName: "OPPO官方旗舰店",
    img:
      "https://img10.360buyimg.com/cms/jfs/t6064/272/2163314583/157700/442d6477/593c1c49N7c63a7d9.jpg",
    productId: 1,
    productName: "OPPO R11 全网通",
    color: "蓝色",
    size: "30X",
    price: 1999,
    totalMount: 1,
    slogan:
      "Redmi Note 9 5G 天玑800U  18W快充 4800万超清三摄 云墨灰 6GB+128GB 游戏智能"
  },
  {
    id: 5,
    shopId: 5,
    shopName: "OPPO官方旗舰店",
    img:
      "https://img14.360buyimg.com/n0/jfs/t3142/194/4953241722/254855/1651c2b1/585b9021Nf653e48a.jpg",
    productId: 1,
    productName: "OPPO R9 全网通",
    color: "蓝色",
    size: "30X",
    price: 999,
    totalMount: 1,
    slogan:
      "Redmi Note 9 5G 天玑800U  18W快充 4800万超清三摄 云墨灰 6GB+128GB 游戏智能"
  },
  {
    id: 6,
    shopId: 6,
    shopName: "京东自营",
    img:
      "https://img30.360buyimg.com/popWareDetail/jfs/t3208/194/7616404169/244198/369625db/58b7d093N03520fb7.jpg",
    productId: 1,
    productName: "三只松鼠_零食大礼包",
    color: "黑色",
    size: "18L",
    price: 20,
    totalMount: 1,
    slogan:
      "Redmi Note 9 5G 天玑800U  18W快充 4800万超清三摄 云墨灰 6GB+128GB 游戏智能"
  },
  {
    id: 7,
    shopName: "京东自营",
    img:
      "https://img14.360buyimg.com/n0/jfs/t2971/15/167732091/93002/204c1016/574d9d9aNe4e6fa7a.jpg",
    productId: 7,
    productName: "小米心跳手环",
    color: "白色",
    size: "20XXL",
    price: 148,
    totalMount: 1,
    slogan:
      "Redmi Note 9 5G 天玑800U  18W快充 4800万超清三摄 云墨灰 6GB+128GB 游戏智能"
  },
  {
    id: 8,
    shopId: 8,
    shopName: "海澜之家",
    img:
      "https://img30.360buyimg.com/popWaterMark/jfs/t4075/83/1343091204/132469/9034cb9c/5873496bN68020ba8.jpg",
    productId: 1,
    productName: "短袖T恤男 2017夏季新品",
    color: "蓝色",
    size: "30X",
    price: 181,
    totalMount: 1,
    slogan:
      "Redmi Note 9 5G 天玑800U  18W快充 4800万超清三摄 云墨灰 6GB+128GB 游戏智能"
  },
  {
    id: 9,
    shopId: 9,
    shopName: "OPPO官方旗舰店",
    img:
      "https://img10.360buyimg.com/cms/jfs/t6064/272/2163314583/157700/442d6477/593c1c49N7c63a7d9.jpg",
    productId: 1,
    productName: "OPPO R11 全网通",
    color: "蓝色",
    size: "30X",
    price: 1999,
    totalMount: 1,
    slogan:
      "Redmi Note 9 5G 天玑800U  18W快充 4800万超清三摄 云墨灰 6GB+128GB 游戏智能"
  },
  {
    id: 10,
    shopId: 10,
    shopName: "OPPO官方旗舰店",
    img:
      "https://img14.360buyimg.com/n0/jfs/t3142/194/4953241722/254855/1651c2b1/585b9021Nf653e48a.jpg",
    productId: 1,
    productName: "OPPO R9 全网通",
    color: "蓝色",
    size: "30X",
    price: 999,
    totalMount: 1,
    slogan:
      "Redmi Note 9 5G 天玑800U  18W快充 4800万超清三摄 云墨灰 6GB+128GB 游戏智能"
  }
];

//  写入浏览器localStorage.setItem("phoneData", JSON.stringify(phoneData));

// 清除localStorage.removeItem("phoneData");
console.log(phoneData);
