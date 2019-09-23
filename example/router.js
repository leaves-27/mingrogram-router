import Router from '../src/index';
import routes from "./routes";

const router = new Router(routes); // 跳转前的自定义拦截器
router.beforeCreate = function(url, next){
	const { items = [], redirect } = this.routes;
	const route = items.find((item)=>{
		const { path = '' } = item;
		const regExp = new RegExp(path);
		return regExp.test(url);
	});
	if (route){
		const currentUserRole = wx.getStorageSync('role');
		const { role = [] } = route;
		const index = role.indexOf(`${currentUserRole}`);
		if (role.length === 0 || index > -1){
			next();
			return;
		}
	}

	wx.redirectTo({
		url: redirect
	});
};

export default router;