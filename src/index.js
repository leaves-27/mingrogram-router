export default class Router {
	constructor(routes){
		this.routes = routes;
	}
	beforeCreate(url, next){
		next();
	}

	afterCreate(next){
		next();
	}

	switchTab({ url, success = ()=>{} }){
		this.beforeCreate(url, ()=>{
			wx.switchTab({
				url,
				success:()=>{
					this.afterCreate(success);
				}
			});
		});
	}

	redirectTo({ url, success = ()=>{} }){
		this.beforeCreate(url, ()=>{
			wx.redirectTo({
				url,
				success:()=>{
					this.afterCreate(success);
				}
			});
		});
	}

	navigateTo({ url, success = ()=>{} }){
		this.beforeCreate(url, ()=>{
			wx.navigateTo({
				url,
				success:()=>{
					this.afterCreate(success);
				}
			});
		});
	}
};
