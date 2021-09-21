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
        ["Unit And Dimensions",[]],
        ["Vectors",[]],
        ["Kinematics",[]],
        ["Laws Of Motion",[]],
        ["Friction",[]],
        ["Circular Motion",[]],
        ["Work, Power and Energy",[]],
        ["Collision",[]],
        ["Center Of Mass",[]],
        ["Rotational Motion",[]],
        ["SHM",[]],
        ["Wave Motion and Doppler's Effect",[]],
        ["Properties Of Matters and Fluid Mechanics",[]],
        ["Thermal Physics",[]],
        ["Thermal Conduction",[]],
        ["Kinetic Theory Of Gases",[]],
        ["Thermodynamics",[]],
        ["ElectroStatics",[]],
        ["Gravitation",[]],
        ["Current Electricity",[]],
        ["Capacitance",[]],
        ["Magnatic Effect Of Current and Magnatism",[]],
        ["Electromagnetic Induction",[]],
        ["Alternating Current and EM Waves",[]],
        ["Modern Physics",[]],
        ["Nuclear Physics",[]],
        ["Ray Optics and Optical Instruments",[]],
        ["Wave Nature of Light and Wave Optics",[]],
        ["Errors",[]],
        ["Semiconductors and Digital Electronics",[]],
        ["Sumarry Of Logic Gates",[]],
        ["Communication System",[]]
    ],
    /** ioc */
    [
        ["Quantum Number",[true]],
        ["Periodic Table",[]],
        ["Chemical Bonding",[]],
        ["s-Block elements",[]],
        ["p-Block elements",[]],
        ["Coordinate Compounds",[]],
        ["d-Block (Transition Elements)",[]],
        ["Metallurgy",[]],
        ["Salt Analysis",[]],
        ["Enviroment Pollution",[]],
    ],
    /** oc */
    [
        ["IUPAC (NomenClature)",[]],
        ["GOC",[]],
        ["Isomerism",[]],
        ["Reaction Mechanism",[]],
        ["Practical Organic Chemistry",[]],
        ["Distinction b/w pair of compound",[]],
        ["Hydrocarbons",[]],
        ["Haloalkens & Grignard Reagents",[]],
        ["Alcohol",[]],
        ["Ether",[]],
        ["Phenol",[]],
        ["Carboxylic Acid",[]],
        ["Amines",[]],
        ["Benxene Diazonium Chloride",[]],
        ["Organic Reagents",[]],
        ["Organic Name Reactions",[]],
        ["Ploymers",[]],
        ["Carbohydrates",[]]
    ],
    /** pc */
    [
        ["Mole Concept",[]],
        ["Thermodynamics",[]],
        ["Thermochemistry",[]],
        ["Chemical Equlibrium",[]],
        ["Ionic Equlibrium",[]],
        ["Redox",[]],
        ["Electrochemistry",[]],
        ["Chemical Kinetics",[]],
        ["Radioactivity",[]],
        ["Liquid Solution",[]],
        ["Solid State",[]],
        ["Gaseous State (Ideal Gas)",[]],
        ["Atomic Structure",[]],
        ["Surface Chemistry",[]]
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