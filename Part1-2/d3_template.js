

//var divWidth = document.querySelector('div').clientWidth;
//var divHeight = document.querySelector('div').clientHeight;

window.addEventListener("scroll",scrollChange);

var jobTitleArray; //list of jobs titles that are option
var raceArray; //list of possible races
var genderArray;// list of possible genders

var dotCount; //a count of every combination of people
//so executiveWhiteMaleCount = N
//or dotCount[‘executive’[‘white’[‘male’]]] = 32;
//makes as many dots as appropriate after iterating through each layer

var  managerPercent;
var  executivePercent;
var  professionalPercent;
var  otherWorker;
//just sum up everything from Stella’s dataset

var  managerNum;
var  executiveNum;
var  professionalNum;
var  otherNum;
//just sum up everything from Stella’s dataset

var companyList;
var companyGenderTotals; //total company population organized by company name
var totalPopulationNum; //sum of the above


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


//more useful vars
var lastState = -1;
var thisState = 0;
var loaded = 0;

var companyGenderTotals = [];
var boxLength = 70;
var spacing = 20;
var boxOutline = 1;
var boxOutlineColor = d3.rgb(0,0,0);
var boxFillColor1 = d3.rgb(0,0,0);
var boxFillColor2 = d3.rgb(30,76, 97);
var boxFillColor3 = d3.rgb(0,0,0);

var strokeColorDark = d3.rgb(0,0,0);
var strokeColorLight = d3.rgb(255,255,255);


var boxTextOffset = boxLength + 14;


//creating the different SVGs vars that are used in the top half
var noFilter = d3.select('svg#noFilter');
var ethnicity1 = d3.select('svg#ethnicity1');
var position1 = d3.select('svg#position1');
var allScaled = d3.select('svg#allScaled');
var scaledCombined = d3.select('svg#scaledCombined');

//the datum values that will hold all the d3 pulled data
var companyDetailed;
//cols -> company	year	race	gender	job_category	count
//cols -> company

//My global variable go here

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
//giant function for loading all the d3 stuff
d3.csv('dataset_split.csv', function(error, datum){
    if(error) {
        console.error('Error loading companyDetailed.csv dataset.');
        console.error(error);
        return;
    }
	//setting up the html stuff

	//the datum values that will hold all the d3 pulled data
	companyDetailed = datum;
	//cols -> company	year	race	gender	job_category	count
	//companyList = datum2;
	//cols -> company


	//create an array of companies and their totals, because that doesn't exist...
	//should turn this into the same format as the csv arrays at some point.
	// companyList.forEach(d =>{
	// 	var tempTotal = 0;
	// 	companyDetailed.forEach(d2 => {
	// 		if(d2['company'] == d['company'] && d2['job_category'] == "Totals")
	// 			tempTotal += +d2['count'];
	// 		});
	// 	var temp = d['company'];
	// 	companyGenderTotals.push({"company" : temp , "total" : tempTotal});
	// 	});

	scrollChange();
	update();

});	
			

//update function is mostly a state machine handler
function update(){
	var temp = document.getElementById("part1-2").className;
	if(temp =="part0")
		state0();
	if(temp =="part1")
		state1();
	if(temp =="part2")
		state2();
	loaded = 1; //flag to start u
}

function state0()
{
    document.getElementById("selection1").style.visibility = 'hidden';
    document.getElementById("selection2").style.visibility = 'hidden';
    document.getElementById('checkbox').style.visibility = 'hidden';
    document.getElementById("part1-2").style.position = "fixed";
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
    graphics('0');
}

