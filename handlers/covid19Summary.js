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
                "NewConfirmed": 0,
                "TotalConfirmed": 110,
                "NewDeaths": 0,
                "TotalDeaths": 4,
                "NewRecovered": 0,
                "TotalRecovered": 2
              },
              {
                "Country": "Albania",
                "Slug": "albania",
                "NewConfirmed": 11,
                "TotalConfirmed": 197,
                "NewDeaths": 2,
                "TotalDeaths": 10,
                "NewRecovered": 0,
                "TotalRecovered": 31
              },
              {
                "Country": "Algeria",
                "Slug": "algeria",
                "NewConfirmed": 45,
                "TotalConfirmed": 454,
                "NewDeaths": 3,
                "TotalDeaths": 29,
                "NewRecovered": 2,
                "TotalRecovered": 31
              },
              {
                "Country": "Andorra",
                "Slug": "andorra",
                "NewConfirmed": 41,
                "TotalConfirmed": 308,
                "NewDeaths": 0,
                "TotalDeaths": 3,
                "NewRecovered": 0,
                "TotalRecovered": 1
              },
              {
                "Country": "Angola",
                "Slug": "angola",
                "NewConfirmed": 1,
                "TotalConfirmed": 5,
                "NewDeaths": 0,
                "TotalDeaths": 0,
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
                "NewConfirmed": 101,
                "TotalConfirmed": 690,
                "NewDeaths": 5,
                "TotalDeaths": 18,
                "NewRecovered": 0,
                "TotalRecovered": 72
              },
              {
                "Country": "Armenia",
                "Slug": "armenia",
                "NewConfirmed": 78,
                "TotalConfirmed": 407,
                "NewDeaths": 0,
                "TotalDeaths": 1,
                "NewRecovered": 2,
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
                "NewConfirmed": 497,
                "TotalConfirmed": 3640,
                "NewDeaths": 1,
                "TotalDeaths": 14,
                "NewRecovered": 50,
                "TotalRecovered": 244
              },
              {
                "Country": "Austria",
                "Slug": "austria",
                "NewConfirmed": 614,
                "TotalConfirmed": 8271,
                "NewDeaths": 10,
                "TotalDeaths": 68,
                "NewRecovered": 0,
                "TotalRecovered": 225
              },
              {
                "Country": "Azerbaijan",
                "Slug": "azerbaijan",
                "NewConfirmed": 17,
                "TotalConfirmed": 182,
                "NewDeaths": 1,
                "TotalDeaths": 4,
                "NewRecovered": 0,
                "TotalRecovered": 15
              },
              {
                "Country": "Bahamas",
                "Slug": "bahamas",
                "NewConfirmed": 0,
                "TotalConfirmed": 10,
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
                "NewConfirmed": 10,
                "TotalConfirmed": 476,
                "NewDeaths": 0,
                "TotalDeaths": 4,
                "NewRecovered": 38,
                "TotalRecovered": 265
              },
              {
                "Country": "Bangladesh",
                "Slug": "bangladesh",
                "NewConfirmed": 0,
                "TotalConfirmed": 48,
                "NewDeaths": 0,
                "TotalDeaths": 5,
                "NewRecovered": 4,
                "TotalRecovered": 15
              },
              {
                "Country": "Barbados",
                "Slug": "barbados",
                "NewConfirmed": 2,
                "TotalConfirmed": 26,
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
                "NewConfirmed": 1850,
                "TotalConfirmed": 9134,
                "NewDeaths": 64,
                "TotalDeaths": 353,
                "NewRecovered": 205,
                "TotalRecovered": 1063
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
                "NewConfirmed": 0,
                "TotalConfirmed": 3,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 0,
                "TotalRecovered": 0
              },
              {
                "Country": "Bolivia",
                "Slug": "bolivia",
                "NewConfirmed": 13,
                "TotalConfirmed": 74,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 0,
                "TotalRecovered": 0
              },
              {
                "Country": "Bosnia and Herzegovina",
                "Slug": "bosnia-and-herzegovina",
                "NewConfirmed": 21,
                "TotalConfirmed": 258,
                "NewDeaths": 1,
                "TotalDeaths": 5,
                "NewRecovered": 0,
                "TotalRecovered": 5
              },
              {
                "Country": "Brazil",
                "Slug": "brazil",
                "NewConfirmed": 487,
                "TotalConfirmed": 3904,
                "NewDeaths": 19,
                "TotalDeaths": 111,
                "NewRecovered": 0,
                "TotalRecovered": 6
              },
              {
                "Country": "Brunei",
                "Slug": "brunei",
                "NewConfirmed": 5,
                "TotalConfirmed": 120,
                "NewDeaths": 1,
                "TotalDeaths": 1,
                "NewRecovered": 14,
                "TotalRecovered": 25
              },
              {
                "Country": "Bulgaria",
                "Slug": "bulgaria",
                "NewConfirmed": 38,
                "TotalConfirmed": 331,
                "NewDeaths": 4,
                "TotalDeaths": 7,
                "NewRecovered": 2,
                "TotalRecovered": 11
              },
              {
                "Country": "Burkina Faso",
                "Slug": "burkina-faso",
                "NewConfirmed": 27,
                "TotalConfirmed": 207,
                "NewDeaths": 2,
                "TotalDeaths": 11,
                "NewRecovered": 9,
                "TotalRecovered": 21
              },
              {
                "Country": "Burma",
                "Slug": "burma",
                "NewConfirmed": 0,
                "TotalConfirmed": 0,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 0,
                "TotalRecovered": 0
              },
              {
                "Country": "Cabo Verde",
                "Slug": "cabo-verde",
                "NewConfirmed": 0,
                "TotalConfirmed": 5,
                "NewDeaths": 0,
                "TotalDeaths": 1,
                "NewRecovered": 0,
                "TotalRecovered": 0
              },
              {
                "Country": "Cambodia",
                "Slug": "cambodia",
                "NewConfirmed": 0,
                "TotalConfirmed": 99,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 2,
                "TotalRecovered": 13
              },
              {
                "Country": "Cameroon",
                "Slug": "cameroon",
                "NewConfirmed": 0,
                "TotalConfirmed": 91,
                "NewDeaths": 0,
                "TotalDeaths": 2,
                "NewRecovered": 0,
                "TotalRecovered": 2
              },
              {
                "Country": "Canada",
                "Slug": "canada",
                "NewConfirmed": 894,
                "TotalConfirmed": 5576,
                "NewDeaths": 7,
                "TotalDeaths": 61,
                "NewRecovered": 210,
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
                "NewConfirmed": 299,
                "TotalConfirmed": 1909,
                "NewDeaths": 1,
                "TotalDeaths": 6,
                "NewRecovered": 18,
                "TotalRecovered": 61
              },
              {
                "Country": "China",
                "Slug": "china",
                "NewConfirmed": 102,
                "TotalConfirmed": 81999,
                "NewDeaths": 3,
                "TotalDeaths": 3299,
                "NewRecovered": 380,
                "TotalRecovered": 75100
              },
              {
                "Country": "Colombia",
                "Slug": "colombia",
                "NewConfirmed": 69,
                "TotalConfirmed": 608,
                "NewDeaths": 0,
                "TotalDeaths": 6,
                "NewRecovered": 0,
                "TotalRecovered": 10
              },
              {
                "Country": "Congo (Brazzaville)",
                "Slug": "congo-(brazzaville)",
                "NewConfirmed": 0,
                "TotalConfirmed": 4,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 0,
                "TotalRecovered": 0
              },
              {
                "Country": "Congo (Kinshasa)",
                "Slug": "congo-(kinshasa)",
                "NewConfirmed": 14,
                "TotalConfirmed": 65,
                "NewDeaths": 3,
                "TotalDeaths": 6,
                "NewRecovered": 0,
                "TotalRecovered": 2
              },
              {
                "Country": "Costa Rica",
                "Slug": "costa-rica",
                "NewConfirmed": 32,
                "TotalConfirmed": 295,
                "NewDeaths": 0,
                "TotalDeaths": 2,
                "NewRecovered": 0,
                "TotalRecovered": 3
              },
              {
                "Country": "Cote d'Ivoire",
                "Slug": "cote-divoire",
                "NewConfirmed": 0,
                "TotalConfirmed": 101,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 0,
                "TotalRecovered": 3
              },
              {
                "Country": "Croatia",
                "Slug": "croatia",
                "NewConfirmed": 71,
                "TotalConfirmed": 657,
                "NewDeaths": 2,
                "TotalDeaths": 5,
                "NewRecovered": 8,
                "TotalRecovered": 45
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
                "NewConfirmed": 39,
                "TotalConfirmed": 119,
                "NewDeaths": 1,
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
                "NewConfirmed": 17,
                "TotalConfirmed": 179,
                "NewDeaths": 0,
                "TotalDeaths": 5,
                "NewRecovered": 0,
                "TotalRecovered": 15
              },
              {
                "Country": "Czechia",
                "Slug": "czechia",
                "NewConfirmed": 352,
                "TotalConfirmed": 2631,
                "NewDeaths": 2,
                "TotalDeaths": 11,
                "NewRecovered": 0,
                "TotalRecovered": 11
              },
              {
                "Country": "Denmark",
                "Slug": "denmark",
                "NewConfirmed": 166,
                "TotalConfirmed": 2366,
                "NewDeaths": 13,
                "TotalDeaths": 65,
                "NewRecovered": 0,
                "TotalRecovered": 57
              },
              {
                "Country": "Diamond Princess",
                "Slug": "diamond-princess",
                "NewConfirmed": 0,
                "TotalConfirmed": 712,
                "NewDeaths": 0,
                "TotalDeaths": 10,
                "NewRecovered": 0,
                "TotalRecovered": 597
              },
              {
                "Country": "Djibouti",
                "Slug": "djibouti",
                "NewConfirmed": 2,
                "TotalConfirmed": 14,
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
                "NewConfirmed": 138,
                "TotalConfirmed": 719,
                "NewDeaths": 8,
                "TotalDeaths": 28,
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
                "NewConfirmed": 228,
                "TotalConfirmed": 1823,
                "NewDeaths": 12,
                "TotalDeaths": 48,
                "NewRecovered": 0,
                "TotalRecovered": 3
              },
              {
                "Country": "Egypt",
                "Slug": "egypt",
                "NewConfirmed": 40,
                "TotalConfirmed": 576,
                "NewDeaths": 6,
                "TotalDeaths": 36,
                "NewRecovered": 5,
                "TotalRecovered": 121
              },
              {
                "Country": "El Salvador",
                "Slug": "el-salvador",
                "NewConfirmed": 6,
                "TotalConfirmed": 19,
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
                "NewConfirmed": 0,
                "TotalConfirmed": 6,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 0,
                "TotalRecovered": 0
              },
              {
                "Country": "Estonia",
                "Slug": "estonia",
                "NewConfirmed": 70,
                "TotalConfirmed": 645,
                "NewDeaths": 0,
                "TotalDeaths": 1,
                "NewRecovered": 9,
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
                "NewConfirmed": 0,
                "TotalConfirmed": 16,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 1,
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
                "NewConfirmed": 126,
                "TotalConfirmed": 1167,
                "NewDeaths": 2,
                "TotalDeaths": 9,
                "NewRecovered": 0,
                "TotalRecovered": 10
              },
              {
                "Country": "France",
                "Slug": "france",
                "NewConfirmed": 4703,
                "TotalConfirmed": 38105,
                "NewDeaths": 320,
                "TotalDeaths": 2317,
                "NewRecovered": 17,
                "TotalRecovered": 5724
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
                "NewConfirmed": 0,
                "TotalConfirmed": 3,
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
                "NewConfirmed": 7,
                "TotalConfirmed": 90,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 0,
                "TotalRecovered": 14
              },
              {
                "Country": "Germany",
                "Slug": "germany",
                "NewConfirmed": 6824,
                "TotalConfirmed": 57695,
                "NewDeaths": 91,
                "TotalDeaths": 433,
                "NewRecovered": 1823,
                "TotalRecovered": 8481
              },
              {
                "Country": "Ghana",
                "Slug": "ghana",
                "NewConfirmed": 4,
                "TotalConfirmed": 141,
                "NewDeaths": 1,
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
                "TotalConfirmed": 1061,
                "NewDeaths": 4,
                "TotalDeaths": 32,
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
                "NewConfirmed": 0,
                "TotalConfirmed": 7,
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
                "NewConfirmed": 6,
                "TotalConfirmed": 34,
                "NewDeaths": 0,
                "TotalDeaths": 1,
                "NewRecovered": 6,
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
                "NewConfirmed": 0,
                "TotalConfirmed": 8,
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
                "NewConfirmed": 3,
                "TotalConfirmed": 8,
                "NewDeaths": 0,
                "TotalDeaths": 1,
                "NewRecovered": 0,
                "TotalRecovered": 0
              },
              {
                "Country": "Haiti",
                "Slug": "haiti",
                "NewConfirmed": 0,
                "TotalConfirmed": 8,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 0,
                "TotalRecovered": 0
              },
              {
                "Country": "Holy See",
                "Slug": "holy-see",
                "NewConfirmed": 2,
                "TotalConfirmed": 6,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 0,
                "TotalRecovered": 0
              },
              {
                "Country": "Honduras",
                "Slug": "honduras",
                "NewConfirmed": 27,
                "TotalConfirmed": 95,
                "NewDeaths": 0,
                "TotalDeaths": 1,
                "NewRecovered": 3,
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
                "NewConfirmed": 43,
                "TotalConfirmed": 343,
                "NewDeaths": 1,
                "TotalDeaths": 11,
                "NewRecovered": 0,
                "TotalRecovered": 34
              },
              {
                "Country": "Iceland",
                "Slug": "iceland",
                "NewConfirmed": 73,
                "TotalConfirmed": 963,
                "NewDeaths": 0,
                "TotalDeaths": 2,
                "NewRecovered": 17,
                "TotalRecovered": 114
              },
              {
                "Country": "India",
                "Slug": "india",
                "NewConfirmed": 100,
                "TotalConfirmed": 987,
                "NewDeaths": 4,
                "TotalDeaths": 24,
                "NewRecovered": 11,
                "TotalRecovered": 84
              },
              {
                "Country": "Indonesia",
                "Slug": "indonesia",
                "NewConfirmed": 109,
                "TotalConfirmed": 1155,
                "NewDeaths": 15,
                "TotalDeaths": 102,
                "NewRecovered": 13,
                "TotalRecovered": 59
              },
              {
                "Country": "Iran",
                "Slug": "iran",
                "NewConfirmed": 3076,
                "TotalConfirmed": 35408,
                "NewDeaths": 139,
                "TotalDeaths": 2517,
                "NewRecovered": 546,
                "TotalRecovered": 11679
              },
              {
                "Country": "Iran (Islamic Republic of)",
                "Slug": "iran",
                "NewConfirmed": 3076,
                "TotalConfirmed": 35408,
                "NewDeaths": 139,
                "TotalDeaths": 2517,
                "NewRecovered": 546,
                "TotalRecovered": 11679
              },
              {
                "Country": "Iraq",
                "Slug": "iraq",
                "NewConfirmed": 48,
                "TotalConfirmed": 506,
                "NewDeaths": 2,
                "TotalDeaths": 42,
                "NewRecovered": 9,
                "TotalRecovered": 131
              },
              {
                "Country": "Ireland",
                "Slug": "ireland",
                "NewConfirmed": 294,
                "TotalConfirmed": 2415,
                "NewDeaths": 14,
                "TotalDeaths": 36,
                "NewRecovered": 0,
                "TotalRecovered": 5
              },
              {
                "Country": "Israel",
                "Slug": "israel",
                "NewConfirmed": 584,
                "TotalConfirmed": 3619,
                "NewDeaths": 0,
                "TotalDeaths": 12,
                "NewRecovered": 10,
                "TotalRecovered": 89
              },
              {
                "Country": "Italy",
                "Slug": "italy",
                "NewConfirmed": 5974,
                "TotalConfirmed": 92472,
                "NewDeaths": 889,
                "TotalDeaths": 10023,
                "NewRecovered": 1434,
                "TotalRecovered": 12384
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
                "NewConfirmed": 4,
                "TotalConfirmed": 30,
                "NewDeaths": 0,
                "TotalDeaths": 1,
                "NewRecovered": 0,
                "TotalRecovered": 2
              },
              {
                "Country": "Japan",
                "Slug": "japan",
                "NewConfirmed": 225,
                "TotalConfirmed": 1693,
                "NewDeaths": 3,
                "TotalDeaths": 52,
                "NewRecovered": 32,
                "TotalRecovered": 404
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
                "NewConfirmed": 11,
                "TotalConfirmed": 246,
                "NewDeaths": 0,
                "TotalDeaths": 1,
                "NewRecovered": 0,
                "TotalRecovered": 18
              },
              {
                "Country": "Kazakhstan",
                "Slug": "kazakhstan",
                "NewConfirmed": 78,
                "TotalConfirmed": 228,
                "NewDeaths": 0,
                "TotalDeaths": 1,
                "NewRecovered": 13,
                "TotalRecovered": 16
              },
              {
                "Country": "Kenya",
                "Slug": "kenya",
                "NewConfirmed": 7,
                "TotalConfirmed": 38,
                "NewDeaths": 0,
                "TotalDeaths": 1,
                "NewRecovered": 0,
                "TotalRecovered": 1
              },
              {
                "Country": "Korea, South",
                "Slug": "korea-south",
                "NewConfirmed": 146,
                "TotalConfirmed": 9478,
                "NewDeaths": 5,
                "TotalDeaths": 144,
                "NewRecovered": 283,
                "TotalRecovered": 4811
              },
              {
                "Country": "Kosovo",
                "Slug": "kosovo",
                "NewConfirmed": 5,
                "TotalConfirmed": 91,
                "NewDeaths": 0,
                "TotalDeaths": 1,
                "NewRecovered": 0,
                "TotalRecovered": 1
              },
              {
                "Country": "Kuwait",
                "Slug": "kuwait",
                "NewConfirmed": 10,
                "TotalConfirmed": 235,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 7,
                "TotalRecovered": 64
              },
              {
                "Country": "Kyrgyzstan",
                "Slug": "kyrgyzstan",
                "NewConfirmed": 0,
                "TotalConfirmed": 58,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 0,
                "TotalRecovered": 0
              },
              {
                "Country": "Laos",
                "Slug": "laos",
                "NewConfirmed": 2,
                "TotalConfirmed": 8,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 0,
                "TotalRecovered": 0
              },
              {
                "Country": "Latvia",
                "Slug": "latvia",
                "NewConfirmed": 25,
                "TotalConfirmed": 305,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 0,
                "TotalRecovered": 1
              },
              {
                "Country": "Lebanon",
                "Slug": "lebanon",
                "NewConfirmed": 21,
                "TotalConfirmed": 412,
                "NewDeaths": 0,
                "TotalDeaths": 8,
                "NewRecovered": 3,
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
                "NewConfirmed": 2,
                "TotalConfirmed": 3,
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
                "NewConfirmed": 36,
                "TotalConfirmed": 394,
                "NewDeaths": 2,
                "TotalDeaths": 7,
                "NewRecovered": 0,
                "TotalRecovered": 1
              },
              {
                "Country": "Luxembourg",
                "Slug": "luxembourg",
                "NewConfirmed": 226,
                "TotalConfirmed": 1831,
                "NewDeaths": 3,
                "TotalDeaths": 18,
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
                "NewConfirmed": 0,
                "TotalConfirmed": 26,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 0,
                "TotalRecovered": 0
              },
              {
                "Country": "Malaysia",
                "Slug": "malaysia",
                "NewConfirmed": 159,
                "TotalConfirmed": 2320,
                "NewDeaths": 1,
                "TotalDeaths": 27,
                "NewRecovered": 61,
                "TotalRecovered": 320
              },
              {
                "Country": "Maldives",
                "Slug": "maldives",
                "NewConfirmed": 0,
                "TotalConfirmed": 16,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 0,
                "TotalRecovered": 9
              },
              {
                "Country": "Mali",
                "Slug": "mali",
                "NewConfirmed": 7,
                "TotalConfirmed": 18,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 0,
                "TotalRecovered": 0
              },
              {
                "Country": "Malta",
                "Slug": "malta",
                "NewConfirmed": 10,
                "TotalConfirmed": 149,
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
                "NewConfirmed": 2,
                "TotalConfirmed": 5,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 0,
                "TotalRecovered": 0
              },
              {
                "Country": "Mauritius",
                "Slug": "mauritius",
                "NewConfirmed": 8,
                "TotalConfirmed": 102,
                "NewDeaths": 0,
                "TotalDeaths": 2,
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
                "NewConfirmed": 132,
                "TotalConfirmed": 717,
                "NewDeaths": 4,
                "TotalDeaths": 12,
                "NewRecovered": 0,
                "TotalRecovered": 4
              },
              {
                "Country": "Moldova",
                "Slug": "moldova",
                "NewConfirmed": 32,
                "TotalConfirmed": 231,
                "NewDeaths": 0,
                "TotalDeaths": 2,
                "NewRecovered": 0,
                "TotalRecovered": 2
              },
              {
                "Country": "Monaco",
                "Slug": "monaco",
                "NewConfirmed": 0,
                "TotalConfirmed": 42,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 0,
                "TotalRecovered": 1
              },
              {
                "Country": "Mongolia",
                "Slug": "mongolia",
                "NewConfirmed": 1,
                "TotalConfirmed": 12,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 0,
                "TotalRecovered": 0
              },
              {
                "Country": "Montenegro",
                "Slug": "montenegro",
                "NewConfirmed": 2,
                "TotalConfirmed": 84,
                "NewDeaths": 0,
                "TotalDeaths": 1,
                "NewRecovered": 0,
                "TotalRecovered": 0
              },
              {
                "Country": "Morocco",
                "Slug": "morocco",
                "NewConfirmed": 57,
                "TotalConfirmed": 402,
                "NewDeaths": 2,
                "TotalDeaths": 25,
                "NewRecovered": 0,
                "TotalRecovered": 11
              },
              {
                "Country": "Mozambique",
                "Slug": "mozambique",
                "NewConfirmed": 1,
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
                "NewConfirmed": 0,
                "TotalConfirmed": 8,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 0,
                "TotalRecovered": 2
              },
              {
                "Country": "Nepal",
                "Slug": "nepal",
                "NewConfirmed": 1,
                "TotalConfirmed": 5,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 0,
                "TotalRecovered": 1
              },
              {
                "Country": "Netherlands",
                "Slug": "netherlands",
                "NewConfirmed": 1172,
                "TotalConfirmed": 9819,
                "NewDeaths": 93,
                "TotalDeaths": 640,
                "NewRecovered": 0,
                "TotalRecovered": 6
              },
              {
                "Country": "New Zealand",
                "Slug": "new-zealand",
                "NewConfirmed": 83,
                "TotalConfirmed": 451,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 13,
                "TotalRecovered": 50
              },
              {
                "Country": "Nicaragua",
                "Slug": "nicaragua",
                "NewConfirmed": 2,
                "TotalConfirmed": 4,
                "NewDeaths": 0,
                "TotalDeaths": 1,
                "NewRecovered": 0,
                "TotalRecovered": 0
              },
              {
                "Country": "Niger",
                "Slug": "niger",
                "NewConfirmed": 0,
                "TotalConfirmed": 10,
                "NewDeaths": 0,
                "TotalDeaths": 1,
                "NewRecovered": 0,
                "TotalRecovered": 0
              },
              {
                "Country": "Nigeria",
                "Slug": "nigeria",
                "NewConfirmed": 19,
                "TotalConfirmed": 89,
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
                "NewConfirmed": 22,
                "TotalConfirmed": 241,
                "NewDeaths": 1,
                "TotalDeaths": 4,
                "NewRecovered": 0,
                "TotalRecovered": 3
              },
              {
                "Country": "Norway",
                "Slug": "norway",
                "NewConfirmed": 260,
                "TotalConfirmed": 4015,
                "NewDeaths": 4,
                "TotalDeaths": 23,
                "NewRecovered": 1,
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
                "NewConfirmed": 21,
                "TotalConfirmed": 152,
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
                "NewConfirmed": 122,
                "TotalConfirmed": 1495,
                "NewDeaths": 1,
                "TotalDeaths": 12,
                "NewRecovered": 6,
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
                "NewConfirmed": 112,
                "TotalConfirmed": 786,
                "NewDeaths": 5,
                "TotalDeaths": 14,
                "NewRecovered": 0,
                "TotalRecovered": 2
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
                "NewConfirmed": 4,
                "TotalConfirmed": 56,
                "NewDeaths": 0,
                "TotalDeaths": 3,
                "NewRecovered": 0,
                "TotalRecovered": 1
              },
              {
                "Country": "Peru",
                "Slug": "peru",
                "NewConfirmed": 36,
                "TotalConfirmed": 671,
                "NewDeaths": 5,
                "TotalDeaths": 16,
                "NewRecovered": 0,
                "TotalRecovered": 16
              },
              {
                "Country": "Philippines",
                "Slug": "philippines",
                "NewConfirmed": 272,
                "TotalConfirmed": 1075,
                "NewDeaths": 14,
                "TotalDeaths": 68,
                "NewRecovered": 4,
                "TotalRecovered": 35
              },
              {
                "Country": "Poland",
                "Slug": "poland",
                "NewConfirmed": 249,
                "TotalConfirmed": 1638,
                "NewDeaths": 2,
                "TotalDeaths": 18,
                "NewRecovered": 0,
                "TotalRecovered": 7
              },
              {
                "Country": "Portugal",
                "Slug": "portugal",
                "NewConfirmed": 902,
                "TotalConfirmed": 5170,
                "NewDeaths": 24,
                "TotalDeaths": 100,
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
                "NewConfirmed": 28,
                "TotalConfirmed": 590,
                "NewDeaths": 1,
                "TotalDeaths": 1,
                "NewRecovered": 2,
                "TotalRecovered": 45
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
                "NewConfirmed": 146,
                "TotalConfirmed": 9478,
                "NewDeaths": 5,
                "TotalDeaths": 144,
                "NewRecovered": 283,
                "TotalRecovered": 4811
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
                "NewConfirmed": 160,
                "TotalConfirmed": 1452,
                "NewDeaths": 11,
                "TotalDeaths": 37,
                "NewRecovered": 24,
                "TotalRecovered": 139
              },
              {
                "Country": "Russia",
                "Slug": "russia",
                "NewConfirmed": 228,
                "TotalConfirmed": 1264,
                "NewDeaths": 0,
                "TotalDeaths": 4,
                "NewRecovered": 4,
                "TotalRecovered": 49
              },
              {
                "Country": "Russian Federation",
                "Slug": "russia",
                "NewConfirmed": 228,
                "TotalConfirmed": 1264,
                "NewDeaths": 0,
                "TotalDeaths": 4,
                "NewRecovered": 4,
                "TotalRecovered": 49
              },
              {
                "Country": "Rwanda",
                "Slug": "rwanda",
                "NewConfirmed": 6,
                "TotalConfirmed": 60,
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
                "NewConfirmed": 0,
                "TotalConfirmed": 3,
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
                "NewRecovered": 1,
                "TotalRecovered": 1
              },
              {
                "Country": "San Marino",
                "Slug": "san-marino",
                "NewConfirmed": 1,
                "TotalConfirmed": 224,
                "NewDeaths": 1,
                "TotalDeaths": 22,
                "NewRecovered": 2,
                "TotalRecovered": 6
              },
              {
                "Country": "Saudi Arabia",
                "Slug": "saudi-arabia",
                "NewConfirmed": 99,
                "TotalConfirmed": 1203,
                "NewDeaths": 1,
                "TotalDeaths": 4,
                "NewRecovered": 2,
                "TotalRecovered": 37
              },
              {
                "Country": "Senegal",
                "Slug": "senegal",
                "NewConfirmed": 11,
                "TotalConfirmed": 130,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 7,
                "TotalRecovered": 18
              },
              {
                "Country": "Serbia",
                "Slug": "serbia",
                "NewConfirmed": 202,
                "TotalConfirmed": 659,
                "NewDeaths": 9,
                "TotalDeaths": 10,
                "NewRecovered": 0,
                "TotalRecovered": 0
              },
              {
                "Country": "Seychelles",
                "Slug": "seychelles",
                "NewConfirmed": 1,
                "TotalConfirmed": 8,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 0,
                "TotalRecovered": 0
              },
              {
                "Country": "Singapore",
                "Slug": "singapore",
                "NewConfirmed": 70,
                "TotalConfirmed": 802,
                "NewDeaths": 0,
                "TotalDeaths": 2,
                "NewRecovered": 15,
                "TotalRecovered": 198
              },
              {
                "Country": "Slovakia",
                "Slug": "slovakia",
                "NewConfirmed": 23,
                "TotalConfirmed": 292,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 0,
                "TotalRecovered": 2
              },
              {
                "Country": "Slovenia",
                "Slug": "slovenia",
                "NewConfirmed": 52,
                "TotalConfirmed": 684,
                "NewDeaths": 0,
                "TotalDeaths": 9,
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
                "NewConfirmed": 17,
                "TotalConfirmed": 1187,
                "NewDeaths": 0,
                "TotalDeaths": 1,
                "NewRecovered": 0,
                "TotalRecovered": 31
              },
              {
                "Country": "South Korea",
                "Slug": "korea-south",
                "NewConfirmed": 146,
                "TotalConfirmed": 9478,
                "NewDeaths": 5,
                "TotalDeaths": 144,
                "NewRecovered": 283,
                "TotalRecovered": 4811
              },
              {
                "Country": "Spain",
                "Slug": "spain",
                "NewConfirmed": 7516,
                "TotalConfirmed": 73235,
                "NewDeaths": 844,
                "TotalDeaths": 5982,
                "NewRecovered": 2928,
                "TotalRecovered": 12285
              },
              {
                "Country": "Sri Lanka",
                "Slug": "sri-lanka",
                "NewConfirmed": 7,
                "TotalConfirmed": 113,
                "NewDeaths": 1,
                "TotalDeaths": 1,
                "NewRecovered": 2,
                "TotalRecovered": 9
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
                "NewConfirmed": 2,
                "TotalConfirmed": 5,
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
                "NewConfirmed": 378,
                "TotalConfirmed": 3447,
                "NewDeaths": 0,
                "TotalDeaths": 105,
                "NewRecovered": 0,
                "TotalRecovered": 16
              },
              {
                "Country": "Switzerland",
                "Slug": "switzerland",
                "NewConfirmed": 1148,
                "TotalConfirmed": 14076,
                "NewDeaths": 33,
                "TotalDeaths": 264,
                "NewRecovered": 0,
                "TotalRecovered": 1530
              },
              {
                "Country": "Syria",
                "Slug": "syria",
                "NewConfirmed": 0,
                "TotalConfirmed": 5,
                "NewDeaths": 0,
                "TotalDeaths": 0,
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
                "NewConfirmed": 16,
                "TotalConfirmed": 283,
                "NewDeaths": 0,
                "TotalDeaths": 2,
                "NewRecovered": 1,
                "TotalRecovered": 30
              },
              {
                "Country": "Taiwan*",
                "Slug": "taiwan",
                "NewConfirmed": 16,
                "TotalConfirmed": 283,
                "NewDeaths": 0,
                "TotalDeaths": 2,
                "NewRecovered": 1,
                "TotalRecovered": 30
              },
              {
                "Country": "Tanzania",
                "Slug": "tanzania",
                "NewConfirmed": 1,
                "TotalConfirmed": 14,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 0,
                "TotalRecovered": 1
              },
              {
                "Country": "Thailand",
                "Slug": "thailand",
                "NewConfirmed": 109,
                "TotalConfirmed": 1245,
                "NewDeaths": 1,
                "TotalDeaths": 6,
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
                "NewConfirmed": 8,
                "TotalConfirmed": 74,
                "NewDeaths": 1,
                "TotalDeaths": 3,
                "NewRecovered": 0,
                "TotalRecovered": 1
              },
              {
                "Country": "Tunisia",
                "Slug": "tunisia",
                "NewConfirmed": 51,
                "TotalConfirmed": 278,
                "NewDeaths": 2,
                "TotalDeaths": 8,
                "NewRecovered": 0,
                "TotalRecovered": 2
              },
              {
                "Country": "Turkey",
                "Slug": "turkey",
                "NewConfirmed": 1704,
                "TotalConfirmed": 7402,
                "NewDeaths": 16,
                "TotalDeaths": 108,
                "NewRecovered": 28,
                "TotalRecovered": 70
              },
              {
                "Country": "Uganda",
                "Slug": "uganda",
                "NewConfirmed": 7,
                "TotalConfirmed": 30,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 0,
                "TotalRecovered": 0
              },
              {
                "Country": "Ukraine",
                "Slug": "ukraine",
                "NewConfirmed": 46,
                "TotalConfirmed": 356,
                "NewDeaths": 4,
                "TotalDeaths": 9,
                "NewRecovered": 0,
                "TotalRecovered": 5
              },
              {
                "Country": "United Arab Emirates",
                "Slug": "united-arab-emirates",
                "NewConfirmed": 63,
                "TotalConfirmed": 468,
                "NewDeaths": 0,
                "TotalDeaths": 2,
                "NewRecovered": 0,
                "TotalRecovered": 52
              },
              {
                "Country": "United Kingdom",
                "Slug": "united-kingdom",
                "NewConfirmed": 2567,
                "TotalConfirmed": 17312,
                "NewDeaths": 260,
                "TotalDeaths": 1021,
                "NewRecovered": 0,
                "TotalRecovered": 151
              },
              {
                "Country": "Uruguay",
                "Slug": "uruguay",
                "NewConfirmed": 36,
                "TotalConfirmed": 274,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 0,
                "TotalRecovered": 0
              },
              {
                "Country": "US",
                "Slug": "us",
                "NewConfirmed": 19821,
                "TotalConfirmed": 121478,
                "NewDeaths": 445,
                "TotalDeaths": 2026,
                "NewRecovered": 203,
                "TotalRecovered": 1072
              },
              {
                "Country": "Uzbekistan",
                "Slug": "uzbekistan",
                "NewConfirmed": 16,
                "TotalConfirmed": 104,
                "NewDeaths": 1,
                "TotalDeaths": 2,
                "NewRecovered": 0,
                "TotalRecovered": 5
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
                "NewConfirmed": 12,
                "TotalConfirmed": 119,
                "NewDeaths": 1,
                "TotalDeaths": 2,
                "NewRecovered": 8,
                "TotalRecovered": 39
              },
              {
                "Country": "Viet Nam",
                "Slug": "vietnam",
                "NewConfirmed": 11,
                "TotalConfirmed": 174,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 1,
                "TotalRecovered": 21
              },
              {
                "Country": "Vietnam",
                "Slug": "vietnam",
                "NewConfirmed": 11,
                "TotalConfirmed": 174,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 1,
                "TotalRecovered": 21
              },
              {
                "Country": "West Bank and Gaza",
                "Slug": "west-bank-and-gaza",
                "NewConfirmed": 7,
                "TotalConfirmed": 98,
                "NewDeaths": 0,
                "TotalDeaths": 1,
                "NewRecovered": 1,
                "TotalRecovered": 18
              },
              {
                "Country": "Zambia",
                "Slug": "zambia",
                "NewConfirmed": 6,
                "TotalConfirmed": 28,
                "NewDeaths": 0,
                "TotalDeaths": 0,
                "NewRecovered": 0,
                "TotalRecovered": 0
              },
              {
                "Country": "Zimbabwe",
                "Slug": "zimbabwe",
                "NewConfirmed": 2,
                "TotalConfirmed": 7,
                "NewDeaths": 0,
                "TotalDeaths": 1,
                "NewRecovered": 0,
                "TotalRecovered": 0
              }
            ],
            "Date": "2020-03-29T02:07:26.174102617Z"
          }


        return summary;
    }
        
}