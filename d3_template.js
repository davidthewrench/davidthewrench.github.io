document.addEventListener("wheel",scrollChange, {passive:true});
//document.getElementById("genderSelect").addEventListener("click", genderSelect, {passive:true});

var jobTitleArray = ["Supportive workers", "Professionals", "Managers", "Executives"]; //list of jobs titles that are option
var raceArray = ["White", "Asian", "Hispanic_or_Latino", "Black_or_African_American", "Minorities"]; //list of possible races
var genderArray = ["Male", "Female"];// list of possible genders

var dotCount = []; //a count of every combination of people
var dotArray = [];
//an array of arrays [job type, ethnicity, gender, count]

var  managerPercent = 0;
var  executivePercent = 0;
var  professionalPercent = 0;
var  otherWorkerPercent = 0;
//just sum up everything from Stella’s dataset

var  managerNum = 0;
var  executiveNum = 0;
var  professionalNum = 0;
var  otherNum = 0;
//just sum up everything from Stella’s dataset

var companyTotals = []; //total company population organized by company name
var totalPopulationNum = 0; //sum of the above


/*
dot class attributes
work type
text
race
text
color (pulled from color array)
gender
text
physics
whatever this ends up being? Maybe? Probably?
*/


//Part2
var dataset;
var Adobe = {name:'Adobe',totalPopulation: 0, femalePopulation: 0, malePopulation: 0,
	femaleWhite:0, femaleAsian:0, femaleAfrican:0, femaleHispanic :0, femaleMinority:0,
	maleWhite:0, maleAsian:0, maleAfrican:0, maleHispanic :0, maleMinority:0};
var Airbnb = {name:'Airbnb',totalPopulation: 0, femalePopulation: 0, malePopulation: 0,
    femaleWhite:0, femaleAsian:0, femaleAfrican:0, femaleHispanic :0, femaleMinority:0,
    maleWhite:0, maleAsian:0, maleAfrican:0, maleHispanic :0, maleMinority:0};
var Apple = {name:'Apple',totalPopulation: 0, femalePopulation: 0, malePopulation: 0,
    femaleWhite:0, femaleAsian:0, femaleAfrican:0, femaleHispanic :0, femaleMinority:0,
    maleWhite:0, maleAsian:0, maleAfrican:0, maleHispanic :0, maleMinority:0};
var Cisco = {name:'Cisco',totalPopulation: 0, femalePopulation: 0, malePopulation: 0,
    femaleWhite:0, femaleAsian:0, femaleAfrican:0, femaleHispanic :0, femaleMinority:0,
    maleWhite:0, maleAsian:0, maleAfrican:0, maleHispanic :0, maleMinority:0};
var eBay = {name:'eBay',totalPopulation: 0, femalePopulation: 0, malePopulation: 0,
    femaleWhite:0, femaleAsian:0, femaleAfrican:0, femaleHispanic :0, femaleMinority:0,
    maleWhite:0, maleAsian:0, maleAfrican:0, maleHispanic :0, maleMinority:0};
var Facebook = {name:'Facebook',totalPopulation: 0, femalePopulation: 0, malePopulation: 0,
    femaleWhite:0, femaleAsian:0, femaleAfrican:0, femaleHispanic :0, femaleMinority:0,
    maleWhite:0, maleAsian:0, maleAfrican:0, maleHispanic :0, maleMinority:0};
var Google = {name:'Google',totalPopulation: 0, femalePopulation: 0, malePopulation: 0,
    femaleWhite:0, femaleAsian:0, femaleAfrican:0, femaleHispanic :0, femaleMinority:0,
    maleWhite:0, maleAsian:0, maleAfrican:0, maleHispanic :0, maleMinority:0};
var HP = {name:'HP Inc.',totalPopulation: 0, femalePopulation: 0, malePopulation: 0,
    femaleWhite:0, femaleAsian:0, femaleAfrican:0, femaleHispanic :0, femaleMinority:0,
    maleWhite:0, maleAsian:0, maleAfrican:0, maleHispanic :0, maleMinority:0};
var HPE = {name:'HPE', totalPopulation: 0, femalePopulation: 0, malePopulation: 0,
    femaleWhite:0, femaleAsian:0, femaleAfrican:0, femaleHispanic :0, femaleMinority:0,
    maleWhite:0, maleAsian:0, maleAfrican:0, maleHispanic :0, maleMinority:0};
var Intel = {name:'Intel',totalPopulation: 0, femalePopulation: 0, malePopulation: 0,
    femaleWhite:0, femaleAsian:0, femaleAfrican:0, femaleHispanic :0, femaleMinority:0,
    maleWhite:0, maleAsian:0, maleAfrican:0, maleHispanic :0, maleMinority:0};
var Intuit = {name:'Intuit',totalPopulation: 0, femalePopulation: 0, malePopulation: 0,
    femaleWhite:0, femaleAsian:0, femaleAfrican:0, femaleHispanic :0, femaleMinority:0,
    maleWhite:0, maleAsian:0, maleAfrican:0, maleHispanic :0, maleMinority:0};
var Linkedin = {name:'Linkedin',totalPopulation: 0, femalePopulation: 0, malePopulation: 0,
    femaleWhite:0, femaleAsian:0, femaleAfrican:0, femaleHispanic :0, femaleMinority:0,
    maleWhite:0, maleAsian:0, maleAfrican:0, maleHispanic :0, maleMinority:0};
var Lyft = {name:'Lyft',totalPopulation: 0, femalePopulation: 0, malePopulation: 0,
    femaleWhite:0, femaleAsian:0, femaleAfrican:0, femaleHispanic :0, femaleMinority:0,
    maleWhite:0, maleAsian:0, maleAfrican:0, maleHispanic :0, maleMinority:0};
var MobileIron = {name:'MobileIron',totalPopulation: 0, femalePopulation: 0, malePopulation: 0,
    femaleWhite:0, femaleAsian:0, femaleAfrican:0, femaleHispanic :0, femaleMinority:0,
    maleWhite:0, maleAsian:0, maleAfrican:0, maleHispanic :0, maleMinority:0};
var NetApp = {name:'NetApp',totalPopulation: 0, femalePopulation: 0, malePopulation: 0,
    femaleWhite:0, femaleAsian:0, femaleAfrican:0, femaleHispanic :0, femaleMinority:0,
    maleWhite:0, maleAsian:0, maleAfrican:0, maleHispanic :0, maleMinority:0};
var Nvidia = {name:'Nvidia',totalPopulation: 0, femalePopulation: 0, malePopulation: 0,
    femaleWhite:0, femaleAsian:0, femaleAfrican:0, femaleHispanic :0, femaleMinority:0,
    maleWhite:0, maleAsian:0, maleAfrican:0, maleHispanic :0, maleMinority:0};
var PayPal = {name:'PayPal',totalPopulation: 0, femalePopulation: 0, malePopulation: 0,
    femaleWhite:0, femaleAsian:0, femaleAfrican:0, femaleHispanic :0, femaleMinority:0,
    maleWhite:0, maleAsian:0, maleAfrican:0, maleHispanic :0, maleMinority:0};
var Pinterest = {name:'Pinterest',totalPopulation: 0, femalePopulation: 0, malePopulation: 0,
    femaleWhite:0, femaleAsian:0, femaleAfrican:0, femaleHispanic :0, femaleMinority:0,
    maleWhite:0, maleAsian:0, maleAfrican:0, maleHispanic :0, maleMinority:0};
var Salesforce = {name:'Salesforce',totalPopulation: 0, femalePopulation: 0, malePopulation: 0,
    femaleWhite:0, femaleAsian:0, femaleAfrican:0, femaleHispanic :0, femaleMinority:0,
    maleWhite:0, maleAsian:0, maleAfrican:0, maleHispanic :0, maleMinority:0};
var Sanmina = {name:'Sanmina',totalPopulation: 0, femalePopulation: 0, malePopulation: 0,
    femaleWhite:0, femaleAsian:0, femaleAfrican:0, femaleHispanic :0, femaleMinority:0,
    maleWhite:0, maleAsian:0, maleAfrican:0, maleHispanic :0, maleMinority:0};
var Square = {name:'Square',totalPopulation: 0, femalePopulation: 0, malePopulation: 0,
    femaleWhite:0, femaleAsian:0, femaleAfrican:0, femaleHispanic :0, femaleMinority:0,
    maleWhite:0, maleAsian:0, maleAfrican:0, maleHispanic :0, maleMinority:0};
var Twitter = {name:'Twitter',totalPopulation: 0, femalePopulation: 0, malePopulation: 0,
    femaleWhite:0, femaleAsian:0, femaleAfrican:0, femaleHispanic :0, femaleMinority:0,
    maleWhite:0, maleAsian:0, maleAfrican:0, maleHispanic :0, maleMinority:0};
var Uber = {name:'Uber',totalPopulation: 0, femalePopulation: 0, malePopulation: 0,
    femaleWhite:0, femaleAsian:0, femaleAfrican:0, femaleHispanic :0, femaleMinority:0,
    maleWhite:0, maleAsian:0, maleAfrican:0, maleHispanic :0, maleMinority:0};
var View = {name:'View',totalPopulation: 0, femalePopulation: 0, malePopulation: 0,
    femaleWhite:0, femaleAsian:0, femaleAfrican:0, femaleHispanic :0, femaleMinority:0,
    maleWhite:0, maleAsian:0, maleAfrican:0, maleHispanic :0, maleMinority:0};
var companyObjectList= [];
var companySortFemale = [];
var companySortFemaleWhite = [];
var companySortFemaleAsian = [];
var companySortFemaleAfrican = [];
var companySortFemaleHispanic = [];
var companySortFemaleMinority = [];
var companySortMaleWhite = [];
var companySortMaleAsian = [];
var companySortMaleAfrican = [];
var companySortMaleHispanic = [];
var companySortMaleMinority = [];


var colorForRace;
var colorForGender;

var malePercentage;
var femalePercentage;
var companyName_totalNumOfEmployee;

var whiteMangerExecutivePercentage;
var asianMangerExecutivePercentage;
var africanMangerExecutivePercentage;
var hispanicMangerExecutivePercentage;
var minorityMangerExecutivePercentage;

var whiteProfessionalPercentage;
var asianProfessionalPercentage;
var africanProfessionalPercentage;
var hispanicProfessionalPercentage;
var minorityProfessionalPercentage;

var whiteOtherPercentage;
var asianOtherPercentage;
var africanOtherPercentage;
var hispanicOtherPercentage;
var minorityOtherPercentage;


//state controlling vars
var lastState = -1;
var thisState = 0;
var loaded = 0;
var drawn = -1;





//drawing boxes stuff
var boxLength = 70;
var spacing = 20;
var boxOutline = 1;
var boxTextOffset = boxLength + 14;

//drawing dots stuff
var dotCols = 45;
var dotRadius;
var defaultColor = d3.rgb(255,255,255);
var defDotStroke = d3.rgb(75,194,195);

var ethnicityColor = {"Hispanic_or_Latino": d3.rgb(255,82,21), "White": d3.rgb(252,200,112), "Black_or_African_American":d3.rgb(147,14,25), "Asian": d3.rgb(249,148,70), "Minorities": d3.rgb(78,46,55)};


