/*
subCode: math,phy,ioc,oc,pc
*/
let c={
	_data:{
	},
	listYears(){
		let a=[];
		for(let d in this._data){
			a.push(d);
		}
		return a;
	},
	listMonths(year){
		let y=this.listYears();
		if(y===false){
			return false;
		}
		if(y.indexOf(`${year}`)!=-1){
			let d=[];
			for(let a in this._data[`${year}`]){
				d.push(a);
			}
			return d;
		}else{
			return false;
		}
	},
	listDays(year,month){
		let m=this.listMonths(year);
		if(m===false){
			return false;
		}
		if(m!=false){
			if(m.length===0){
				return [];
			}else{
				if(month>0){
					let a=[];
				for(let d in this._data[`${year}`][`${month}`]){
					a.push(d)
				}
				return a;
				}
			}
		}else{
			return false;
		}
	},
	showAllChaps(sub){
		let d=[];
		let years=this.listYears();
		years.forEach(y=>{
			let months=this.listMonths(`${y}`);
			months.forEach(m=>{
				let days=this.listDays(y,m);
				days.forEach(d=>{

				});
			});
		});
	},
	showLecs(){

	},
	createNewDay(year,month,day,dataObj){
		if(this.listDays(year,month)===false){
			return false;
		}
		if(this.listDays(year,month).indexOf(`${day}`)!=-1){
			/* if the day exist */
			console.log(`The Day ${day} Already Exist`);
		}else{
			console.log('creating new day');
			let data={};

			this._data[`${year}`][`${month}`][`${day}`]=data;
		}
	},
	createNewYear(year){
		if(this.listYears().indexOf(`${year}`)!=-1){
			return false;
		}else{
			this._data[`${year}`]={};
			return true;
		}
	},
	createNewMonth(year,month){
		if(this.listYears().indexOf(`${year}`)!=-1){
			if(this.listMonths(year).indexOf(`${month}`)!=-1){
				return false;
			}else{
				if(month>0&&month<13){
					this._data[`${year}`][`${month}`]={};
				return true;
			}else{
				return false;
			}
			}
		}else{
			/* if the year not exist */
			console.log(`Year ${year} Not Exist`);
			return false;
		}
	},
};
let d={
	m(chapName,lecNo,...url){
		return {
			chap:chapName,
			lecno:lecNo,
			url:url
		}
	},
	p(chapName,lecNo,url){

	},
	ioc(chapName,lecNo,url){

	},
	oc(chapName,lecNo,url){

	},
	pc(chapName,lecNo,url){

	}
};