function state1()
{
    document.getElementById("part1-2").style.position = "fixed";
    document.getElementById("part1-2").style.top = "0";
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
    }
    graphics('1');

}
function state2(){
    //first, the html stuff
    document.getElementById("part1-2").style.position = "fixed";
    document.getElementById("header1").innerHTML = "Among all the";
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
    }
    graphics('2');
}
function graphics(state)
{
    d3.csv('dataset_split.csv', function(error, datum){
        if(error) {
            console.error('Error loading companyDetailed.csv dataset.');
            console.error(error);
            return;
        }
        dataset = datum;
        for (var i = 0; i < companyObjectList.length; i++) {
            calculateCompanyInfo(companyObjectList[i], datum);
        }
        if (state === '0') {
            for (var i = 0; i < companyObjectList.length; i++) {
                drawRectangle0((i % 8) * 120, parseInt(i / 8) * 180, companyObjectList[i]);
            }
        }
        if (state === '1') {
            for (var i = 0; i < companyObjectList.length; i++) {
                drawRectangle1((i % 8) * 120, parseInt(i / 8) * 180, companyObjectList[i], 'female');
            }
        }
        if (state === '2') {
            for (var i = 0; i < companyObjectList.length; i++) {
                drawRectangle2((i % 8) * 120, parseInt(i / 8) * 180, companyObjectList[i], 'female', 'white');
            }
        }

    });
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
	// console.log(company);
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
		.attr('stroke', 'rgb(255,255,255)');
	svg.append('text')
		.attr('x', xPos + 30)
		.attr('y', yPos + 120)
		.text(company.name)
		.attr('stroke', 'rgb(255,255,255)');
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
            .attr('x', xPos + 30)
            .attr('y', yPos + 150)
            .text(company.name)
            .attr('stroke', 'rgb(255,255,255)');
        svg.append('text')
            .attr('x', xPos)
            .attr('y', yPos + 25)
            .text(Math.round((parseInt(company.femalePopulation) / parseInt(company.totalPopulation)) * 100) + '%')
            .attr('stroke', 'rgb(255,255,255)');
    }
    if (gender == 'male') {
        svg.append('rect')
            .attr('x', xPos)
            .attr('y', yPos + 30)
            .attr('width', Math.round((parseInt(company.malePopulation) / parseInt(company.totalPopulation)) * 100))
            .attr('height', 100)
            .attr('style', 'fill:rgb(255,255,255)');
        svg.append('text')
            .attr('x', xPos + 30)
            .attr('y', yPos + 150)
            .text(company.name)
            .attr('stroke', 'rgb(255,255,255)');
        svg.append('text')
            .attr('x', xPos)
            .attr('y', yPos + 25)
            .text(Math.round((parseInt(company.malePopulation) / parseInt(company.totalPopulation)) * 100) + '%')
            .attr('stroke', 'rgb(255,255,255)');
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
        .attr('x', xPos + 30)
        .attr('y', yPos + 150)
        .text(company.name)
            .attr('stroke', 'rgb(255,255,255)');
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
                .attr('x', xPos)
                .attr('y', yPos + 25)
                .text(parseInt((parseInt(company.femaleWhite) / parseInt(company.totalPopulation)) * 100) + '%')
                .attr('stroke', 'rgb(255,255,255)');
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
                .attr('x', xPos)
                .attr('y', yPos + 25)
                .text(parseInt((parseInt(company.femaleAsian) / parseInt(company.totalPopulation)) * 100) + '%')
                .attr('stroke', 'rgb(255,255,255)');
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
                .attr('x', xPos)
                .attr('y', yPos + 25)
                .text(parseInt((parseInt(company.femaleAfrican) / parseInt(company.totalPopulation)) * 100) + '%')
                .attr('stroke', 'rgb(255,255,255)');
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
                .attr('x', xPos)
                .attr('y', yPos + 25)
                .text(parseInt((parseInt(company.femaleHispanic) / parseInt(company.totalPopulation)) * 100) + '%')
                .attr('stroke', 'rgb(255,255,255)');
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
                .attr('x', xPos)
                .attr('y', yPos + 25)
                .text(parseInt((parseInt(company.femaleMinority) / parseInt(company.totalPopulation)) * 100) + '%')
                .attr('stroke', 'rgb(255,255,255)');
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
                .attr('x', xPos)
                .attr('y', yPos + 25)
                .text(parseInt((parseInt(company.maleWhite) / parseInt(company.totalPopulation)) * 100) + '%')
                .attr('stroke', 'rgb(255,255,255)');
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
                .attr('x', xPos)
                .attr('y', yPos + 25)
                .text(parseInt((parseInt(company.maleAfrican) / parseInt(company.totalPopulation)) * 100) + '%')
                .attr('stroke', 'rgb(255,255,255)');
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
                .attr('x', xPos)
                .attr('y', yPos + 25)
                .text(parseInt((parseInt(company.maleHispanic) / parseInt(company.totalPopulation)) * 100) + '%')
                .attr('stroke', 'rgb(255,255,255)');
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
                .attr('x', xPos)
                .attr('y', yPos + 25)
                .text(parseInt((parseInt(company.maleMinority) / parseInt(company.totalPopulation)) * 100) + '%')
                .attr('stroke', 'rgb(255,255,255)');
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
    console.log(thisState);
    if (thisState == '1') {
        var curGender = document.getElementById('selection1').selectedIndex;
        console.log(curGender);
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
    if (thisState == '2') {
        var curGender = document.getElementById('selection1').selectedIndex;
        var curRaceIndex = document.getElementById('selection2').selectedIndex;
        var curRace;
        if (curRaceIndex == 0) {curRace = 'white';}
        if (curRaceIndex == 1) {curRace = 'asian';}
        if (curRaceIndex == 2) {curRace = 'african';}
        if (curRaceIndex == 3) {curRace = 'hispanic';}
        if (curRaceIndex == 4) {curRace = 'minority';}

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
        if (thisState == '1') {
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
        if (thisState == '2') {
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
        if (thisState == '1') {
            state1();
        } else {
            state2();
        }
    }

}

//function to trigger the new vis state
function scrollChange(){
	var doc = document.documentElement;
	var view = document.getElementById("part1-2");
	console.log('scropTop is:'+doc.scrollTop);
	//console.log(doc.scrollTop);
	if(doc.scrollTop < 500)
	{
		view.className =  "part0"
		thisState = 0;
	}
	if(doc.scrollTop >500)
	{
		view.className = "part1";
        document.getElementById('sortCheckBox').checked = false;
		thisState = 1;
	}
	if(doc.scrollTop > 900)
	{
		view.className = "part2";
        document.getElementById('sortCheckBox').checked = false;
		thisState = 2;
	}
	//saving time by only triggering the event when the state changes
	if(lastState != thisState && loaded == 1){
		lastState = thisState;
		update();
	}
	
}