//colors stuff
var boxOutlineColor = d3.rgb(0,0,0);
var boxFillColor1 = d3.rgb(0,0,0);
var boxFillColor2 = d3.rgb(30,76, 97);
var boxFillColor3 = d3.rgb(0,0,0);

var strokeColorDark = d3.rgb(0,0,0);
var strokeColorLight = d3.rgb(255,255,255);




//creating the different SVGs vars that are used in the top half
var dots = d3.select('svg#theDOTS');
var boxes = d3.select('svg#svgCanvas');

//svg dimension stuff
var tempBox = document.getElementById('theDOTS').getBoundingClientRect();
var dotsHeight = tempBox.height - 70;
var dotsWidth = tempBox.width;
//var dotsHeight = Math.trunc(+document.getElementById('theDOTS').clientHeight) -70;
//var dotsWidth = Math.trunc(+document.getElementById('theDOTS').clientWidth);
var boxesHeight = Math.trunc(+document.getElementById('svgCanvas').clientHeight);
var boxesWidth = Math.trunc(+document.getElementById('svgCanvas').clientWidth);

dotRadius = Math.trunc(dotsHeight/70);

//var allScaled = d3.select('svg#allScaled');
//var scaledCombined = d3.select('svg#scaledCombined');

//the datum values that will hold all the d3 pulled data
var companyDetailed;
//cols -> company	year	race	gender	job_category	count
var companyList;
//cols -> company

//mega-function for loading all the d3 stuff
d3.csv('./dataset_split.csv', function(error, datum){
    if(error) {
        console.error('Error loading companyDetailed.csv dataset.');
        console.error(error);
        return;
    }
d3.csv('./Silicon-Valley-Diversity-Data-master/companyList.csv', function(error, datum2){
	if(error) {
		console.error('Error loading companyDetailed.csv dataset.');
		console.error(error);
		return;
	}
		
	//the datum values that will hold all the d3 pulled data
	companyDetailed = datum;
	//cols -> company	percentage	count	gender	race	job_category
	companyList = datum2;
	//cols -> company
	

	//create an array of companies and their totals, because that doesn't exist...
	//should turn this into the same format as the csv arrays at some point.
	companyList.forEach(d =>{
		var tempTotal = 0;
		companyDetailed.forEach(d2 => {
			if(d2['Company'] == d['company'])
			{	
				tempTotal += +d2['Count'];
			}
		});
		var temp = d['company'];
		companyTotals.push({"company" : temp , "total" : tempTotal});
		totalPopulationNum += tempTotal;
	});

	//scary array I'm praying works
	var addFlag = 0;
	jobTitleArray.forEach(d =>{
		raceArray.forEach(d2 =>{
			var tempSum = 0;
			genderArray.forEach(d5 =>{
				companyDetailed.forEach(d4 =>{
					if(addFlag == 0)//gonna create my total counts while we're here
					{		
						if(d4['job_category'] == "Manager")
							managerNum += +d4['Count'];
						if(d4['job_category'] == "Executive")
							executiveNum += +d4['Count'];
						if(d4['job_category'] == "Professionals")
							professionalNum += +d4['Count'];
						if(d4['job_category'] == "Supportive Workers")
							otherNum += +d4['Count'];
					}
					addFlag = 1;
					if(d4['Gender'] == d5 && d4['Race'] == d2 && d4['job_category'] == d)
					{
						tempSum+= +d4['Count'];
					}
				});
				dotCount.push([d, d2, d5, tempSum]);
				//console.log(tempSum);
			});
		});
	});
	//should be called in the format: dotCount[‘executive’[‘white’[‘male’]]] = 32;
		
	//go ahead and finish instatiating the rest of the variables I need
	managerPercent = managerNum/totalPopulationNum;
	executivePercent = executiveNum/totalPopulationNum;
	professionalPercent = professionalNum/totalPopulationNum;
	otherWorkerPercent = otherNum/totalPopulationNum;
	
	//creating the array of all the dots now that we have the counts
	dotCount.forEach(d =>{
		//this should create at least one dot per demographic and then account for rounding
		for(var i = 0; i < d[3]; i+=1000){
			if(i + 1000 > d[3]) 
			{
				dotArray.push(new dot(d[0], d[1], d[2], 0, 0, defaultColor, "halp", i%1000));
			}
			else	
				dotArray.push(new dot(d[0], d[1], d[2], 0, 0, defaultColor, "halp", 1000));			
		}
	});
	
	//initialize companyObjectList
	companyObjectList.push(Adobe);
	companyObjectList.push(Airbnb);
	companyObjectList.push(Apple);
	companyObjectList.push(Cisco);
	companyObjectList.push(eBay);
	companyObjectList.push(Facebook);
	companyObjectList.push(Google);
	companyObjectList.push(HP);
	companyObjectList.push(HPE);
	companyObjectList.push(Intel);
	companyObjectList.push(Intuit);
	companyObjectList.push(Linkedin);
	companyObjectList.push(Lyft);
	companyObjectList.push(MobileIron);
	companyObjectList.push(NetApp);
	companyObjectList.push(Nvidia);
	companyObjectList.push(PayPal);
	companyObjectList.push(Pinterest);
	companyObjectList.push(Salesforce);
	companyObjectList.push(Sanmina);
	companyObjectList.push(Square);
	companyObjectList.push(Twitter);
	companyObjectList.push(Uber);
	companyObjectList.push(View);

	//initialize companySortFemale
	companySortFemale.push(View);
	companySortFemale.push(Nvidia);
	companySortFemale.push(NetApp);
	companySortFemale.push(Intel);
	companySortFemale.push(Cisco);
	companySortFemale.push(Google);
	companySortFemale.push(Uber);
	companySortFemale.push(Apple);
	companySortFemale.push(HP);
	companySortFemale.push(MobileIron);
	companySortFemale.push(Facebook);
	companySortFemale.push(Salesforce);
	companySortFemale.push(Adobe);
	companySortFemale.push(HPE);
	companySortFemale.push(Square);
	companySortFemale.push(Twitter);
	companySortFemale.push(eBay);
	companySortFemale.push(Sanmina);
	companySortFemale.push(Linkedin);
	companySortFemale.push(Lyft);
	companySortFemale.push(Airbnb);
	companySortFemale.push(Intuit);
	companySortFemale.push(PayPal);
	companySortFemale.push(Pinterest);

	//initialize comapnySortFemaleWhite
	companySortFemaleWhite.push(Nvidia);
	companySortFemaleWhite.push(View);
	companySortFemaleWhite.push(MobileIron);
	companySortFemaleWhite.push(Intel);
	companySortFemaleWhite.push(Cisco);
	companySortFemaleWhite.push(NetApp);
	companySortFemaleWhite.push(Google);
	companySortFemaleWhite.push(Apple);
	companySortFemaleWhite.push(Facebook);
	companySortFemaleWhite.push(Uber);
	companySortFemaleWhite.push(Adobe);
	companySortFemaleWhite.push(Square);
	companySortFemaleWhite.push(eBay);
	companySortFemaleWhite.push(Salesforce);
	companySortFemaleWhite.push(Twitter);
	companySortFemaleWhite.push(HP);
	companySortFemaleWhite.push(Intuit);
	companySortFemaleWhite.push(Linkedin);
	companySortFemaleWhite.push(Sanmina);
	companySortFemaleWhite.push(HPE);
	companySortFemaleWhite.push(Airbnb);
	companySortFemaleWhite.push(PayPal);
	companySortFemaleWhite.push(Pinterest);
	companySortFemaleWhite.push(Lyft);
	//initialize companySortFemaleAsian
	companySortFemaleAsian.push(HPE);
	companySortFemaleAsian.push(HP);
	companySortFemaleAsian.push(Apple);
	companySortFemaleAsian.push(Lyft);
	companySortFemaleAsian.push(View);
	companySortFemaleAsian.push(NetApp);
	companySortFemaleAsian.push(Salesforce);
	companySortFemaleAsian.push(Uber);
	companySortFemaleAsian.push(PayPal);
	companySortFemaleAsian.push(Sanmina);
	companySortFemaleAsian.push(Square);
	companySortFemaleAsian.push(Adobe);
	companySortFemaleAsian.push(Cisco);
	companySortFemaleAsian.push(Google);
	companySortFemaleAsian.push(Intel);
	companySortFemaleAsian.push(Twitter);
	companySortFemaleAsian.push(Airbnb);
	companySortFemaleAsian.push(Nvidia);
	companySortFemaleAsian.push(eBay);
	companySortFemaleAsian.push(Facebook);
	companySortFemaleAsian.push(Intuit);
	companySortFemaleAsian.push(Linkedin);
	companySortFemaleAsian.push(Pinterest);
	companySortFemaleAsian.push(MobileIron);
	//initialize companySortFemaleAfrican
	companySortFemaleAfrican.push(Adobe);
	companySortFemaleAfrican.push(Facebook);
	companySortFemaleAfrican.push(Google);
	companySortFemaleAfrican.push(Intel);
	companySortFemaleAfrican.push(MobileIron);
	companySortFemaleAfrican.push(Nvidia);
	companySortFemaleAfrican.push(Pinterest);
	companySortFemaleAfrican.push(Salesforce);
	companySortFemaleAfrican.push(Twitter);
	companySortFemaleAfrican.push(Cisco);
	companySortFemaleAfrican.push(eBay);
	companySortFemaleAfrican.push(Airbnb);
	companySortFemaleAfrican.push(HP);
	companySortFemaleAfrican.push(Linkedin);
	companySortFemaleAfrican.push(NetApp);
	companySortFemaleAfrican.push(Square);
	companySortFemaleAfrican.push(View);
	companySortFemaleAfrican.push(HPE);
	companySortFemaleAfrican.push(Intuit);
	companySortFemaleAfrican.push(Sanmina);
	companySortFemaleAfrican.push(Uber);
	companySortFemaleAfrican.push(Apple);
	companySortFemaleAfrican.push(Lyft);
	companySortFemaleAfrican.push(PayPal);
	//initialize companySortFemaleHispanic
	companySortFemaleHispanic.push(Nvidia);
	companySortFemaleHispanic.push(View);
	companySortFemaleHispanic.push(Cisco);
	companySortFemaleHispanic.push(eBay);
	companySortFemaleHispanic.push(Facebook);
	companySortFemaleHispanic.push(Google);
	companySortFemaleHispanic.push(HPE);
	companySortFemaleHispanic.push(MobileIron);
	companySortFemaleHispanic.push(NetApp);
	companySortFemaleHispanic.push(Pinterest);
	companySortFemaleHispanic.push(Salesforce);
	companySortFemaleHispanic.push(Uber);
	companySortFemaleHispanic.push(Twitter);
	companySortFemaleHispanic.push(Adobe);
	companySortFemaleHispanic.push(HP);
	companySortFemaleHispanic.push(Intel);
	companySortFemaleHispanic.push(Linkedin);
	companySortFemaleHispanic.push(PayPal);
	companySortFemaleHispanic.push(Square);
	companySortFemaleHispanic.push(Airbnb);
	companySortFemaleHispanic.push(Intuit);
	companySortFemaleHispanic.push(Lyft);
	companySortFemaleHispanic.push(Sanmina);
	companySortFemaleHispanic.push(Apple);

	//initialize comapanySortFemaleMinority
	companySortFemaleMinority.push(Adobe);
	companySortFemaleMinority.push(Cisco);
	companySortFemaleMinority.push(eBay);
	companySortFemaleMinority.push(Google);
	companySortFemaleMinority.push(HP);
	companySortFemaleMinority.push(HPE);
	companySortFemaleMinority.push(Intel);
	companySortFemaleMinority.push(MobileIron);
	companySortFemaleMinority.push(NetApp);
	companySortFemaleMinority.push(Nvidia);
	companySortFemaleMinority.push(PayPal);
	companySortFemaleMinority.push(Sanmina);
	companySortFemaleMinority.push(View);
	companySortFemaleMinority.push(Airbnb);
	companySortFemaleMinority.push(Apple);
	companySortFemaleMinority.push(Facebook);
	companySortFemaleMinority.push(Intuit);
	companySortFemaleMinority.push(Linkedin);
	companySortFemaleMinority.push(Lyft);
	companySortFemaleMinority.push(Pinterest);
	companySortFemaleMinority.push(Salesforce);
	companySortFemaleMinority.push(Square);
	companySortFemaleMinority.push(Twitter);
	companySortFemaleMinority.push(Uber);

	//initialize comapanySortMaleWhite
	companySortMaleWhite.push(Pinterest);
	companySortMaleWhite.push(Linkedin);
	companySortMaleWhite.push(Airbnb);
	companySortMaleWhite.push(Intuit);
	companySortMaleWhite.push(PayPal);
	companySortMaleWhite.push(eBay);
	companySortMaleWhite.push(Sanmina);
	companySortMaleWhite.push(Facebook);
	companySortMaleWhite.push(Lyft);
	companySortMaleWhite.push(Intel);
	companySortMaleWhite.push(Nvidia);
	companySortMaleWhite.push(Twitter);
	companySortMaleWhite.push(Uber);
	companySortMaleWhite.push(Apple);
	companySortMaleWhite.push(Cisco);
	companySortMaleWhite.push(Google);
	companySortMaleWhite.push(MobileIron);
	companySortMaleWhite.push(Square);
	companySortMaleWhite.push(Salesforce);
	companySortMaleWhite.push(Adobe);
	companySortMaleWhite.push(View);
	companySortMaleWhite.push(HPE);
	companySortMaleWhite.push(NetApp);
	companySortMaleWhite.push(HP);

	//initialize comapanySortMaleAsian
	companySortMaleAsian.push(HP);
	companySortMaleAsian.push(HPE);
	companySortMaleAsian.push(Lyft);
	companySortMaleAsian.push(Apple);
	companySortMaleAsian.push(Sanmina);
	companySortMaleAsian.push(View);
	companySortMaleAsian.push(Adobe);
	companySortMaleAsian.push(Square);
	companySortMaleAsian.push(Salesforce);
	companySortMaleAsian.push(Intuit);
	companySortMaleAsian.push(PayPal);
	companySortMaleAsian.push(Airbnb);
	companySortMaleAsian.push(NetApp);
	companySortMaleAsian.push(Twitter);
	companySortMaleAsian.push(MobileIron);
	companySortMaleAsian.push(Google);
	companySortMaleAsian.push(Linkedin);
	companySortMaleAsian.push(Intel);
	companySortMaleAsian.push(Uber);
	companySortMaleAsian.push(Cisco);
	companySortMaleAsian.push(Facebook);
	companySortMaleAsian.push(Pinterest);
	companySortMaleAsian.push(eBay);
	companySortMaleAsian.push(Nvidia);

	//initialize companySortMaleAfrican
	companySortMaleAfrican.push(MobileIron);
	companySortMaleAfrican.push(Nvidia);
	companySortMaleAfrican.push(Adobe);
	companySortMaleAfrican.push(Airbnb);
	companySortMaleAfrican.push(eBay);
	companySortMaleAfrican.push(Facebook);
	companySortMaleAfrican.push(Google);
	companySortMaleAfrican.push(Intuit);
	companySortMaleAfrican.push(Linkedin);
	companySortMaleAfrican.push(Pinterest);
	companySortMaleAfrican.push(Salesforce);
	companySortMaleAfrican.push(Twitter);
	companySortMaleAfrican.push(Cisco);
	companySortMaleAfrican.push(HP);
	companySortMaleAfrican.push(Intel);
	companySortMaleAfrican.push(Lyft);
	companySortMaleAfrican.push(NetApp);
	companySortMaleAfrican.push(Square);
	companySortMaleAfrican.push(Uber);
	companySortMaleAfrican.push(HPE);
	companySortMaleAfrican.push(PayPal);
	companySortMaleAfrican.push(Sanmina);
	companySortMaleAfrican.push(Apple);
	companySortMaleAfrican.push(PayPal);

	//initialize companySortMaleHispanic
	companySortMaleHispanic.push(Adobe);
	companySortMaleHispanic.push(Airbnb);
	companySortMaleHispanic.push(eBay);
	companySortMaleHispanic.push(Facebook);
	companySortMaleHispanic.push(Linkedin);
	companySortMaleHispanic.push(NetApp);
	companySortMaleHispanic.push(Nvidia);
	companySortMaleHispanic.push(Pinterest);
	companySortMaleHispanic.push(Salesforce);
	companySortMaleHispanic.push(Twitter);
	companySortMaleHispanic.push(Uber);
	companySortMaleHispanic.push(Cisco);
	companySortMaleHispanic.push(Google);
	companySortMaleHispanic.push(HPE);
	companySortMaleHispanic.push(Lyft);
	companySortMaleHispanic.push(PayPal);
	companySortMaleHispanic.push(Square);
	companySortMaleHispanic.push(View);
	companySortMaleHispanic.push(Intuit);
	companySortMaleHispanic.push(MobileIron);
	companySortMaleHispanic.push(Intel);
	companySortMaleHispanic.push(HP);
	companySortMaleHispanic.push(Sanmina);
	companySortMaleHispanic.push(Apple);

	//initialize companySortMaleMinority
	companySortMaleMinority.push(Cisco);
	companySortMaleMinority.push(eBay);
	companySortMaleMinority.push(Nvidia);
	companySortMaleMinority.push(PayPal);
	companySortMaleMinority.push(Sanmina);
	companySortMaleMinority.push(Adobe);
	companySortMaleMinority.push(Apple);
	companySortMaleMinority.push(Facebook);
	companySortMaleMinority.push(Google);
	companySortMaleMinority.push(HP);
	companySortMaleMinority.push(HPE);
	companySortMaleMinority.push(Intel);
	companySortMaleMinority.push(Intuit);
	companySortMaleMinority.push(Linkedin);
	companySortMaleMinority.push(MobileIron);
	companySortMaleMinority.push(NetApp);
	companySortMaleMinority.push(Salesforce);
	companySortMaleMinority.push(Twitter);
	companySortMaleMinority.push(Lyft);
	companySortMaleMinority.push(Airbnb);
	companySortMaleMinority.push(Pinterest);
	companySortMaleMinority.push(Square);
	companySortMaleMinority.push(Uber);
	companySortMaleMinority.push(View);
	
	for (var i = 0; i < companyObjectList.length; i++) {
		calculateCompanyInfo(companyObjectList[i], companyDetailed);
	}	
	
	preLoad();
	loaded = 1;
	scrollChange();
});
});	
		
