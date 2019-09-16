import * as API from './index';

export default{
	getReg:params=>{		//注册
		return API.GET('/reg.php',params)
	},
	getLogin:params=>{		//登录
		return API.GET('/login.php',params)
	},
	getProductList:params=>{		//首页展示列表
		return API.GET('/productlist.php',params)
	},
	getAddList:params=>{		//添加购物车商品
		return API.GET('/add-product.php',params)
	},
	getDelList:params=>{		//删除商品
		return API.GET('/cart-delete.php',params)
	},
	getDetail:params=>{			//详情
		return API.GET('/detail.php',params)
	}
}
	