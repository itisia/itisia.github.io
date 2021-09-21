let data=[
    /** maths */
    [
        /** basic maths */
        ["Basic Maths",[
            true
        ]],
        ["Logarithm",[
        ]],
        ["Comound Angles",[

        ]],
        ["Quadratic",[

        ]],
        ["Sequence And Series",[

        ]],
        ["Trigonometeric Eq",[

        ]],
        ["SOT",[

        ]],
        ["Determinant",[

        ]],
        ["Straight Line",[

        ]],
        ["Circle",[

        ]],
        ["P and C",[

        ]],
        ["Binomial Therom",[

        ]],
        ["Functions",[

        ]],
        ["ITF",[

        ]],
        ["Limit",[

        ]],
        ["Continuity",[

        ]],
        ["Diffrentiability",[

        ]],
        ["Method Of Diffrentiation",[]],
        ["Monotonocity",[]],
        ["Maxima-Minima",[]],
        ["Tangent & Normal",[]],
        ["Indefinite Integration",[]],
        ["Definite Integration",[]],
        ["Diffrential Equation",[]],
        ["Area Under The Curve",[]],
        ["Vector",[]],
        ["3D",[]],
        ["Probablity",[]],
        ["Statistics",[]],
        ["Mathematical Resoning",[]],
        ["Sets",[]],
        ["Relation",[]]
    ],
    /** Physics */
    [
        ["",[]],
        ["",[]],
        ["",[]],
        ["",[]],
    ],
    /** ioc */
    [
        ["",[]],
        ["",[]],
        ["",[]],
        ["",[]],
    ],
    /** oc */
    [
        ["",[]],
        ["",[]],
        ["",[]],
        ["",[]],
    ],
    /** pc */
    [
        ["",[]],
        ["",[]],
        ["",[]],
        ["",[]],
    ]
];

function createElem(data){
    let completed=false;
    let complet="";
    let cDate="";
    if(data[1][0]){
        complet="completed"
    }
    return `<li><span class="chapname">${data[0]}</span><span class="completed">${complet}</span></li>`
};


let sub=["maths","phy","ioc","oc","pc"];

    data.forEach((elem,ind)=>{
        /** the subject array */
        let temp=sub[ind];
        let data="";
        let perComp="";
        let total=elem.length;
        let totalComp=0;
        let perOutOf="";
        elem.forEach((elem2,ind)=>{
            console.log(elem2)
            /** through all the chapters */
            data+=createElem(elem2);
            if(elem2[1][0]){
                totalComp++;
            }
        });
        /** setting Percentage COmplete */
        let a=((totalComp/total)*100).toFixed(2);
        perComp=`${a}%`;
        document.getElementById(`${temp}Per`).innerHTML=perComp;
        document.getElementById(`${temp}Out`).innerHTML=perOutOf;
        document.getElementById(temp).innerHTML=data;
    });