function dot(work, ethnicity, gender, x, y, color, label, extra){
	this.work = work;
	this.ethnicity = ethnicity;
	this.gender = gender;
	this.x = x;
	this.y = y;
	this.color = color;
	this.label = label;
	this.extra = extra;
}

//update function is mostly a state machine handler
function update(){
	var temp = document.getElementById("d3Stuff").className;
	if(temp =="part0") //preloading everything
		state0();
	if(temp =="part1") //whole population scrolls to p3 or clicks to p2
		state1();
	if(temp =="part2") //displays job title info
		state2();
	if(temp =="part3") //execs fly up
		state3();
	if(temp =="part4") //managers fly up
		state4();
	if(temp =="part5") //others split out
		state5();
	if(temp =="part6") //remove dots add percentile scale
		state6();
	if(temp =="part7") //add dots to scale
		state7();
	if(temp =="part8") //colors the dots. allows scrolling to the next phase. make sure to not despawn the graphics
		state8();
	if(temp =="part9") //locks to box view
		state9();
	if(temp =="part10") //displays gender drop down view
		state10();
	if(temp =="part11") //displays gender + ethnicity drop down view
		state11();
	if(temp =="part12") //DONE. allows scrolling to the Lee's phase. make sure to not get despawn the graphics
		state12();
		
}


