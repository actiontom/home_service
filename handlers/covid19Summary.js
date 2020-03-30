const AccuWeather = require('../services/accuWeather');
const Covid19 = require('../services/covid19')


module.exports = {

    async covid19Summary(req){
       

        let covid = new Covid19();

        // let summary =  await covid.getCovid19Summary();

        // mock
        let summary = {
          "Countries": [
            {
              "Country": "",
              "Slug": "",
              "NewConfirmed": 0,
              "TotalConfirmed": 0,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": " Azerbaijan",
              "Slug": "-azerbaijan",
              "NewConfirmed": 0,
              "TotalConfirmed": 0,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Afghanistan",
              "Slug": "afghanistan",
              "NewConfirmed": 10,
              "TotalConfirmed": 120,
              "NewDeaths": 0,
              "TotalDeaths": 4,
              "NewRecovered": 0,
              "TotalRecovered": 2
            },
            {
              "Country": "Albania",
              "Slug": "albania",
              "NewConfirmed": 15,
              "TotalConfirmed": 212,
              "NewDeaths": 0,
              "TotalDeaths": 10,
              "NewRecovered": 2,
              "TotalRecovered": 33
            },
            {
              "Country": "Algeria",
              "Slug": "algeria",
              "NewConfirmed": 57,
              "TotalConfirmed": 511,
              "NewDeaths": 2,
              "TotalDeaths": 31,
              "NewRecovered": 0,
              "TotalRecovered": 31
            },
            {
              "Country": "Andorra",
              "Slug": "andorra",
              "NewConfirmed": 26,
              "TotalConfirmed": 334,
              "NewDeaths": 3,
              "TotalDeaths": 6,
              "NewRecovered": 0,
              "TotalRecovered": 1
            },
            {
              "Country": "Angola",
              "Slug": "angola",
              "NewConfirmed": 2,
              "TotalConfirmed": 7,
              "NewDeaths": 2,
              "TotalDeaths": 2,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Antigua and Barbuda",
              "Slug": "antigua-and-barbuda",
              "NewConfirmed": 0,
              "TotalConfirmed": 7,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Argentina",
              "Slug": "argentina",
              "NewConfirmed": 55,
              "TotalConfirmed": 745,
              "NewDeaths": 1,
              "TotalDeaths": 19,
              "NewRecovered": 0,
              "TotalRecovered": 72
            },
            {
              "Country": "Armenia",
              "Slug": "armenia",
              "NewConfirmed": 17,
              "TotalConfirmed": 424,
              "NewDeaths": 2,
              "TotalDeaths": 3,
              "NewRecovered": 0,
              "TotalRecovered": 30
            },
            {
              "Country": "Aruba",
              "Slug": "aruba",
              "NewConfirmed": 0,
              "TotalConfirmed": 4,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Australia",
              "Slug": "australia",
              "NewConfirmed": 344,
              "TotalConfirmed": 3984,
              "NewDeaths": 2,
              "TotalDeaths": 16,
              "NewRecovered": 0,
              "TotalRecovered": 244
            },
            {
              "Country": "Austria",
              "Slug": "austria",
              "NewConfirmed": 517,
              "TotalConfirmed": 8788,
              "NewDeaths": 18,
              "TotalDeaths": 86,
              "NewRecovered": 254,
              "TotalRecovered": 479
            },
            {
              "Country": "Azerbaijan",
              "Slug": "azerbaijan",
              "NewConfirmed": 27,
              "TotalConfirmed": 209,
              "NewDeaths": 0,
              "TotalDeaths": 4,
              "NewRecovered": 0,
              "TotalRecovered": 15
            },
            {
              "Country": "Bahamas",
              "Slug": "bahamas",
              "NewConfirmed": 1,
              "TotalConfirmed": 11,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 1
            },
            {
              "Country": "Bahamas, The",
              "Slug": "bahamas-the",
              "NewConfirmed": 0,
              "TotalConfirmed": 4,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Bahrain",
              "Slug": "bahrain",
              "NewConfirmed": 23,
              "TotalConfirmed": 499,
              "NewDeaths": 0,
              "TotalDeaths": 4,
              "NewRecovered": 7,
              "TotalRecovered": 272
            },
            {
              "Country": "Bangladesh",
              "Slug": "bangladesh",
              "NewConfirmed": 0,
              "TotalConfirmed": 48,
              "NewDeaths": 0,
              "TotalDeaths": 5,
              "NewRecovered": 0,
              "TotalRecovered": 15
            },
            {
              "Country": "Barbados",
              "Slug": "barbados",
              "NewConfirmed": 7,
              "TotalConfirmed": 33,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Belarus",
              "Slug": "belarus",
              "NewConfirmed": 0,
              "TotalConfirmed": 94,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 32
            },
            {
              "Country": "Belgium",
              "Slug": "belgium",
              "NewConfirmed": 1702,
              "TotalConfirmed": 10836,
              "NewDeaths": 78,
              "TotalDeaths": 431,
              "NewRecovered": 296,
              "TotalRecovered": 1359
            },
            {
              "Country": "Belize",
              "Slug": "belize",
              "NewConfirmed": 0,
              "TotalConfirmed": 2,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Benin",
              "Slug": "benin",
              "NewConfirmed": 0,
              "TotalConfirmed": 6,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Bhutan",
              "Slug": "bhutan",
              "NewConfirmed": 1,
              "TotalConfirmed": 4,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Bolivia",
              "Slug": "bolivia",
              "NewConfirmed": 7,
              "TotalConfirmed": 81,
              "NewDeaths": 1,
              "TotalDeaths": 1,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Bosnia and Herzegovina",
              "Slug": "bosnia-and-herzegovina",
              "NewConfirmed": 65,
              "TotalConfirmed": 323,
              "NewDeaths": 1,
              "TotalDeaths": 6,
              "NewRecovered": 3,
              "TotalRecovered": 8
            },
            {
              "Country": "Brazil",
              "Slug": "brazil",
              "NewConfirmed": 352,
              "TotalConfirmed": 4256,
              "NewDeaths": 25,
              "TotalDeaths": 136,
              "NewRecovered": 0,
              "TotalRecovered": 6
            },
            {
              "Country": "Brunei",
              "Slug": "brunei",
              "NewConfirmed": 6,
              "TotalConfirmed": 126,
              "NewDeaths": 0,
              "TotalDeaths": 1,
              "NewRecovered": 9,
              "TotalRecovered": 34
            },
            {
              "Country": "Bulgaria",
              "Slug": "bulgaria",
              "NewConfirmed": 15,
              "TotalConfirmed": 346,
              "NewDeaths": 1,
              "TotalDeaths": 8,
              "NewRecovered": 3,
              "TotalRecovered": 14
            },
            {
              "Country": "Burkina Faso",
              "Slug": "burkina-faso",
              "NewConfirmed": 15,
              "TotalConfirmed": 222,
              "NewDeaths": 1,
              "TotalDeaths": 12,
              "NewRecovered": 2,
              "TotalRecovered": 23
            },
            {
              "Country": "Burma",
              "Slug": "burma",
              "NewConfirmed": 2,
              "TotalConfirmed": 10,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Cabo Verde",
              "Slug": "cabo-verde",
              "NewConfirmed": 1,
              "TotalConfirmed": 6,
              "NewDeaths": 0,
              "TotalDeaths": 1,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Cambodia",
              "Slug": "cambodia",
              "NewConfirmed": 4,
              "TotalConfirmed": 103,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 8,
              "TotalRecovered": 21
            },
            {
              "Country": "Cameroon",
              "Slug": "cameroon",
              "NewConfirmed": 48,
              "TotalConfirmed": 139,
              "NewDeaths": 4,
              "TotalDeaths": 6,
              "NewRecovered": 3,
              "TotalRecovered": 5
            },
            {
              "Country": "Canada",
              "Slug": "canada",
              "NewConfirmed": 704,
              "TotalConfirmed": 6280,
              "NewDeaths": 3,
              "TotalDeaths": 64,
              "NewRecovered": 0,
              "TotalRecovered": 466
            },
            {
              "Country": "Cape Verde",
              "Slug": "cape-verde",
              "NewConfirmed": 0,
              "TotalConfirmed": 0,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Cayman Islands",
              "Slug": "cayman-islands",
              "NewConfirmed": 0,
              "TotalConfirmed": 1,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Central African Republic",
              "Slug": "central-african-republic",
              "NewConfirmed": 0,
              "TotalConfirmed": 3,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Chad",
              "Slug": "chad",
              "NewConfirmed": 0,
              "TotalConfirmed": 3,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Channel Islands",
              "Slug": "channel-islands",
              "NewConfirmed": 0,
              "TotalConfirmed": 0,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Chile",
              "Slug": "chile",
              "NewConfirmed": 230,
              "TotalConfirmed": 2139,
              "NewDeaths": 1,
              "TotalDeaths": 7,
              "NewRecovered": 14,
              "TotalRecovered": 75
            },
            {
              "Country": "China",
              "Slug": "china",
              "NewConfirmed": 123,
              "TotalConfirmed": 82122,
              "NewDeaths": 5,
              "TotalDeaths": 3304,
              "NewRecovered": 482,
              "TotalRecovered": 75582
            },
            {
              "Country": "Colombia",
              "Slug": "colombia",
              "NewConfirmed": 94,
              "TotalConfirmed": 702,
              "NewDeaths": 4,
              "TotalDeaths": 10,
              "NewRecovered": 0,
              "TotalRecovered": 10
            },
            {
              "Country": "Congo (Brazzaville)",
              "Slug": "congo-(brazzaville)",
              "NewConfirmed": 15,
              "TotalConfirmed": 19,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Congo (Kinshasa)",
              "Slug": "congo-(kinshasa)",
              "NewConfirmed": 0,
              "TotalConfirmed": 65,
              "NewDeaths": 0,
              "TotalDeaths": 6,
              "NewRecovered": 0,
              "TotalRecovered": 2
            },
            {
              "Country": "Costa Rica",
              "Slug": "costa-rica",
              "NewConfirmed": 19,
              "TotalConfirmed": 314,
              "NewDeaths": 0,
              "TotalDeaths": 2,
              "NewRecovered": 0,
              "TotalRecovered": 3
            },
            {
              "Country": "Cote d'Ivoire",
              "Slug": "cote-divoire",
              "NewConfirmed": 64,
              "TotalConfirmed": 165,
              "NewDeaths": 1,
              "TotalDeaths": 1,
              "NewRecovered": 1,
              "TotalRecovered": 4
            },
            {
              "Country": "Croatia",
              "Slug": "croatia",
              "NewConfirmed": 56,
              "TotalConfirmed": 713,
              "NewDeaths": 1,
              "TotalDeaths": 6,
              "NewRecovered": 7,
              "TotalRecovered": 52
            },
            {
              "Country": "Cruise Ship",
              "Slug": "cruise-ship",
              "NewConfirmed": 0,
              "TotalConfirmed": 712,
              "NewDeaths": 0,
              "TotalDeaths": 8,
              "NewRecovered": 242,
              "TotalRecovered": 567
            },
            {
              "Country": "Cuba",
              "Slug": "cuba",
              "NewConfirmed": 20,
              "TotalConfirmed": 139,
              "NewDeaths": 0,
              "TotalDeaths": 3,
              "NewRecovered": 0,
              "TotalRecovered": 4
            },
            {
              "Country": "Curacao",
              "Slug": "curacao",
              "NewConfirmed": 0,
              "TotalConfirmed": 0,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Cyprus",
              "Slug": "cyprus",
              "NewConfirmed": 35,
              "TotalConfirmed": 214,
              "NewDeaths": 0,
              "TotalDeaths": 5,
              "NewRecovered": 0,
              "TotalRecovered": 15
            },
            {
              "Country": "Czechia",
              "Slug": "czechia",
              "NewConfirmed": 186,
              "TotalConfirmed": 2817,
              "NewDeaths": 5,
              "TotalDeaths": 16,
              "NewRecovered": 0,
              "TotalRecovered": 11
            },
            {
              "Country": "Denmark",
              "Slug": "denmark",
              "NewConfirmed": 198,
              "TotalConfirmed": 2564,
              "NewDeaths": 7,
              "TotalDeaths": 72,
              "NewRecovered": 16,
              "TotalRecovered": 73
            },
            {
              "Country": "Diamond Princess",
              "Slug": "diamond-princess",
              "NewConfirmed": 0,
              "TotalConfirmed": 712,
              "NewDeaths": 0,
              "TotalDeaths": 10,
              "NewRecovered": 6,
              "TotalRecovered": 603
            },
            {
              "Country": "Djibouti",
              "Slug": "djibouti",
              "NewConfirmed": 4,
              "TotalConfirmed": 18,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Dominica",
              "Slug": "dominica",
              "NewConfirmed": 0,
              "TotalConfirmed": 11,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Dominican Republic",
              "Slug": "dominican-republic",
              "NewConfirmed": 140,
              "TotalConfirmed": 859,
              "NewDeaths": 11,
              "TotalDeaths": 39,
              "NewRecovered": 0,
              "TotalRecovered": 3
            },
            {
              "Country": "East Timor",
              "Slug": "east-timor",
              "NewConfirmed": 0,
              "TotalConfirmed": 0,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Ecuador",
              "Slug": "ecuador",
              "NewConfirmed": 101,
              "TotalConfirmed": 1924,
              "NewDeaths": 10,
              "TotalDeaths": 58,
              "NewRecovered": 0,
              "TotalRecovered": 3
            },
            {
              "Country": "Egypt",
              "Slug": "egypt",
              "NewConfirmed": 33,
              "TotalConfirmed": 609,
              "NewDeaths": 4,
              "TotalDeaths": 40,
              "NewRecovered": 11,
              "TotalRecovered": 132
            },
            {
              "Country": "El Salvador",
              "Slug": "el-salvador",
              "NewConfirmed": 5,
              "TotalConfirmed": 24,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Equatorial Guinea",
              "Slug": "equatorial-guinea",
              "NewConfirmed": 0,
              "TotalConfirmed": 12,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Eritrea",
              "Slug": "eritrea",
              "NewConfirmed": 6,
              "TotalConfirmed": 12,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Estonia",
              "Slug": "estonia",
              "NewConfirmed": 34,
              "TotalConfirmed": 679,
              "NewDeaths": 2,
              "TotalDeaths": 3,
              "NewRecovered": 0,
              "TotalRecovered": 20
            },
            {
              "Country": "Eswatini",
              "Slug": "eswatini",
              "NewConfirmed": 0,
              "TotalConfirmed": 9,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Ethiopia",
              "Slug": "ethiopia",
              "NewConfirmed": 5,
              "TotalConfirmed": 21,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 1
            },
            {
              "Country": "Faroe Islands",
              "Slug": "faroe-islands",
              "NewConfirmed": 0,
              "TotalConfirmed": 2,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Fiji",
              "Slug": "fiji",
              "NewConfirmed": 0,
              "TotalConfirmed": 5,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Finland",
              "Slug": "finland",
              "NewConfirmed": 73,
              "TotalConfirmed": 1240,
              "NewDeaths": 2,
              "TotalDeaths": 11,
              "NewRecovered": 0,
              "TotalRecovered": 10
            },
            {
              "Country": "France",
              "Slug": "france",
              "NewConfirmed": 2603,
              "TotalConfirmed": 40708,
              "NewDeaths": 294,
              "TotalDeaths": 2611,
              "NewRecovered": 1502,
              "TotalRecovered": 7226
            },
            {
              "Country": "French Guiana",
              "Slug": "french-guiana",
              "NewConfirmed": 0,
              "TotalConfirmed": 18,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 6
            },
            {
              "Country": "Gabon",
              "Slug": "gabon",
              "NewConfirmed": 0,
              "TotalConfirmed": 7,
              "NewDeaths": 0,
              "TotalDeaths": 1,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Gambia",
              "Slug": "gambia",
              "NewConfirmed": 1,
              "TotalConfirmed": 4,
              "NewDeaths": 0,
              "TotalDeaths": 1,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Gambia, The",
              "Slug": "gambia-the",
              "NewConfirmed": 0,
              "TotalConfirmed": 1,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Georgia",
              "Slug": "georgia",
              "NewConfirmed": 1,
              "TotalConfirmed": 91,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 4,
              "TotalRecovered": 18
            },
            {
              "Country": "Germany",
              "Slug": "germany",
              "NewConfirmed": 4400,
              "TotalConfirmed": 62095,
              "NewDeaths": 100,
              "TotalDeaths": 533,
              "NewRecovered": 730,
              "TotalRecovered": 9211
            },
            {
              "Country": "Ghana",
              "Slug": "ghana",
              "NewConfirmed": 11,
              "TotalConfirmed": 152,
              "NewDeaths": 0,
              "TotalDeaths": 5,
              "NewRecovered": 0,
              "TotalRecovered": 2
            },
            {
              "Country": "Gibraltar",
              "Slug": "gibraltar",
              "NewConfirmed": 0,
              "TotalConfirmed": 1,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 1,
              "TotalRecovered": 1
            },
            {
              "Country": "Greece",
              "Slug": "greece",
              "NewConfirmed": 95,
              "TotalConfirmed": 1156,
              "NewDeaths": 6,
              "TotalDeaths": 38,
              "NewRecovered": 0,
              "TotalRecovered": 52
            },
            {
              "Country": "Greenland",
              "Slug": "greenland",
              "NewConfirmed": 0,
              "TotalConfirmed": 0,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Grenada",
              "Slug": "grenada",
              "NewConfirmed": 2,
              "TotalConfirmed": 9,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Guadeloupe",
              "Slug": "guadeloupe",
              "NewConfirmed": 3,
              "TotalConfirmed": 56,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Guam",
              "Slug": "guam",
              "NewConfirmed": 0,
              "TotalConfirmed": 0,
              "NewDeaths": 1,
              "TotalDeaths": 1,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Guatemala",
              "Slug": "guatemala",
              "NewConfirmed": 0,
              "TotalConfirmed": 34,
              "NewDeaths": 0,
              "TotalDeaths": 1,
              "NewRecovered": 0,
              "TotalRecovered": 10
            },
            {
              "Country": "Guernsey",
              "Slug": "guernsey",
              "NewConfirmed": 0,
              "TotalConfirmed": 0,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Guinea",
              "Slug": "guinea",
              "NewConfirmed": 8,
              "TotalConfirmed": 16,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Guinea-Bissau",
              "Slug": "guinea-bissau",
              "NewConfirmed": 0,
              "TotalConfirmed": 2,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Guyana",
              "Slug": "guyana",
              "NewConfirmed": 0,
              "TotalConfirmed": 8,
              "NewDeaths": 0,
              "TotalDeaths": 1,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Haiti",
              "Slug": "haiti",
              "NewConfirmed": 7,
              "TotalConfirmed": 15,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 1,
              "TotalRecovered": 1
            },
            {
              "Country": "Holy See",
              "Slug": "holy-see",
              "NewConfirmed": 0,
              "TotalConfirmed": 6,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Honduras",
              "Slug": "honduras",
              "NewConfirmed": 15,
              "TotalConfirmed": 110,
              "NewDeaths": 2,
              "TotalDeaths": 3,
              "NewRecovered": 0,
              "TotalRecovered": 3
            },
            {
              "Country": "Hong Kong",
              "Slug": "hong-kong",
              "NewConfirmed": 1,
              "TotalConfirmed": 115,
              "NewDeaths": 0,
              "TotalDeaths": 3,
              "NewRecovered": 1,
              "TotalRecovered": 59
            },
            {
              "Country": "Hong Kong SAR",
              "Slug": "hong-kong-sar",
              "NewConfirmed": 0,
              "TotalConfirmed": 0,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Hungary",
              "Slug": "hungary",
              "NewConfirmed": 65,
              "TotalConfirmed": 408,
              "NewDeaths": 2,
              "TotalDeaths": 13,
              "NewRecovered": 0,
              "TotalRecovered": 34
            },
            {
              "Country": "Iceland",
              "Slug": "iceland",
              "NewConfirmed": 57,
              "TotalConfirmed": 1020,
              "NewDeaths": 0,
              "TotalDeaths": 2,
              "NewRecovered": 21,
              "TotalRecovered": 135
            },
            {
              "Country": "India",
              "Slug": "india",
              "NewConfirmed": 37,
              "TotalConfirmed": 1024,
              "NewDeaths": 3,
              "TotalDeaths": 27,
              "NewRecovered": 11,
              "TotalRecovered": 95
            },
            {
              "Country": "Indonesia",
              "Slug": "indonesia",
              "NewConfirmed": 130,
              "TotalConfirmed": 1285,
              "NewDeaths": 12,
              "TotalDeaths": 114,
              "NewRecovered": 5,
              "TotalRecovered": 64
            },
            {
              "Country": "Iran",
              "Slug": "iran",
              "NewConfirmed": 2901,
              "TotalConfirmed": 38309,
              "NewDeaths": 123,
              "TotalDeaths": 2640,
              "NewRecovered": 712,
              "TotalRecovered": 12391
            },
            {
              "Country": "Iran (Islamic Republic of)",
              "Slug": "iran",
              "NewConfirmed": 2901,
              "TotalConfirmed": 38309,
              "NewDeaths": 123,
              "TotalDeaths": 2640,
              "NewRecovered": 712,
              "TotalRecovered": 12391
            },
            {
              "Country": "Iraq",
              "Slug": "iraq",
              "NewConfirmed": 41,
              "TotalConfirmed": 547,
              "NewDeaths": 0,
              "TotalDeaths": 42,
              "NewRecovered": 12,
              "TotalRecovered": 143
            },
            {
              "Country": "Ireland",
              "Slug": "ireland",
              "NewConfirmed": 200,
              "TotalConfirmed": 2615,
              "NewDeaths": 10,
              "TotalDeaths": 46,
              "NewRecovered": 0,
              "TotalRecovered": 5
            },
            {
              "Country": "Israel",
              "Slug": "israel",
              "NewConfirmed": 628,
              "TotalConfirmed": 4247,
              "NewDeaths": 3,
              "TotalDeaths": 15,
              "NewRecovered": 43,
              "TotalRecovered": 132
            },
            {
              "Country": "Italy",
              "Slug": "italy",
              "NewConfirmed": 5217,
              "TotalConfirmed": 97689,
              "NewDeaths": 756,
              "TotalDeaths": 10779,
              "NewRecovered": 646,
              "TotalRecovered": 13030
            },
            {
              "Country": "Ivory Coast",
              "Slug": "ivory-coast",
              "NewConfirmed": 0,
              "TotalConfirmed": 0,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Jamaica",
              "Slug": "jamaica",
              "NewConfirmed": 2,
              "TotalConfirmed": 32,
              "NewDeaths": 0,
              "TotalDeaths": 1,
              "NewRecovered": 0,
              "TotalRecovered": 2
            },
            {
              "Country": "Japan",
              "Slug": "japan",
              "NewConfirmed": 173,
              "TotalConfirmed": 1866,
              "NewDeaths": 2,
              "TotalDeaths": 54,
              "NewRecovered": 20,
              "TotalRecovered": 424
            },
            {
              "Country": "Jersey",
              "Slug": "jersey",
              "NewConfirmed": 0,
              "TotalConfirmed": 0,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Jordan",
              "Slug": "jordan",
              "NewConfirmed": 13,
              "TotalConfirmed": 259,
              "NewDeaths": 2,
              "TotalDeaths": 3,
              "NewRecovered": 0,
              "TotalRecovered": 18
            },
            {
              "Country": "Kazakhstan",
              "Slug": "kazakhstan",
              "NewConfirmed": 56,
              "TotalConfirmed": 284,
              "NewDeaths": 0,
              "TotalDeaths": 1,
              "NewRecovered": 4,
              "TotalRecovered": 20
            },
            {
              "Country": "Kenya",
              "Slug": "kenya",
              "NewConfirmed": 4,
              "TotalConfirmed": 42,
              "NewDeaths": 0,
              "TotalDeaths": 1,
              "NewRecovered": 0,
              "TotalRecovered": 1
            },
            {
              "Country": "Korea, South",
              "Slug": "korea-south",
              "NewConfirmed": 105,
              "TotalConfirmed": 9583,
              "NewDeaths": 8,
              "TotalDeaths": 152,
              "NewRecovered": 222,
              "TotalRecovered": 5033
            },
            {
              "Country": "Kosovo",
              "Slug": "kosovo",
              "NewConfirmed": 3,
              "TotalConfirmed": 94,
              "NewDeaths": 0,
              "TotalDeaths": 1,
              "NewRecovered": 0,
              "TotalRecovered": 1
            },
            {
              "Country": "Kuwait",
              "Slug": "kuwait",
              "NewConfirmed": 20,
              "TotalConfirmed": 255,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 3,
              "TotalRecovered": 67
            },
            {
              "Country": "Kyrgyzstan",
              "Slug": "kyrgyzstan",
              "NewConfirmed": 26,
              "TotalConfirmed": 84,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Laos",
              "Slug": "laos",
              "NewConfirmed": 0,
              "TotalConfirmed": 8,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Latvia",
              "Slug": "latvia",
              "NewConfirmed": 42,
              "TotalConfirmed": 347,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 1
            },
            {
              "Country": "Lebanon",
              "Slug": "lebanon",
              "NewConfirmed": 26,
              "TotalConfirmed": 438,
              "NewDeaths": 2,
              "TotalDeaths": 10,
              "NewRecovered": 0,
              "TotalRecovered": 30
            },
            {
              "Country": "Liberia",
              "Slug": "liberia",
              "NewConfirmed": 0,
              "TotalConfirmed": 3,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Libya",
              "Slug": "libya",
              "NewConfirmed": 5,
              "TotalConfirmed": 8,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Liechtenstein",
              "Slug": "liechtenstein",
              "NewConfirmed": 0,
              "TotalConfirmed": 56,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Lithuania",
              "Slug": "lithuania",
              "NewConfirmed": 66,
              "TotalConfirmed": 460,
              "NewDeaths": 0,
              "TotalDeaths": 7,
              "NewRecovered": 0,
              "TotalRecovered": 1
            },
            {
              "Country": "Luxembourg",
              "Slug": "luxembourg",
              "NewConfirmed": 119,
              "TotalConfirmed": 1950,
              "NewDeaths": 3,
              "TotalDeaths": 21,
              "NewRecovered": 0,
              "TotalRecovered": 40
            },
            {
              "Country": "Macao SAR",
              "Slug": "macao-sar",
              "NewConfirmed": 0,
              "TotalConfirmed": 0,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Macau",
              "Slug": "macau",
              "NewConfirmed": 0,
              "TotalConfirmed": 10,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 10
            },
            {
              "Country": "Madagascar",
              "Slug": "madagascar",
              "NewConfirmed": 13,
              "TotalConfirmed": 39,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Malaysia",
              "Slug": "malaysia",
              "NewConfirmed": 150,
              "TotalConfirmed": 2470,
              "NewDeaths": 8,
              "TotalDeaths": 35,
              "NewRecovered": 68,
              "TotalRecovered": 388
            },
            {
              "Country": "Maldives",
              "Slug": "maldives",
              "NewConfirmed": 1,
              "TotalConfirmed": 17,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 4,
              "TotalRecovered": 13
            },
            {
              "Country": "Mali",
              "Slug": "mali",
              "NewConfirmed": 0,
              "TotalConfirmed": 18,
              "NewDeaths": 1,
              "TotalDeaths": 1,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Malta",
              "Slug": "malta",
              "NewConfirmed": 2,
              "TotalConfirmed": 151,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 2
            },
            {
              "Country": "Martinique",
              "Slug": "martinique",
              "NewConfirmed": 5,
              "TotalConfirmed": 37,
              "NewDeaths": 0,
              "TotalDeaths": 1,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Mauritania",
              "Slug": "mauritania",
              "NewConfirmed": 0,
              "TotalConfirmed": 5,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 2,
              "TotalRecovered": 2
            },
            {
              "Country": "Mauritius",
              "Slug": "mauritius",
              "NewConfirmed": 5,
              "TotalConfirmed": 107,
              "NewDeaths": 1,
              "TotalDeaths": 3,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Mayotte",
              "Slug": "mayotte",
              "NewConfirmed": 4,
              "TotalConfirmed": 11,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Mexico",
              "Slug": "mexico",
              "NewConfirmed": 131,
              "TotalConfirmed": 848,
              "NewDeaths": 4,
              "TotalDeaths": 16,
              "NewRecovered": 0,
              "TotalRecovered": 4
            },
            {
              "Country": "Moldova",
              "Slug": "moldova",
              "NewConfirmed": 32,
              "TotalConfirmed": 263,
              "NewDeaths": 0,
              "TotalDeaths": 2,
              "NewRecovered": 0,
              "TotalRecovered": 2
            },
            {
              "Country": "Monaco",
              "Slug": "monaco",
              "NewConfirmed": 4,
              "TotalConfirmed": 46,
              "NewDeaths": 1,
              "TotalDeaths": 1,
              "NewRecovered": 0,
              "TotalRecovered": 1
            },
            {
              "Country": "Mongolia",
              "Slug": "mongolia",
              "NewConfirmed": 0,
              "TotalConfirmed": 12,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Montenegro",
              "Slug": "montenegro",
              "NewConfirmed": 1,
              "TotalConfirmed": 85,
              "NewDeaths": 0,
              "TotalDeaths": 1,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Morocco",
              "Slug": "morocco",
              "NewConfirmed": 77,
              "TotalConfirmed": 479,
              "NewDeaths": 1,
              "TotalDeaths": 26,
              "NewRecovered": 2,
              "TotalRecovered": 13
            },
            {
              "Country": "Mozambique",
              "Slug": "mozambique",
              "NewConfirmed": 0,
              "TotalConfirmed": 8,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "MS Zaandam",
              "Slug": "ms-zaandam",
              "NewConfirmed": 0,
              "TotalConfirmed": 0,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Namibia",
              "Slug": "namibia",
              "NewConfirmed": 3,
              "TotalConfirmed": 11,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 2
            },
            {
              "Country": "Nepal",
              "Slug": "nepal",
              "NewConfirmed": 0,
              "TotalConfirmed": 5,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 1
            },
            {
              "Country": "Netherlands",
              "Slug": "netherlands",
              "NewConfirmed": 1111,
              "TotalConfirmed": 10930,
              "NewDeaths": 132,
              "TotalDeaths": 772,
              "NewRecovered": 247,
              "TotalRecovered": 253
            },
            {
              "Country": "New Zealand",
              "Slug": "new-zealand",
              "NewConfirmed": 63,
              "TotalConfirmed": 514,
              "NewDeaths": 1,
              "TotalDeaths": 1,
              "NewRecovered": 6,
              "TotalRecovered": 56
            },
            {
              "Country": "Nicaragua",
              "Slug": "nicaragua",
              "NewConfirmed": 0,
              "TotalConfirmed": 4,
              "NewDeaths": 0,
              "TotalDeaths": 1,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Niger",
              "Slug": "niger",
              "NewConfirmed": 8,
              "TotalConfirmed": 18,
              "NewDeaths": 0,
              "TotalDeaths": 1,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Nigeria",
              "Slug": "nigeria",
              "NewConfirmed": 22,
              "TotalConfirmed": 111,
              "NewDeaths": 0,
              "TotalDeaths": 1,
              "NewRecovered": 0,
              "TotalRecovered": 3
            },
            {
              "Country": "North Ireland",
              "Slug": "north-ireland",
              "NewConfirmed": 0,
              "TotalConfirmed": 0,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "North Macedonia",
              "Slug": "north-macedonia",
              "NewConfirmed": 18,
              "TotalConfirmed": 259,
              "NewDeaths": 2,
              "TotalDeaths": 6,
              "NewRecovered": 0,
              "TotalRecovered": 3
            },
            {
              "Country": "Norway",
              "Slug": "norway",
              "NewConfirmed": 269,
              "TotalConfirmed": 4284,
              "NewDeaths": 2,
              "TotalDeaths": 25,
              "NewRecovered": 0,
              "TotalRecovered": 7
            },
            {
              "Country": "occupied Palestinian territory",
              "Slug": "occupied-palestinian-territory",
              "NewConfirmed": 0,
              "TotalConfirmed": 0,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Oman",
              "Slug": "oman",
              "NewConfirmed": 15,
              "TotalConfirmed": 167,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 23
            },
            {
              "Country": "Others",
              "Slug": "others",
              "NewConfirmed": 0,
              "TotalConfirmed": 696,
              "NewDeaths": 0,
              "TotalDeaths": 6,
              "NewRecovered": 0,
              "TotalRecovered": 40
            },
            {
              "Country": "Pakistan",
              "Slug": "pakistan",
              "NewConfirmed": 102,
              "TotalConfirmed": 1597,
              "NewDeaths": 2,
              "TotalDeaths": 14,
              "NewRecovered": 0,
              "TotalRecovered": 29
            },
            {
              "Country": "Palestine",
              "Slug": "palestine",
              "NewConfirmed": 0,
              "TotalConfirmed": 22,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Panama",
              "Slug": "panama",
              "NewConfirmed": 115,
              "TotalConfirmed": 901,
              "NewDeaths": 3,
              "TotalDeaths": 17,
              "NewRecovered": 2,
              "TotalRecovered": 4
            },
            {
              "Country": "Papua New Guinea",
              "Slug": "papua-new-guinea",
              "NewConfirmed": 0,
              "TotalConfirmed": 1,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Paraguay",
              "Slug": "paraguay",
              "NewConfirmed": 3,
              "TotalConfirmed": 59,
              "NewDeaths": 0,
              "TotalDeaths": 3,
              "NewRecovered": 0,
              "TotalRecovered": 1
            },
            {
              "Country": "Peru",
              "Slug": "peru",
              "NewConfirmed": 181,
              "TotalConfirmed": 852,
              "NewDeaths": 2,
              "TotalDeaths": 18,
              "NewRecovered": 0,
              "TotalRecovered": 16
            },
            {
              "Country": "Philippines",
              "Slug": "philippines",
              "NewConfirmed": 343,
              "TotalConfirmed": 1418,
              "NewDeaths": 3,
              "TotalDeaths": 71,
              "NewRecovered": 7,
              "TotalRecovered": 42
            },
            {
              "Country": "Poland",
              "Slug": "poland",
              "NewConfirmed": 224,
              "TotalConfirmed": 1862,
              "NewDeaths": 4,
              "TotalDeaths": 22,
              "NewRecovered": 0,
              "TotalRecovered": 7
            },
            {
              "Country": "Portugal",
              "Slug": "portugal",
              "NewConfirmed": 792,
              "TotalConfirmed": 5962,
              "NewDeaths": 19,
              "TotalDeaths": 119,
              "NewRecovered": 0,
              "TotalRecovered": 43
            },
            {
              "Country": "Puerto Rico",
              "Slug": "puerto-rico",
              "NewConfirmed": 0,
              "TotalConfirmed": 0,
              "NewDeaths": 1,
              "TotalDeaths": 1,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Qatar",
              "Slug": "qatar",
              "NewConfirmed": 44,
              "TotalConfirmed": 634,
              "NewDeaths": 0,
              "TotalDeaths": 1,
              "NewRecovered": 3,
              "TotalRecovered": 48
            },
            {
              "Country": "Republic of Ireland",
              "Slug": "republic-of-ireland",
              "NewConfirmed": 0,
              "TotalConfirmed": 0,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Republic of Korea",
              "Slug": "korea-south",
              "NewConfirmed": 105,
              "TotalConfirmed": 9583,
              "NewDeaths": 8,
              "TotalDeaths": 152,
              "NewRecovered": 222,
              "TotalRecovered": 5033
            },
            {
              "Country": "Republic of Moldova",
              "Slug": "republic-of-moldova",
              "NewConfirmed": 0,
              "TotalConfirmed": 0,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Republic of the Congo",
              "Slug": "republic-of-the-congo",
              "NewConfirmed": 0,
              "TotalConfirmed": 0,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Reunion",
              "Slug": "reunion",
              "NewConfirmed": 2,
              "TotalConfirmed": 47,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Romania",
              "Slug": "romania",
              "NewConfirmed": 363,
              "TotalConfirmed": 1815,
              "NewDeaths": 6,
              "TotalDeaths": 43,
              "NewRecovered": 67,
              "TotalRecovered": 206
            },
            {
              "Country": "Russia",
              "Slug": "russia",
              "NewConfirmed": 270,
              "TotalConfirmed": 1534,
              "NewDeaths": 4,
              "TotalDeaths": 8,
              "NewRecovered": 15,
              "TotalRecovered": 64
            },
            {
              "Country": "Russian Federation",
              "Slug": "russia",
              "NewConfirmed": 270,
              "TotalConfirmed": 1534,
              "NewDeaths": 4,
              "TotalDeaths": 8,
              "NewRecovered": 15,
              "TotalRecovered": 64
            },
            {
              "Country": "Rwanda",
              "Slug": "rwanda",
              "NewConfirmed": 10,
              "TotalConfirmed": 70,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Saint Barthelemy",
              "Slug": "saint-barthelemy",
              "NewConfirmed": 0,
              "TotalConfirmed": 1,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Saint Kitts and Nevis",
              "Slug": "saint-kitts-and-nevis",
              "NewConfirmed": 0,
              "TotalConfirmed": 2,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Saint Lucia",
              "Slug": "saint-lucia",
              "NewConfirmed": 6,
              "TotalConfirmed": 9,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 1
            },
            {
              "Country": "Saint Martin",
              "Slug": "saint-martin",
              "NewConfirmed": 0,
              "TotalConfirmed": 0,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Saint Vincent and the Grenadines",
              "Slug": "saint-vincent-and-the-grenadines",
              "NewConfirmed": 0,
              "TotalConfirmed": 1,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 1
            },
            {
              "Country": "San Marino",
              "Slug": "san-marino",
              "NewConfirmed": 0,
              "TotalConfirmed": 224,
              "NewDeaths": 0,
              "TotalDeaths": 22,
              "NewRecovered": 0,
              "TotalRecovered": 6
            },
            {
              "Country": "Saudi Arabia",
              "Slug": "saudi-arabia",
              "NewConfirmed": 96,
              "TotalConfirmed": 1299,
              "NewDeaths": 4,
              "TotalDeaths": 8,
              "NewRecovered": 29,
              "TotalRecovered": 66
            },
            {
              "Country": "Senegal",
              "Slug": "senegal",
              "NewConfirmed": 12,
              "TotalConfirmed": 142,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 9,
              "TotalRecovered": 27
            },
            {
              "Country": "Serbia",
              "Slug": "serbia",
              "NewConfirmed": 82,
              "TotalConfirmed": 741,
              "NewDeaths": 3,
              "TotalDeaths": 13,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Seychelles",
              "Slug": "seychelles",
              "NewConfirmed": 0,
              "TotalConfirmed": 8,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Singapore",
              "Slug": "singapore",
              "NewConfirmed": 42,
              "TotalConfirmed": 844,
              "NewDeaths": 1,
              "TotalDeaths": 3,
              "NewRecovered": 14,
              "TotalRecovered": 212
            },
            {
              "Country": "Slovakia",
              "Slug": "slovakia",
              "NewConfirmed": 22,
              "TotalConfirmed": 314,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 2
            },
            {
              "Country": "Slovenia",
              "Slug": "slovenia",
              "NewConfirmed": 46,
              "TotalConfirmed": 730,
              "NewDeaths": 2,
              "TotalDeaths": 11,
              "NewRecovered": 0,
              "TotalRecovered": 10
            },
            {
              "Country": "Somalia",
              "Slug": "somalia",
              "NewConfirmed": 0,
              "TotalConfirmed": 3,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "South Africa",
              "Slug": "south-africa",
              "NewConfirmed": 93,
              "TotalConfirmed": 1280,
              "NewDeaths": 1,
              "TotalDeaths": 2,
              "NewRecovered": 0,
              "TotalRecovered": 31
            },
            {
              "Country": "South Korea",
              "Slug": "korea-south",
              "NewConfirmed": 105,
              "TotalConfirmed": 9583,
              "NewDeaths": 8,
              "TotalDeaths": 152,
              "NewRecovered": 222,
              "TotalRecovered": 5033
            },
            {
              "Country": "Spain",
              "Slug": "spain",
              "NewConfirmed": 6875,
              "TotalConfirmed": 80110,
              "NewDeaths": 821,
              "TotalDeaths": 6803,
              "NewRecovered": 2424,
              "TotalRecovered": 14709
            },
            {
              "Country": "Sri Lanka",
              "Slug": "sri-lanka",
              "NewConfirmed": 4,
              "TotalConfirmed": 117,
              "NewDeaths": 0,
              "TotalDeaths": 1,
              "NewRecovered": 2,
              "TotalRecovered": 11
            },
            {
              "Country": "St. Martin",
              "Slug": "st.-martin",
              "NewConfirmed": 0,
              "TotalConfirmed": 0,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Sudan",
              "Slug": "sudan",
              "NewConfirmed": 1,
              "TotalConfirmed": 6,
              "NewDeaths": 0,
              "TotalDeaths": 1,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Suriname",
              "Slug": "suriname",
              "NewConfirmed": 0,
              "TotalConfirmed": 8,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Sweden",
              "Slug": "sweden",
              "NewConfirmed": 253,
              "TotalConfirmed": 3700,
              "NewDeaths": 5,
              "TotalDeaths": 110,
              "NewRecovered": 0,
              "TotalRecovered": 16
            },
            {
              "Country": "Switzerland",
              "Slug": "switzerland",
              "NewConfirmed": 753,
              "TotalConfirmed": 14829,
              "NewDeaths": 36,
              "TotalDeaths": 300,
              "NewRecovered": 65,
              "TotalRecovered": 1595
            },
            {
              "Country": "Syria",
              "Slug": "syria",
              "NewConfirmed": 4,
              "TotalConfirmed": 9,
              "NewDeaths": 1,
              "TotalDeaths": 1,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Taipei and environs",
              "Slug": "taipei-and-environs",
              "NewConfirmed": 0,
              "TotalConfirmed": 0,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Taiwan",
              "Slug": "taiwan",
              "NewConfirmed": 15,
              "TotalConfirmed": 298,
              "NewDeaths": 0,
              "TotalDeaths": 2,
              "NewRecovered": 0,
              "TotalRecovered": 30
            },
            {
              "Country": "Taiwan*",
              "Slug": "taiwan",
              "NewConfirmed": 15,
              "TotalConfirmed": 298,
              "NewDeaths": 0,
              "TotalDeaths": 2,
              "NewRecovered": 0,
              "TotalRecovered": 30
            },
            {
              "Country": "Tanzania",
              "Slug": "tanzania",
              "NewConfirmed": 0,
              "TotalConfirmed": 14,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 1
            },
            {
              "Country": "Thailand",
              "Slug": "thailand",
              "NewConfirmed": 143,
              "TotalConfirmed": 1388,
              "NewDeaths": 1,
              "TotalDeaths": 7,
              "NewRecovered": 0,
              "TotalRecovered": 97
            },
            {
              "Country": "The Bahamas",
              "Slug": "the-bahamas",
              "NewConfirmed": 0,
              "TotalConfirmed": 0,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "The Gambia",
              "Slug": "the-gambia",
              "NewConfirmed": 0,
              "TotalConfirmed": 0,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Timor-Leste",
              "Slug": "timor-leste",
              "NewConfirmed": 0,
              "TotalConfirmed": 1,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Togo",
              "Slug": "togo",
              "NewConfirmed": 0,
              "TotalConfirmed": 25,
              "NewDeaths": 0,
              "TotalDeaths": 1,
              "NewRecovered": 0,
              "TotalRecovered": 1
            },
            {
              "Country": "Trinidad and Tobago",
              "Slug": "trinidad-and-tobago",
              "NewConfirmed": 4,
              "TotalConfirmed": 78,
              "NewDeaths": 0,
              "TotalDeaths": 3,
              "NewRecovered": 0,
              "TotalRecovered": 1
            },
            {
              "Country": "Tunisia",
              "Slug": "tunisia",
              "NewConfirmed": 34,
              "TotalConfirmed": 312,
              "NewDeaths": 0,
              "TotalDeaths": 8,
              "NewRecovered": 0,
              "TotalRecovered": 2
            },
            {
              "Country": "Turkey",
              "Slug": "turkey",
              "NewConfirmed": 1815,
              "TotalConfirmed": 9217,
              "NewDeaths": 23,
              "TotalDeaths": 131,
              "NewRecovered": 35,
              "TotalRecovered": 105
            },
            {
              "Country": "Uganda",
              "Slug": "uganda",
              "NewConfirmed": 3,
              "TotalConfirmed": 33,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Ukraine",
              "Slug": "ukraine",
              "NewConfirmed": 119,
              "TotalConfirmed": 475,
              "NewDeaths": 1,
              "TotalDeaths": 10,
              "NewRecovered": 1,
              "TotalRecovered": 6
            },
            {
              "Country": "United Arab Emirates",
              "Slug": "united-arab-emirates",
              "NewConfirmed": 102,
              "TotalConfirmed": 570,
              "NewDeaths": 1,
              "TotalDeaths": 3,
              "NewRecovered": 6,
              "TotalRecovered": 58
            },
            {
              "Country": "United Kingdom",
              "Slug": "united-kingdom",
              "NewConfirmed": 2468,
              "TotalConfirmed": 19780,
              "NewDeaths": 210,
              "TotalDeaths": 1231,
              "NewRecovered": 0,
              "TotalRecovered": 151
            },
            {
              "Country": "Uruguay",
              "Slug": "uruguay",
              "NewConfirmed": 30,
              "TotalConfirmed": 304,
              "NewDeaths": 1,
              "TotalDeaths": 1,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "US",
              "Slug": "us",
              "NewConfirmed": 19408,
              "TotalConfirmed": 140886,
              "NewDeaths": 441,
              "TotalDeaths": 2467,
              "NewRecovered": 1593,
              "TotalRecovered": 2665
            },
            {
              "Country": "Uzbekistan",
              "Slug": "uzbekistan",
              "NewConfirmed": 40,
              "TotalConfirmed": 144,
              "NewDeaths": 0,
              "TotalDeaths": 2,
              "NewRecovered": 2,
              "TotalRecovered": 7
            },
            {
              "Country": "Vatican City",
              "Slug": "vatican-city",
              "NewConfirmed": 0,
              "TotalConfirmed": 1,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Venezuela",
              "Slug": "venezuela",
              "NewConfirmed": 0,
              "TotalConfirmed": 119,
              "NewDeaths": 0,
              "TotalDeaths": 2,
              "NewRecovered": 0,
              "TotalRecovered": 39
            },
            {
              "Country": "Viet Nam",
              "Slug": "vietnam",
              "NewConfirmed": 14,
              "TotalConfirmed": 188,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 4,
              "TotalRecovered": 25
            },
            {
              "Country": "Vietnam",
              "Slug": "vietnam",
              "NewConfirmed": 14,
              "TotalConfirmed": 188,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 4,
              "TotalRecovered": 25
            },
            {
              "Country": "West Bank and Gaza",
              "Slug": "west-bank-and-gaza",
              "NewConfirmed": 11,
              "TotalConfirmed": 109,
              "NewDeaths": 0,
              "TotalDeaths": 1,
              "NewRecovered": 0,
              "TotalRecovered": 18
            },
            {
              "Country": "Zambia",
              "Slug": "zambia",
              "NewConfirmed": 1,
              "TotalConfirmed": 29,
              "NewDeaths": 0,
              "TotalDeaths": 0,
              "NewRecovered": 0,
              "TotalRecovered": 0
            },
            {
              "Country": "Zimbabwe",
              "Slug": "zimbabwe",
              "NewConfirmed": 0,
              "TotalConfirmed": 7,
              "NewDeaths": 0,
              "TotalDeaths": 1,
              "NewRecovered": 0,
              "TotalRecovered": 0
            }
          ],
          "Date": "2020-03-30T02:07:25.406383406Z"
        }

        return summary;
    }
        
}