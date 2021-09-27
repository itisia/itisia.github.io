let classes={
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
	showSingleLec(year,month,day){
		let d=this.listDays(year,month);
		if(d.indexOf(`${day}`)!=-1){

		}else{
			return false;
		}
	},
	showAllSubs(){

	},
	showAllChaps(){

	},
	showLecs(){

	},
	createNewDay(){
		
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
				this._data[`${year}`][`${month}`]={};
				return true;
			}
		}else{
			/* if the year not exist */
			console.log(`Year ${year} Not Exist`);
			return false;
		}
	},
};