function preLoad()
{
	var dotLegend = dots.append('g')
		.attr('class', 'dot-legend')
		.style('opacity', 0.0);
	
		dotLegend.append('circle')
		.attr('class', 'dots-style')
		.attr('r', dotRadius)
		.style('fill', defaultColor)
		.style('stroke', defDotStroke)
		.style('stroke-width', dotRadius/2)
		.attr('transform', function(d) {
			var tempX = dotsWidth*.4;
			var tempY = dotsHeight*.2;
			return 'translate('+ [tempX, tempY] +')';
		});
	
		dotLegend.append("text")
		.attr('class', 'h4')
		.attr('transform', function(d) {
			var tempX = dotsWidth*.42;
			var tempY = dotsHeight*.2 + dotRadius;
			return 'translate('+ [tempX, tempY] +')';
		})
		.text("= 1000 people");
		
	var totalPop = dots.append('g')
		.attr('class', 'popTotalText')
		.append("text")
		.attr('class', 'h2')
		.style('opacity', 1.0)
		.style('text-anchor', 'middle')
		.attr('transform', function(d) {
			var tempX = dotsWidth*.5;
			var tempY = dotsHeight+50;
			return 'translate('+ [tempX, tempY] +')';
		})
		.text("375,780 people");
		
		
	var execText = dots.append('g')
		.attr('class', 'execText')
		.style('opacity', 0.0)
		.attr('transform', function(d) {
			var tempX = dotsWidth*.5 + dotRadius * 4;
			var tempY = dotsHeight*.18;
			return 'translate('+ [tempX, tempY] +')';
		});

		execText.append("text")
		.attr('class', 'h3')
		.style('text-anchor', 'middle')
		.text("1%");
		
		execText.append("text")
		.attr('class', 'h4')
		.style('text-anchor', 'middle')
		.attr('transform', function(d) {
			var tempX = 0;
			var tempY = dotRadius*12;
			return 'translate('+ [tempX, tempY] +')';
		})
		.text("3785 Executives");
		
	var manageText = dots.append('g')
		.attr('class', 'manageText')
		.style('opacity', 0.0)
		.attr('transform', function(d) {
			var tempX = dotsWidth*.5 + dotRadius * 13;
			var tempY = dotsHeight*.3 - dotRadius * 16;
			return 'translate('+ [tempX, tempY] +')';
		});
		
		manageText.append("text")
		.attr('class', 'h3')
		.style('text-anchor', 'middle')
		.text("14.74%");
		
		manageText.append("text")
		.attr('class', 'h4')
		.style('text-anchor', 'middle')
		.attr('transform', function(d) {
			var tempX = 0;
			var tempY = dotRadius*21;
			return 'translate('+ [tempX, tempY] +')';
		})
		.text("53,380 Managers");
		
	var proText = dots.append('g')
		.attr('class', 'proText')
		.style('opacity', 0.0)
		.append("text")
		.attr('class', 'p')
		.style('text-anchor', 'middle')
		.attr('transform', function(d) {
			var tempX = dotsWidth*.1 + dotRadius*25;
			var tempY = dotsHeight*.97;
			return 'translate('+ [tempX, tempY] +')';
		})
		.text("213,287 Professionals");
		
	var supText = dots.append('g')
		.attr('class', 'supText')
		.style('opacity', 0.0)
		.append("text")
		.attr('class', 'p')
		.style('text-anchor', 'middle')
		.attr('transform', function(d) {
			var tempX = dotsWidth*.66 + dotRadius*15;
			var tempY = dotsHeight*.97;
			return 'translate('+ [tempX, tempY] +')';
		})
		.text("103,345 Other Workers");
		
	var axis = dots.append('g')
		.attr('class', 'axis')
		.attr('transform', function(d) {
			var tempX = dotsWidth*.5;
			var tempY = dotsHeight*.1;
			return 'translate('+ [tempX, tempY] +')';
		})
		.style('opacity', 0.0);
		//left lines
		axis.append("line")
			.attr('class', 'line')
			.attr("x1", -dotsWidth*.05 + dotRadius*2)
			.attr("y1", 0)
			.attr("x2", -dotsWidth*.05 + dotRadius*2)
            .attr("y2", dotRadius*59);
			
		axis.append("line")
			.attr('class', 'line')
			.attr("x1", -dotsWidth*.05 + dotRadius*2)
			.attr("y1", dotRadius*1)
			.attr("x2", -dotsWidth*.05 + dotRadius*4)
            .attr("y2", dotRadius*1);
			
		axis.append("line")
			.attr('class', 'line')
			.attr("x1", -dotsWidth*.05 + dotRadius*2)
			.attr("y1", dotRadius*16)
			.attr("x2", -dotsWidth*.05 + dotRadius*4)
            .attr("y2", dotRadius*16);
			
		axis.append("line")
			.attr('class', 'line')
			.attr("x1", -dotsWidth*.05 + dotRadius*2)
			.attr("y1", dotRadius*44)
			.attr("x2", -dotsWidth*.05 + dotRadius*4)
            .attr("y2", dotRadius*44);	
		
		axis.append("line")
			.attr('class', 'line')
			.attr("x1", -dotsWidth*.05 + dotRadius*2)
			.attr("y1", dotRadius*59)
			.attr("x2", -dotsWidth*.05 + dotRadius*4)
            .attr("y2", dotRadius*59);	
		//right lines	
		axis.append("line")
			.attr('class', 'line')
			.attr("x1", dotsWidth*.05 - dotRadius*2)
			.attr("y1", 0)
			.attr("x2", dotsWidth*.05 - dotRadius*2)
            .attr("y2", dotRadius*59);
			
		axis.append("line")
			.attr('class', 'line')
			.attr("x1", dotsWidth*.05 - dotRadius*2)
			.attr("y1", dotRadius*1)
			.attr("x2", dotsWidth*.05 - dotRadius*4)
            .attr("y2", dotRadius*1);
			
		axis.append("line")
			.attr('class', 'line')
			.attr("x1", dotsWidth*.05 - dotRadius*2)
			.attr("y1", dotRadius*16)
			.attr("x2", dotsWidth*.05 - dotRadius*4)
            .attr("y2", dotRadius*16);
			
		axis.append("line")
			.attr('class', 'line')
			.attr("x1", dotsWidth*.05 - dotRadius*2)
			.attr("y1", dotRadius*44)
			.attr("x2", dotsWidth*.05 - dotRadius*4)
            .attr("y2", dotRadius*44);	
		
		axis.append("line")
			.attr('class', 'line')
			.attr("x1", dotsWidth*.05 - dotRadius*2)
			.attr("y1", dotRadius*59)
			.attr("x2", dotsWidth*.05 - dotRadius*4)
            .attr("y2", dotRadius*59);	
			
		//axis text
		axis.append("text")
			.attr('class', 'h4')
			.style('text-anchor', 'end')
			.attr('transform', function(d) {
					var tempX = -dotRadius*4;
					var tempY = -dotRadius*3;
					return 'translate('+ [tempX, tempY] +')';
			})
			.text("Female");
		axis.append("text")
			.attr('class', 'h4')
			.style('text-anchor', 'start')
			.attr('transform', function(d) {
					var tempX = dotRadius*4;
					var tempY = -dotRadius*3;
					return 'translate('+ [tempX, tempY] +')';
			})
			.text("Male");
		
		axis.append("text")
			.attr('class', 'p')
			.style('text-anchor', 'middle')
			.attr('transform', function(d) {
					var tempX = 0;
					var tempY = 0;
					return 'translate('+ [tempX, tempY] +')';
			})
			.text("1%");
		
		axis.append("text")
			.attr('class', 'p')
			.style('text-anchor', 'middle')
			.attr('transform', function(d) {
					var tempX = 0;
					var tempY = dotRadius*15;
					return 'translate('+ [tempX, tempY] +')';
			})
			.text("15.7%");
		
		axis.append("text")
			.attr('class', 'p')
			.style('text-anchor', 'middle')
			.attr('transform', function(d) {
					var tempX = 0;
					var tempY = dotRadius*43;
					return 'translate('+ [tempX, tempY] +')';
			})
			.text("72.5%");
			
		axis.append("text")
			.attr('class', 'p')
			.style('text-anchor', 'middle')
			.attr('transform', function(d) {
					var tempX = 0;
					var tempY = dotRadius*58;
					return 'translate('+ [tempX, tempY] +')';
			})
			.text("100%");
		
			
		
	var dotsPlaced = dots.selectAll('dots')
		.data(dotArray)
		.enter()
		.append('g')
		.style('fill', function(d) {
			return d.color;})
		.attr('class', 'dots');
	
	dotsPlaced.append('circle')
		.attr('class','dots-style')
		.style('stroke', defDotStroke)
		.style('stroke-width', dotRadius/2.5)
		.attr('r', dotRadius);	
}

//preload the first graphic
function state0() 
{
	document.getElementById("svgText").innerHTML = "Are minority groups represented in the leadership of these tech companies?";
	graphic1(); //
}
//the overall first graphic
function state1() 
{		
	//first, the html stuff
	//document.getElementById("caption").style.position = "sticky";
	//document.getElementById("caption").style.top = "30%";
	//document.getElementById("caption").style.left = "33%";
	
	
	document.getElementById("svgText").innerHTML = "Are minority groups represented in the leadership of these tech companies?";
	//document.getElementById("summaryText").innerHTML = "Hello, this is part 1 of the dataset summary";
	//graphic1();
}

function graphic1() //done
{
 	var dotsPlaced = dots.selectAll('.dots')
		.transition()
		.attr('transform', function(d, i){
			d.x = (dotRadius*2+1)*(i%dotCols)+20;
			if(Math.floor(i/dotCols)%2 == 1)
				d.x += dotRadius;			
			d.y = dotsHeight*.9-((dotRadius*2+0)*Math.floor(i/dotCols));
			return 'translate('+ [d.x, d.y] +')';
		})
		.duration(500);
		
	var dotLegend = dots.selectAll('.dot-legend')
		.transition()
		.style('opacity', 1.0);

	var execText = dots.selectAll('.execText')
		.transition()
		.style('opacity', 0.0)
		.duration(500);

	
}

//text changes?
function state2(){
	//first, the html stuff
	//document.getElementById("caption").style.position = "fixed";
	document.getElementById("svgText").innerHTML = "Are minority groups represented in the leadership of these tech companies?";
	//graphic1(); //same as graphic one, so no graphicc for this
}


//execs fly up
function state3(){
	//first, the html stuff
	//document.getElementById("caption").style.position = "fixed";
	document.getElementById("svgText").innerHTML = "Are minority groups represented in the leadership of these tech companies?";
	graphic3();
}

function graphic3() //done
{
	
	var execCount = 0;
	var execCols = 4;
	var execLastY = 0;
			
	var dotsPlaced = dots.selectAll('.dots')
		.transition()
		.attr('transform', function(d, i){
			
			d.x = (dotRadius*2+1)*(i%dotCols)+20;
			if(Math.floor(i/dotCols)%2 == 1)
				d.x += dotRadius;			
			d.y = dotsHeight*.9-((dotRadius*2+0)*Math.floor(i/dotCols));
			
			if(d.work == "Executives")
			{
				d.y = dotsHeight*.25-((dotRadius*2+0)*Math.floor(execCount/execCols));
				execLastY = d.y - dotRadius*3;

				d.x = (dotRadius*2+1)*(i%execCols)+dotsWidth/2;
				if(Math.floor(execCount/execCols)%2 == 1)
					d.x += dotRadius;	
				
				execCount++;
			}
			return 'translate('+ [d.x, d.y] +')';
		})
		.duration(500);
		
	var dotLegend = dots.selectAll('.dot-legend')
		.transition()
		.style('opacity', 0.0)
		.duration(500);
		
	var execText = dots.selectAll('.execText')
		.transition()
		.style('opacity', 1.0)
		.attr('transform', function(d) {
			var tempX = dotsWidth*.5 + dotRadius * 4;
			var tempY = execLastY;
			return 'translate('+ [tempX, tempY] +')';
		})
		.duration(500);
		
	var manageText = dots.selectAll('.manageText')
		.transition()
		.style('opacity', 0.0)
		.duration(500);
		
}

//managers fly up
function state4()
{		
	//first, the html stuff
	//document.getElementById("caption").style.position = "fixed";
	
	document.getElementById("svgText").innerHTML = "Are minority groups represented in the leadership of these tech companies?";
	//document.getElementById("summaryText").innerHTML = "Hello, this is part 1 of the dataset summary";
	graphic4();
}

function graphic4()
{
	
	var execCount = 0;
	var execCols = 4;
	var execLastY = 0;
	
	var manCount = 0;
	var manCols = 12;
	
	var dotsPlaced = dots.selectAll('.dots')
		.transition()
		.attr('transform', function(d, i){
			
			d.x = (dotRadius*2+1)*(i%dotCols)+20;
			if(Math.floor(i/dotCols)%2 == 1)
				d.x += dotRadius;			
			d.y = dotsHeight*.9-((dotRadius*2+0)*Math.floor(i/dotCols));
			
			if(d.work == "Executives")
			{
				d.y = dotsHeight*.25-((dotRadius*2+0)*Math.floor(execCount/execCols));
				execLastY = d.y;

				d.x = (dotRadius*2+1)*(i%execCols)+dotsWidth/5;
				if(Math.floor(execCount/execCols)%2 == 1)
					d.x += dotRadius;	
				
				execCount++;
			}
			if(d.work == "Managers")
			{
				d.y = dotsHeight*.3-((dotRadius*2+0)*Math.floor(manCount/manCols));
				
				d.x = (dotRadius*2+1)*(i%manCols)+dotsWidth/2;
				if(Math.floor(manCount/manCols)%2 == 1)
					d.x += dotRadius;	
				
				manCount++;
			}
			return 'translate('+ [d.x, d.y] +')';
		})
		.duration(500);
	
	var execText = dots.selectAll('.execText')
		.transition()
		.style('opacity', 1.0)
		.attr('transform', function(d) {
			var tempX = dotsWidth*.2 + dotRadius * 4;
			var tempY = execLastY - dotRadius*3;
			return 'translate('+ [tempX, tempY] +')';
		})
		.duration(500);
	
	var manageText = dots.selectAll('.manageText')
		.transition()
		.style('opacity', 1.0)
		.duration(500);
		
	var proText = dots.selectAll('.proText')
		.transition()
		.style('opacity', 0.0)
		.duration(500);
		
	var supText = dots.selectAll('.supText')
		.transition()
		.style('opacity', 0.0)
		.duration(500);
		
	
}

//bottom half splits out
function state5(){
	//first, the html stuff
	//document.getElementById("caption").style.position = "fixed";
	document.getElementById("svgText").innerHTML = "Are minority groups represented in the leadership of these tech companies?";
	graphic5();
}

function graphic5() //done
{

	var execCount = 0;
	var execCols = 4;
	var execLastY = 0;
	
	var manCount = 0;
	var manCols = 12;
	
	var supCount = 0;
	var supCols = 15;
	
	var proCount = 0;
	var proCols = 25;
	
	var dotsPlaced = dots.selectAll('.dots')
		.transition()
		.style("opacity", 1.0)
		.attr('transform', function(d, i){
			
			d.x = (dotRadius*2+1)*(i%dotCols)+20;
			if(Math.floor(i/dotCols)%2 == 1)
				d.x += dotRadius;			
			d.y = dotsHeight-((dotRadius*2+0)*Math.floor(i/dotCols));
			
			if(d.work == "Executives")
			{
				d.y = dotsHeight*.25-((dotRadius*2+0)*Math.floor(execCount/execCols));
				execLastY = d.y;

				d.x = (dotRadius*2+1)*(i%execCols)+dotsWidth/5;
				if(Math.floor(execCount/execCols)%2 == 1)
					d.x += dotRadius;	
				
				execCount++;
			}
			if(d.work == "Managers")
			{
				d.y = dotsHeight*.3-((dotRadius*2+0)*Math.floor(manCount/manCols));
				
				d.x = (dotRadius*2+1)*(i%manCols)+dotsWidth/2;
				if(Math.floor(manCount/manCols)%2 == 1)
					d.x += dotRadius;	
				
				manCount++;
			}
			if(d.work == "Supportive workers")
			{
				d.y = dotsHeight*.9-((dotRadius*2+0)*Math.floor(supCount/supCols));
						
				d.x = (dotRadius*2+1)*(i%supCols)+(dotsWidth*.66);
				if(Math.floor(supCount/supCols)%2 == 1)
					d.x += dotRadius;	
				
				supCount++;
			}
			if(d.work == "Professionals")
			{
				d.y = dotsHeight*.9-((dotRadius*2+0)*Math.floor(proCount/proCols));
			
				d.x = (dotRadius*2+1)*(i%proCols)+dotsWidth/10;
				if(Math.floor(proCount/proCols)%2 == 1)
					d.x += dotRadius;	
				
				proCount++;
			}
			
			return 'translate('+ [d.x, d.y] +')';
		})
		.duration(500);	
		
		var execText = dots.selectAll('.execText')
		.transition()
		.style('opacity', 1.0)
		.attr('transform', function(d) {
			var tempX = dotsWidth*.2 + dotRadius * 4;;
			var tempY = execLastY - dotRadius * 3;
			return 'translate('+ [tempX, tempY] +')';
		})
		.duration(500);
		
		var manageText = dots.selectAll('.manageText')
		.transition()
		.style('opacity', 1.0)
		.duration(500);
		
		var proText = dots.selectAll('.proText')
		.transition()
		.style('opacity', 1.0)
		.duration(500);
		
		var supText = dots.selectAll('.supText')
		.transition()
		.style('opacity', 1.0)
		.duration(500);
		
		var axis = dots.selectAll('.axis')
		.transition()
		.style('opacity', 0.0)
		.duration(500);
		
		
}

//remove the dots, add the scale
function state6(){
	//first, the html stuff
	document.getElementById("svgText").innerHTML = "Are minority groups represented in the leadership of these tech companies?";
	graphic6();
}

function graphic6()
{
	var dotsPlaced = dots.selectAll('.dots')
		.transition()
		.style("stroke", defDotStroke)
		.style("opacity", 0.0)
		.duration(500);
	
	var execText = dots.selectAll('.execText')
		.transition()
		.style('opacity', 0.0)
		.duration(500);
		
	var manageText = dots.selectAll('.manageText')
		.transition()
		.style('opacity', 0.0)
		.duration(500);
		
	var proText = dots.selectAll('.proText')
		.transition()
		.style('opacity', 0.0)
		.duration(500);
		
	var supText = dots.selectAll('.supText')
		.transition()
		.style('opacity', 0.0)
		.duration(500);
		
	var totalPop = dots.selectAll('popTotalText')
		.transition()
		.style('opacity', 0.0)
		.duration(500);
		
	//draw the axes
	var axis = dots.selectAll('.axis')
		.transition()
		.style('opacity', 1.0)
		.duration(500);

}

//add the dots back by gender
function state7()
{		
	//first, the html stuff
	
	document.getElementById("svgText").innerHTML = "Are minority groups represented in the leadership of these tech companies?";
	graphic7();
}

function graphic7()
{
	var dotsPlaced = dots.selectAll('.dots')

	var execCols = [8,8];
	var execGen = [0,0];
	
	var manCols = [6,8];
	var manGen = [0,0];
	
	var proCols = [11,15];
	var proGen = [0,0];
	
	var supCols = [10,16];
	var supGen = [0,0];
	

	var circles = dots.selectAll('.dots-style')
		.transition()
		.style('stroke', defDotStroke)
		.style('stroke-width',  dotRadius/2.5)
		.duration(500);
		
	
	var dotsPlaced = dots.selectAll('.dots')
		.transition()
		.style('opacity', 1.0)
		.style('fill', defaultColor)
		.attr('transform', function(d, i){
			
			if(d.work == "Executives")
			{
				if(d.gender == "Male")
				{
					d.y = dotsHeight*.1-((dotRadius*2+0)*Math.floor(execGen[0]/execCols[0]));
					
					d.x = (dotsWidth*.45)-((dotRadius*2+1)*(execGen[0]%execCols[0]));
					if(Math.floor(execGen[0]/execCols[0])%2 == 1)
						d.x -= dotRadius;
					execGen[0]++;
				}
				if(d.gender == "Female")
				{
					d.y = dotsHeight*.1-((dotRadius*2+0)*Math.floor(execGen[1]/execCols[1]));
				
					d.x = (dotsWidth*.55)+((dotRadius*2+1)*(execGen[1]%execCols[1]));
					if(Math.floor(execGen[1]/execCols[1])%2 == 1)
						d.x += dotRadius;
					execGen[1]++;
				}
			}
			if(d.work == "Managers")
			{
				if(d.gender == "Male")
				{
					d.y = (dotsHeight*.1+((dotRadius*2+0)*Math.floor(manGen[0]/manCols[0])))+(dotRadius*2.5);
				
					d.x = (dotsWidth*.45)-((dotRadius*2+1)*(manGen[0]%manCols[0]));
					if(Math.floor(manGen[0]/manCols[0])%2 == 1)
						d.x -= dotRadius;
					manGen[0]++;
				}
				if(d.gender == "Female")
				{
					d.y = (dotsHeight*.1+((dotRadius*2+0)*Math.floor(manGen[1]/manCols[1])))+(dotRadius*2.5);
				
					d.x = (dotsWidth*.55)+((dotRadius*2+1)*(manGen[1]%manCols[1]));
					if(Math.floor(manGen[1]/manCols[1])%2 == 1)
						d.x += dotRadius;
					manGen[1]++;
				}
			}
			if(d.work == "Professionals")
			{
				if(d.gender == "Male")
				{
					d.y = (dotsHeight*.1+((dotRadius*2+0)*Math.floor(proGen[0]/proCols[0])))+(dotRadius*17);
				
					d.x = (dotsWidth*.45)-((dotRadius*2+1)*(proGen[0]%proCols[0]));
					if(Math.floor(proGen[0]/proCols[0])%2 == 1)
						d.x -= dotRadius;
					proGen[0]++;
				}
				if(d.gender == "Female")
				{
					d.y = (dotsHeight*.1+((dotRadius*2+0)*Math.floor(proGen[1]/proCols[1])))+(dotRadius*17);
				
					d.x = (dotsWidth*.55)+((dotRadius*2+1)*(proGen[1]%proCols[1]));
					if(Math.floor(proGen[1]/proCols[1])%2 == 1)
						d.x += dotRadius;
					proGen[1]++;
				}
			}
			if(d.work == "Supportive workers")
			{
				if(d.gender == "Male")
				{
					d.y = (dotsHeight*.1+((dotRadius*2+0)*Math.floor(supGen[0]/supCols[0])))+(dotRadius*45.5);
					
					d.x = (dotsWidth*.45)-((dotRadius*2+1)*(supGen[0]%supCols[0]));
					if(Math.floor(supGen[0]/supCols[0])%2 == 1)
						d.x -= dotRadius;
					supGen[0]++;
				}
				if(d.gender == "Female")
				{
					d.y = (dotsHeight*.1+((dotRadius*2+0)*Math.floor(supGen[1]/supCols[1])))+(dotRadius*45.5);
					
					d.x = (dotsWidth*.55)+((dotRadius*2+1)*(supGen[1]%supCols[1]));
					if(Math.floor(supGen[1]/supCols[1])%2 == 1)
						d.x += dotRadius;
					supGen[1]++;
				}
			}
			
			return 'translate('+ [d.x, d.y] +')';
		})
		.duration(500);
	
	var axis = dots.selectAll('.axis')
		.transition()
		.style('opacity', 1.0)
		.duration(500);	
		
	var totalPop = dots.selectAll('popTotalText')
		.transition()
		.style('opacity', 0.0)
		.duration(500);
	
}

//allow scrolling, move to the boxes, preload the boxes
//color gots by race
function state8(){
	//first, the html stuff
	document.getElementById("box_text_1").className = "active";
	document.getElementById("box_text_2").className = "inactive";
	document.getElementById("box_text_3").className = "inactive";
	document.getElementById("checkbox").className = "inactive";
//	graphic1();
	
/* 	document.getElementById("selection1").style.visibility = 'hidden';
    document.getElementById("selection2").style.visibility = 'hidden';
    document.getElementById('checkbox').style.visibility = 'hidden';
    document.getElementById("part1-2").style.top = "0";
    document.getElementById("part1-2").style.left = "0";
    var myNode = document.getElementById("svgCanvas");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    var myNode2 = document.getElementById("header2");
    while (myNode2.firstChild) {
        myNode2.removeChild(myNode2.firstChild);
    }
    document.getElementById("header1").innerHTML = "Let's see if we can find your place in there companies.</br>" +
        "Below are the 24 tech companies who reported their diversity in EEO-1 report in 2016. Each </br>square represents " +
        "100% of their employees. The Total number of employees is written.";
 	 */
	graphic8();
	
}

function graphic8()
{
	graphic7();
	
	var dotsPlaced = dots.selectAll('.dots')
		.transition()
		.style('fill', function(d){
			return ethnicityColor[d.ethnicity];
		})
		.duration(500);
	
	var circsPlaced = dots.selectAll('.dots-style')
		.transition()
		.style('stroke', d3.rgb(150,150,150))
		.style('stroke-width', 2)
		.duration(500);

		graphic9();
}

//locks to the box view
function state9(){
	//first, the html stuff
	//document.getElementById("caption").style.position = "fixed";
 	document.getElementById("box_text_1").className = "active";
	document.getElementById("box_text_2").className = "inactive";
	document.getElementById("box_text_3").className = "inactive";
	document.getElementById("checkbox").className = "inactive";
 
 
/* 	document.getElementById("selection1").style.visibility = 'hidden';
    document.getElementById("selection2").style.visibility = 'hidden';
    document.getElementById('checkbox').style.visibility = 'hidden';
    document.getElementById("part1-2").style.top = "0";
    document.getElementById("part1-2").style.left = "0";
    var myNode = document.getElementById("svgCanvas");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    var myNode2 = document.getElementById("header2");
    while (myNode2.firstChild) {
        myNode2.removeChild(myNode2.firstChild);
    }
    document.getElementById("header1").innerHTML = "Let's see if we can find your place in there companies.</br>" +
        "Below are the 24 tech companies who reported their diversity in EEO-1 report in 2016. Each </br>square represents " +
        "100% of their employees. The Total number of employees is written.";
 */
	graphic9();
	
}

function graphic9()
{
	var myNode = document.getElementById("svgCanvas");
    document.getElementById("sortCheckBox").checked = false;
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
	for (var i = 0; i < companyObjectList.length; i++) {
			drawRectangle0((i % 8) * 120, parseInt(i / 8) * 180, companyObjectList[i]);
		}
}

//dsiplay gender drop down
function state10()
{		
	//first, the html stuff
 	document.getElementById("box_text_1").className = "inactive";
	document.getElementById("box_text_2").className = "active";
	document.getElementById("box_text_3").className = "inactive";
	document.getElementById("checkbox").className = "active";
 
 
/* 	document.getElementById("part1-2").style.top = "0";
    document.getElementById("part1-2").style.left = "0";
    document.getElementById('checkbox').checked = false;
    var myNode2 = document.getElementById("header2");
    while (myNode2.firstChild) {
        myNode2.removeChild(myNode2.firstChild);
    }
    var myNode3 = document.getElementById("svgCanvas");
    while (myNode3.firstChild) {
        myNode3.removeChild(myNode3.firstChild);
    }
    var myNode4 = document.getElementById("header3");
    while (myNode4.firstChild) {
        myNode4.removeChild(myNode4.firstChild);
    }
    document.getElementById("selection2").style.visibility = 'hidden';
    document.getElementById("header1").innerHTML = "How Many positions are filled by";
    document.getElementById("selection1").style.visibility = 'visible';
    document.getElementById("header2").innerHTML = "employees?"
    document.getElementById("selection1").selectedIndex = '0';
    document.getElementById('checkbox').style.visibility = 'visible';
    var myNode = document.getElementById("svgCanvas");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    } */
 
	graphic10();
}

function graphic10()
{
	var myNode = document.getElementById("svgCanvas");
    document.getElementById("sortCheckBox").checked = false;
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
	for (var i = 0; i < companyObjectList.length; i++) {
                drawRectangle1((i % 8) * 120, parseInt(i / 8) * 180, companyObjectList[i], 'female');
        }
}

//display gender and ethnicity
function state11(){
	//first, the html stuff
	//document.getElementById("caption").style.position = "fixed";
	 document.getElementById("box_text_1").className = "inactive";
	 document.getElementById("box_text_2").className = "inactive";
	 document.getElementById("box_text_3").className = "active";
	 document.getElementById("checkbox").className = "active";
	 
/* 	document.getElementById("header1").innerHTML = "Among all the";
    document.getElementById("selection1").style.visibility = 'visible';
    document.getElementById("header2").innerHTML = 'employees, how many of them are';
    document.getElementById("selection2").style.visibility = 'visible';
    document.getElementById("selection1").selectedIndex = '0';
    document.getElementById("selection2").selectedIndex = '0';
    document.getElementById("header3").innerHTML = '?';
    document.getElementById('checkbox').style.visibility = 'visible';
    var myNode = document.getElementById("svgCanvas");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    } */
	graphic11();
}

function graphic11()
{
	var myNode = document.getElementById("svgCanvas");
    document.getElementById("sortCheckBox").checked = false;
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
	 for (var i = 0; i < companyObjectList.length; i++) {
                drawRectangle2((i % 8) * 120, parseInt(i / 8) * 180, companyObjectList[i], 'female', 'white');
        }
}

//DONE. allow scrolling to Lee's stuff
function state12(){
	//first, the html stuff
	//document.getElementById("caption").style.position = "static";
	document.getElementById("svgText").innerHTML = "Hello, this is part 12 of the dataset";
	
}

function graphic12()
{
	//graphic9();
}


function calculateCompanyInfo(company, dataset) {
    var totalPopulation = 0;
    var femalePopulation = 0;
    var malePopulation = 0;
    var whiteFemale = 0;
    var asianFemale = 0;
    var africanFemale = 0;
    var hispanicFemale = 0;
    var minorityFemale = 0;
    var whiteMale = 0;
    var asianMale = 0;
    var africanMale = 0;
    var hispanicMale = 0;
    var minorityMale = 0;
	dataset.filter(function(d) {
        if (d.Company === company.name){
            totalPopulation += parseInt(d.Count);
            if (d.Gender === 'Female') {
            	femalePopulation += parseInt(d.Count);
            	if (d.Race === 'White') {
            		whiteFemale += parseInt(d.Count);
				}
				if (d.Race === 'Asian') {
					asianFemale += parseInt(d.Count);
				}
                if (d.Race === 'Black_or_African_American') {
					africanFemale += parseInt(d.Count);
                }
                if (d.Race === 'Hispanic_or_Latino') {
					hispanicFemale += parseInt(d.Count);
                }
                if (d.Race === 'Minorities ') {
					minorityFemale += parseInt(d.Count);
                }
			}
			if (d.Gender === 'Male') {
				malePopulation += parseInt(d.Count);
                if (d.Race === 'White') {
                    whiteMale += parseInt(d.Count);
                }
                if (d.Race === 'Asian') {
                    asianMale += parseInt(d.Count);
                }
                if (d.Race === 'Black_or_African_American') {
                    africanMale += parseInt(d.Count);
                }
                if (d.Race === 'Hispanic_or_Latino') {
                    hispanicMale += parseInt(d.Count);
                }
                if (d.Race === 'Minorities ') {
                    minorityMale += parseInt(d.Count);
                }
			}
        }
    });
	company.totalPopulation = totalPopulation;
	company.femalePopulation = femalePopulation;
	company.malePopulation = malePopulation;
	company.femaleWhite = whiteFemale;
	company.femaleAsian = asianFemale;
	company.femaleAfrican = africanFemale;
	company.femaleHispanic = hispanicFemale;
	company.femaleMinority = minorityFemale;
	company.maleWhite = whiteMale;
	company.maleAsian = asianMale;
	company.maleAfrican = africanMale;
	company.maleHispanic = hispanicMale;
	company.maleMinority = minorityMale;
}

function drawRectangle0(xPos, yPos, company) {
	var svg = d3.select('#svgCanvas');
	svg.append('rect')
		.attr('x', xPos)
		.attr('y', yPos)
		.attr('width', 100)
		.attr('height', 100)
		.attr('fill', 'rgb(33,33,33)')
		.attr('stroke-width', '3')
		.attr('stroke', 'rgb(255,255,255)');
	svg.append('text')
		.attr('x', xPos + 30)
		.attr('y', yPos + 50)
		.text(company.totalPopulation)
		.attr('class', 'p');
	svg.append('text')
		.attr('x', xPos + 45)
		.attr('y', yPos + 120)
		.text(company.name)
		.attr('class', 'p2');
}

function drawRectangle1(xPos, yPos, company, gender) {
    var svg = d3.select('#svgCanvas');
    svg.append('rect')
        .attr('x', xPos)
        .attr('y', yPos + 30)
        .attr('width', 100)
        .attr('height', 100)
        .attr('fill', 'rgb(33,33,33)')
        .attr('stroke-width', '3')
        .attr('stroke', 'rgb(255,255,255)');
    if (gender == 'female') {
        svg.append('rect')
            .attr('x', xPos)
            .attr('y', yPos + 30)
            .attr('width', Math.round((parseInt(company.femalePopulation) / parseInt(company.totalPopulation)) * 100))
            .attr('height', 100)
            .attr('style', 'fill:rgb(255,255,255)');
        svg.append('text')
            .attr('x', xPos + 40)
            .attr('y', yPos + 150)
            .text(company.name)
            .attr('class', 'p2');
        svg.append('text')
            .attr('x', xPos+ 20)
            .attr('y', yPos + 25)
            .text(Math.round((parseInt(company.femalePopulation) / parseInt(company.totalPopulation)) * 100) + '%')
            .attr('class', 'p2');
    }
    if (gender == 'male') {
        svg.append('rect')
            .attr('x', xPos)
            .attr('y', yPos + 30)
            .attr('width', Math.round((parseInt(company.malePopulation) / parseInt(company.totalPopulation)) * 100))
            .attr('height', 100)
            .attr('style', 'fill:rgb(255,255,255)');
        svg.append('text')
            .attr('x', xPos + 40)
            .attr('y', yPos + 150)
            .text(company.name)		
			.attr('class', 'p2');
        svg.append('text')
            .attr('x', xPos + 20)
            .attr('y', yPos + 25)
            .text(Math.round((parseInt(company.malePopulation) / parseInt(company.totalPopulation)) * 100) + '%')		
			.attr('class', 'p2');
    }
}

function drawRectangle2(xPos, yPos, company, gender, race) {
    var svg = d3.select('#svgCanvas');
    svg.append('rect')
        .attr('x', xPos)
        .attr('y', yPos + 30)
        .attr('width', 100)
        .attr('height', 100)
        .attr('fill', 'rgb(33,33,33)')
        .attr('stroke-width', '3')
        .attr('stroke', 'rgb(255,255,255)');
        svg.append('text')
        .attr('x', xPos + 40)
        .attr('y', yPos + 150)
        .text(company.name)
   		.attr('class', 'p2');
    if (gender == 'female') {
        svg.append('rect')
            .attr('x', xPos)
            .attr('y', yPos + 30)
            .attr('width', parseInt((parseInt(company.femalePopulation) / parseInt(company.totalPopulation)) * 100))
            .attr('height', 100)
            .attr('style', 'fill:rgb(33,33,33)')
            .attr('stroke',  'rgb(255,255,255)')
            .attr('stroke-width', '1');
        console.log(company.name);
        var femaleWhiteHeight = Math.round((parseInt(company.femaleWhite) / parseInt(company.femalePopulation) * 100));
        console.log('femaleWhiteHeight:' + femaleWhiteHeight + ',' + (parseInt(company.femaleWhite) / parseInt(company.femalePopulation)) * 100 );
        var femaleAsianHeight = Math.round((parseInt(company.femaleAsian) / parseInt(company.femalePopulation)) * 100) + femaleWhiteHeight;
        console.log('femaleAsianHeight:'+femaleAsianHeight +' '+ (parseInt(company.femaleAsian) / parseInt(company.femalePopulation)) * 100);
        var femaleAfricanHeight = Math.round((parseInt(company.femaleAfrican) / parseInt(company.femalePopulation)) * 100) + femaleAsianHeight;
        console.log('femaleAfricanHeight'+femaleAfricanHeight+' '+ (parseInt(company.femaleAfrican) / parseInt(company.femalePopulation)) * 100);
        var femaleHispanicHeight = Math.round((parseInt(company.femaleHispanic) / parseInt(company.femalePopulation)) * 100) + femaleAfricanHeight;
        console.log('femaleHispanicHeight' + femaleHispanicHeight + ' ' + (parseInt(company.femaleHispanic) / parseInt(company.femalePopulation)) * 100);
        var femaleMinorityHeight = Math.round((parseInt(company.femaleMinority) / parseInt(company.femalePopulation)) * 100) + femaleHispanicHeight;
        console.log("femaleMinorityHeight:" +femaleMinorityHeight + ' '+ (parseInt(company.femaleMinority) / parseInt(company.femalePopulation)) * 100);
        var femaleWidth = Math.round((parseInt(company.femalePopulation) / parseInt(company.totalPopulation)) * 100);
        svg.append('line')
            .attr('x1', xPos)
            .attr('y1', yPos + 30 + femaleWhiteHeight)
            .attr('x2', xPos + femaleWidth)
            .attr('y2', yPos + 30 + femaleWhiteHeight)
            .attr('stroke', 'rgb(255,255,255)')
            .attr('stroke-width', '1');
        svg.append('line')
            .attr('x1', xPos)
            .attr('y1', yPos + 30 + femaleAsianHeight)
            .attr('x2', xPos + femaleWidth)
            .attr('y2', yPos + 30 + femaleAsianHeight)
            .attr('stroke', 'rgb(255,255,255)')
            .attr('stroke-width', '1');
        svg.append('line')
            .attr('x1', xPos)
            .attr('y1', yPos + 30 + femaleAfricanHeight)
            .attr('x2', xPos + femaleWidth)
            .attr('y2', yPos + 30 + femaleAfricanHeight)
            .attr('stroke', 'rgb(255,255,255)')
            .attr('stroke-width', '1');
        svg.append('line')
            .attr('x1', xPos)
            .attr('y1', yPos + 30 + femaleHispanicHeight)
            .attr('x2', xPos + femaleWidth)
            .attr('y2', yPos + 30 + femaleHispanicHeight)
            .attr('stroke', 'rgb(255,255,255)')
            .attr('stroke-width', '1');
        svg.append('line')
            .attr('x1', xPos)
            .attr('y1', yPos + 30 + femaleMinorityHeight)
            .attr('x2', xPos + femaleWidth)
            .attr('y2', yPos + 30 + femaleMinorityHeight)
            .attr('stroke', 'rgb(255,255,255)')
            .attr('stroke-width', '1');

        if (race == 'white') {
            console.log('white');
            svg.append('text')
                .attr('x', xPos + 20)
                .attr('y', yPos + 25)
                .text(parseInt((parseInt(company.femaleWhite) / parseInt(company.totalPopulation)) * 100) + '%')
                .attr('class', 'p2');
            svg.append('rect')
                .attr('x', xPos)
                .attr('y', yPos + 30)
                .attr('width', femaleWidth)
                .attr('height', femaleWhiteHeight)
                .attr('style', 'fill:rgb(255,255,255)');
        }
        if (race == 'asian') {
            console.log('asian');
            svg.append('text')
                .attr('x', xPos + 20)
                .attr('y', yPos + 25)
                .text(parseInt((parseInt(company.femaleAsian) / parseInt(company.totalPopulation)) * 100) + '%')
                .attr('class', 'p2');
            svg.append('rect')
                .attr('x', xPos)
                .attr('y', yPos + femaleWhiteHeight + 30)
                .attr('width', femaleWidth)
                .attr('height', femaleAsianHeight - femaleWhiteHeight)
                .attr('style', 'fill:rgb(255,255,255)');
        }
        if (race == 'african') {
            console.log('african');
            svg.append('text')
                .attr('x', xPos + 20)
                .attr('y', yPos + 25)
                .text(parseInt((parseInt(company.femaleAfrican) / parseInt(company.totalPopulation)) * 100) + '%')
                .attr('class', 'p2');
            svg.append('rect')
                .attr('x', xPos)
                .attr('y', yPos + femaleAsianHeight + 30)
                .attr('width', femaleWidth)
                .attr('height', femaleAfricanHeight - femaleAsianHeight)
                .attr('style', 'fill:rgb(255,255,255)');
        }
        if (race == 'hispanic') {
            console.log('hispanic');
            svg.append('text')
                .attr('x', xPos + 20)
                .attr('y', yPos + 25)
                .text(parseInt((parseInt(company.femaleHispanic) / parseInt(company.totalPopulation)) * 100) + '%')
                .attr('class', 'p2');
            svg.append('rect')
                .attr('x', xPos)
                .attr('y', yPos + femaleAfricanHeight + 30)
                .attr('width', femaleWidth)
                .attr('height', femaleHispanicHeight - femaleAfricanHeight )
                .attr('style', 'fill:rgb(255,255,255)');
        }
        if (race == 'minority') {
            console.log('minority');
            svg.append('text')
                .attr('x', xPos + 20)
                .attr('y', yPos + 25)
                .text(parseInt((parseInt(company.femaleMinority) / parseInt(company.totalPopulation)) * 100) + '%')		
				.attr('class', 'p2');
            svg.append('rect')
                .attr('x', xPos)
                .attr('y', yPos + femaleHispanicHeight + 30)
                .attr('width', femaleWidth)
                .attr('height', 100 - femaleHispanicHeight)
                .attr('style', 'fill:rgb(255,255,255)');
        }

    }
    if (gender == 'male') {
        svg.append('rect')
            .attr('x', xPos)
            .attr('y', yPos + 30)
            .attr('width', parseInt((parseInt(company.malePopulation) / parseInt(company.totalPopulation)) * 100))
            .attr('height', 100)
            .attr('style', 'fill:rgb(33,33,33)')
            .attr('stroke', 'rgb(255,255,255)')
            .attr('stroke-width', '1');
        console.log(company.name);
        var maleWhiteHeight = Math.round((parseInt(company.maleWhite) / parseInt(company.malePopulation) * 100));
        console.log('maleWhiteHeight:' + maleWhiteHeight + ',' + (parseInt(company.maleWhite) / parseInt(company.malePopulation)) * 100);
        var maleAsianHeight = Math.round((parseInt(company.maleAsian) / parseInt(company.malePopulation)) * 100) + maleWhiteHeight;
        console.log('maleAsianHeight:' + maleAsianHeight + ' ' + (parseInt(company.maleAsian) / parseInt(company.malePopulation)) * 100);
        var maleAfricanHeight = Math.round((parseInt(company.maleAfrican) / parseInt(company.malePopulation)) * 100) + maleAsianHeight;
        console.log('maleAfricanHeight' + maleAfricanHeight + ' ' + (parseInt(company.maleAfrican) / parseInt(company.malePopulation)) * 100);
        var maleHispanicHeight = Math.round((parseInt(company.maleHispanic) / parseInt(company.malePopulation)) * 100) + maleAfricanHeight;
        console.log('maleHispanicHeight' + maleHispanicHeight + ' ' + (parseInt(company.maleHispanic) / parseInt(company.malePopulation)) * 100);
        var maleMinorityHeight = Math.round((parseInt(company.maleMinority) / parseInt(company.malePopulation)) * 100) + maleHispanicHeight;
        console.log("maleMinorityHeight:" + maleMinorityHeight + ' ' + (parseInt(company.maleMinority) / parseInt(company.malePopulation)) * 100);
        var maleWidth = Math.round((parseInt(company.malePopulation) / parseInt(company.totalPopulation)) * 100);
        svg.append('line')
            .attr('x1', xPos)
            .attr('y1', yPos + 30 + maleWhiteHeight)
            .attr('x2', xPos + maleWidth)
            .attr('y2', yPos + 30 + maleWhiteHeight)
            .attr('stroke', 'rgb(255,255,255)')
            .attr('stroke-width', '1');
        svg.append('line')
            .attr('x1', xPos)
            .attr('y1', yPos + 30 + maleAsianHeight)
            .attr('x2', xPos + maleWidth)
            .attr('y2', yPos + 30 + maleAsianHeight)
            .attr('stroke', 'rgb(255,255,255)')
            .attr('stroke-width', '1');
        svg.append('line')
            .attr('x1', xPos)
            .attr('y1', yPos + 30 + maleAfricanHeight)
            .attr('x2', xPos + maleWidth)
            .attr('y2', yPos + 30 + maleAfricanHeight)
            .attr('stroke', 'rgb(255,255,255)')
            .attr('stroke-width', '1');
        svg.append('line')
            .attr('x1', xPos)
            .attr('y1', yPos + 30 + maleHispanicHeight)
            .attr('x2', xPos + maleWidth)
            .attr('y2', yPos + 30 + maleHispanicHeight)
            .attr('stroke', 'rgb(255,255,255)')
            .attr('stroke-width', '1');
        svg.append('line')
            .attr('x1', xPos)
            .attr('y1', yPos + 30 + maleMinorityHeight)
            .attr('x2', xPos + maleWidth)
            .attr('y2', yPos + 30 + maleMinorityHeight)
            .attr('stroke', 'rgb(255,255,255)')
            .attr('stroke-width', '1');

        if (race == 'white') {
            console.log('white');
            svg.append('text')
                .attr('x', xPos + 20)
                .attr('y', yPos + 25)
                .text(parseInt((parseInt(company.maleWhite) / parseInt(company.totalPopulation)) * 100) + '%')	
				.attr('class', 'p2');
            svg.append('rect')
                .attr('x', xPos)
                .attr('y', yPos + 30)
                .attr('width', maleWidth)
                .attr('height', maleWhiteHeight)
                .attr('style', 'fill:rgb(255,255,255)');
        }
        if (race == 'asian') {
            console.log('asian');
            svg.append('text')
                .attr('x', xPos)
                .attr('y', yPos + 25)
                .text(parseInt((parseInt(company.maleAsian) / parseInt(company.totalPopulation)) * 100) + '%')
                .attr('stroke', 'rgb(255,255,255)');
            svg.append('rect')
                .attr('x', xPos)
                .attr('y', yPos + maleWhiteHeight + 30)
                .attr('width', maleWidth)
                .attr('height', maleAsianHeight - maleWhiteHeight)
                .attr('style', 'fill:rgb(255,255,255)');
        }
        if (race == 'african') {
            console.log('african');
            svg.append('text')
                .attr('x', xPos + 20)
                .attr('y', yPos + 25)
                .text(parseInt((parseInt(company.maleAfrican) / parseInt(company.totalPopulation)) * 100) + '%')
                .attr('class', 'p2');
            svg.append('rect')
                .attr('x', xPos)
                .attr('y', yPos + maleAsianHeight + 30)
                .attr('width', maleWidth)
                .attr('height', maleAfricanHeight - maleAsianHeight)
                .attr('style', 'fill:rgb(255,255,255)');
        }
        if (race == 'hispanic') {
            console.log('hispanic');
            svg.append('text')
                .attr('x', xPos + 20)
                .attr('y', yPos + 25)
                .text(parseInt((parseInt(company.maleHispanic) / parseInt(company.totalPopulation)) * 100) + '%')
               	.attr('class', 'p2');
            svg.append('rect')
                .attr('x', xPos)
                .attr('y', yPos + maleAfricanHeight + 30)
                .attr('width', maleWidth)
                .attr('height', maleHispanicHeight - maleAfricanHeight)
                .attr('style', 'fill:rgb(255,255,255)');
        }
        if (race == 'minority') {
            console.log('minority');
            svg.append('text')
                .attr('x', xPos + 20)
                .attr('y', yPos + 25)
                .text(parseInt((parseInt(company.maleMinority) / parseInt(company.totalPopulation)) * 100) + '%')
                .attr('class', 'p2');
            svg.append('rect')
                .attr('x', xPos)
                .attr('y', yPos + maleHispanicHeight + 30)
                .attr('width', maleWidth)
                .attr('height', 100 - maleHispanicHeight)
                .attr('style', 'fill:rgb(255,255,255)');
        }
    }
}

function genderChange() {
    //clear canvas
    var myNode = document.getElementById("svgCanvas");
    document.getElementById("sortCheckBox").checked = false;
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    if (thisState == 10) {
        var curGender = document.getElementById('selection1').selectedIndex;
        if (curGender == '0') {
            for (var i = 0; i < companyObjectList.length; i++) {
                drawRectangle1((i % 8) * 120, parseInt(i / 8) * 180, companyObjectList[i], 'female');
            }
        }
        if (curGender == '1'){
            for (var i = 0; i < companyObjectList.length; i++) {
                drawRectangle1((i % 8) * 120, parseInt(i / 8) * 180, companyObjectList[i], 'male');
            }
        }
    }
    if (thisState == 11) {
		var curGender = document.getElementById('selection3').selectedIndex;
        var curRaceIndex = document.getElementById('selection2').selectedIndex;
        var curRace;
        if (curRaceIndex == 0) {curRace = 'white';}
        if (curRaceIndex == 1) {curRace = 'asian';}
        if (curRaceIndex == 2) {curRace = 'african';}
        if (curRaceIndex == 3) {curRace = 'hispanic';}
        if (curRaceIndex == 4) {curRace = 'minority';}

		console.log(curGender)
        if (curGender == '0') {
            for (var i = 0; i < companyObjectList.length; i++) {
                drawRectangle2((i % 8) * 120, parseInt(i / 8) * 180, companyObjectList[i], 'female', curRace);
            }
        }
        if (curGender == '1'){
            for (var i = 0; i < companyObjectList.length; i++) {
                drawRectangle2((i % 8) * 120, parseInt(i / 8) * 180, companyObjectList[i], 'male', curRace);
            }
        }
    }
}

function sortDisplay(checkbox) {
    if (checkbox.checked) {
        var myNode = document.getElementById("svgCanvas");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
        if (thisState == '10') {
            var selectionIndex = document.getElementById('selection1').selectedIndex;
            if (selectionIndex == 0) {//female case
                for (var i = 0; i < companySortFemale.length; i++) {
                    drawRectangle1((i % 8) * 120, parseInt(i / 8) * 180, companySortFemale[i], 'female');
                }
            }
            if (selectionIndex == 1) {
                for (var i = (companySortFemale.length - 1); i >= 0; i--) {
                    drawRectangle1((i % 8) * 120, parseInt(i / 8) * 180, companySortFemale[companySortFemale.length - i - 1], 'male');
                }
            }
        }
        if (thisState == '11') {
            var selection1Index = document.getElementById('selection1').selectedIndex;
            var selection2Value = document.getElementById('selection2').value;
            if (selection1Index == 0) {//female case
                if (selection2Value == 'white') {
                    for (var i = (companySortFemaleWhite.length - 1); i >= 0; i--) {
                        drawRectangle2((i % 8) * 120, parseInt(i / 8) * 180, companySortFemaleWhite[i], 'female', selection2Value);
                    }
                }
                if (selection2Value == 'asian') {
                    for (var i = (companySortFemaleAsian.length - 1); i >= 0; i--) {
                        drawRectangle2((i % 8) * 120, parseInt(i / 8) * 180, companySortFemaleAsian[i], 'female', selection2Value);
                    }
                }
                if (selection2Value == 'african') {
                    for (var i = (companySortFemaleAfrican.length - 1); i >= 0; i--) {
                        drawRectangle2((i % 8) * 120, parseInt(i / 8) * 180, companySortFemaleAfrican[i], 'female', selection2Value);
                    }
                }
                if(selection2Value == 'hispanic') {
                    for (var i = (companySortFemaleHispanic.length - 1); i >= 0; i--) {
                        drawRectangle2((i % 8) * 120, parseInt(i / 8) * 180, companySortFemaleHispanic[i], 'female', selection2Value);
                    }
                }
                if(selection2Value == 'minority') {
                    for (var i = (companySortFemaleMinority.length - 1); i >= 0; i--) {
                        drawRectangle2((i % 8) * 120, parseInt(i / 8) * 180, companySortFemaleMinority[i], 'female', selection2Value);
                    }
                }

            } else { //male case
                var selection1Index = document.getElementById('selection1').selectedIndex;
                var selection2Value = document.getElementById('selection2').value;
                if (selection1Index == 0) {//female case
                    if (selection2Value == 'white') {
                        for (var i = (companySortFemaleWhite.length - 1); i >= 0; i--) {
                            drawRectangle2((i % 8) * 120, parseInt(i / 8) * 180, companySortFemaleWhite[i], 'female', selection2Value);
                        }
                    }
                    if (selection2Value == 'asian') {
                        for (var i = (companySortFemaleAsian.length - 1); i >= 0; i--) {
                            drawRectangle2((i % 8) * 120, parseInt(i / 8) * 180, companySortFemaleAsian[i], 'female', selection2Value);
                        }
                    }
                    if (selection2Value == 'african') {
                        for (var i = (companySortFemaleAfrican.length - 1); i >= 0; i--) {
                            drawRectangle2((i % 8) * 120, parseInt(i / 8) * 180, companySortFemaleAfrican[i], 'female', selection2Value);
                        }
                    }
                    if(selection2Value == 'hispanic') {
                        for (var i = (companySortFemaleHispanic.length - 1); i >= 0; i--) {
                            drawRectangle2((i % 8) * 120, parseInt(i / 8) * 180, companySortFemaleHispanic[i], 'female', selection2Value);
                        }
                    }
                    if(selection2Value == 'minority') {
                        for (var i = (companySortFemaleMinority.length - 1); i >= 0; i--) {
                            drawRectangle2((i % 8) * 120, parseInt(i / 8) * 180, companySortFemaleMinority[i], 'female', selection2Value);
                        }
                    }

                } else {
                    if (selection2Value == 'white') {
                        for (var i = (companySortMaleWhite.length - 1); i >= 0; i--) {
                            drawRectangle2((i % 8) * 120, parseInt(i / 8) * 180, companySortMaleWhite[i], 'male', selection2Value);
                        }
                    }
                    if (selection2Value == 'asian') {
                        for (var i = (companySortMaleAsian.length - 1); i >= 0; i--) {
                            drawRectangle2((i % 8) * 120, parseInt(i / 8) * 180, companySortMaleAsian[i], 'male', selection2Value);
                        }
                    }
                    if (selection2Value == 'african') {
                        for (var i = (companySortMaleAfrican.length - 1); i >= 0; i--) {
                            drawRectangle2((i % 8) * 120, parseInt(i / 8) * 180, companySortMaleAfrican[i], 'male', selection2Value);
                        }
                    }
                    if(selection2Value == 'hispanic') {
                        for (var i = (companySortMaleHispanic.length - 1); i >= 0; i--) {
                            drawRectangle2((i % 8) * 120, parseInt(i / 8) * 180, companySortMaleHispanic[i], 'male', selection2Value);
                        }
                    }
                    if(selection2Value == 'minority') {
                        for (var i = (companySortMaleMinority.length - 1); i >= 0; i--) {
                            drawRectangle2((i % 8) * 120, parseInt(i / 8) * 180, companySortMaleMinority[i], 'male', selection2Value);
                        }
                    }
                }
            }
        }
    } else {
         if (thisState == 10) {
            graphic10();
        } else {
            graphic11();
        } 
    }
}

//function to trigger the new vis state
function scrollChange(){
	var docScroll = document.documentElement.scrollTop;
	var view = document.getElementById("d3Stuff");
	var divHeight = 1.5*view.clientHeight;
	var screenHeight = window.innerHeight;
	var triggerline = screenHeight*.5;


	view.className =  "part0"
	thisState = 0;
	
	if(document.getElementById("part_1_text").offsetTop - docScroll < triggerline)
	{
		view.className = "part1";
		thisState = 1;
	}
	if(document.getElementById("part_2_text").offsetTop - docScroll < triggerline)
	{
		view.className = "part2";
		thisState = 2;
	}
	if(document.getElementById("part_3_text").offsetTop - docScroll < triggerline)
	{
		view.className = "part3";
		thisState = 3;
	}
	if(document.getElementById("part_4_text").offsetTop - docScroll < triggerline*1.5)
	{
		view.className = "part4";
		thisState = 4;
	}
	if(document.getElementById("part_5_text").offsetTop - docScroll < triggerline)
	{
		view.className = "part5";
		thisState = 5;
	}
	if(document.getElementById("part_6_text").offsetTop - docScroll < triggerline)
	{
		view.className = "part6";
		thisState = 6;
	}
	if(document.getElementById("part_6_test").offsetTop - docScroll < triggerline*3 && thisState > 5)
	{
		view.className = "part7";
		thisState = 7;
	}
	if(document.getElementById("part_7_text").offsetTop - docScroll < triggerline*1.8)
	{
		view.className = "part8";
		thisState = 8;
	}
	if(document.getElementById("part1-2").offsetTop - docScroll < triggerline/2)
	{
		view.className = "part9";
		thisState = 9;
	}
	if(document.getElementById("part_7_text").offsetTop - docScroll < -4*triggerline)
	{
		view.className = "part10";
		thisState = 10;
	}
	if(document.getElementById("part_7_text").offsetTop - docScroll < -6*triggerline)
	{
		view.className = "part11";
		thisState = 11;
		document.getElementById('sortCheckBox').checked = false;
	}
	if(document.getElementById("part_7_text").offsetTop - docScroll < -8*triggerline)
	{
		view.className = "part12";
		thisState = 12;
		document.getElementById('sortCheckBox').checked = false;
	}
	
	//saving time by only triggering the event when the state changes
	if(lastState != thisState && loaded == 1){
		lastState = thisState;
		update();
		console.log(thisState);
	}
}




